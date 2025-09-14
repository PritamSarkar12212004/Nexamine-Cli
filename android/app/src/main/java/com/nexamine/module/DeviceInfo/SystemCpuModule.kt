package com.nexamine.module.DeviceInfo

import com.facebook.react.bridge.*
import java.io.RandomAccessFile

class SystemCpuModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "SystemCpu"
    }

    private fun readCpuStat(): LongArray {
        val reader = RandomAccessFile("/proc/stat", "r")
        val load = reader.readLine().split("\\s+".toRegex()).drop(1).map { it.toLong() }
        reader.close()
        return load.toLongArray()
    }

    @ReactMethod
    fun getCpuUsage(promise: Promise) {
        try {
            val stat1 = readCpuStat()
            Thread.sleep(360) // chhota delay chahiye CPU diff nikalne ke liye
            val stat2 = readCpuStat()

            val idle1 = stat1[3]
            val idle2 = stat2[3]

            val total1 = stat1.sum()
            val total2 = stat2.sum()

            val totalDiff = total2 - total1
            val idleDiff = idle2 - idle1

            val usage = (totalDiff - idleDiff).toDouble() / totalDiff.toDouble() * 100.0

            val result = Arguments.createMap()
            result.putDouble("usage", usage)

            promise.resolve(result)
        } catch (e: Exception) {
            promise.reject("ERR_CPU", e)
        }
    }
}
