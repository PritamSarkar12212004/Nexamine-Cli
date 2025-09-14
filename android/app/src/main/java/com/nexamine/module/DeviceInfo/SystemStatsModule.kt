package com.nexamine.module.DeviceInfo

import android.app.ActivityManager
import android.content.Context
import android.net.TrafficStats
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import java.io.RandomAccessFile
import kotlin.concurrent.fixedRateTimer

class DeviceInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val reactAppContext = reactContext // use inside timer
    private val context: Context = reactContext
    private var prevRxBytes: Long = 0
    private var prevTxBytes: Long = 0

    override fun getName(): String {
        return "DeviceInfo"
    }

    @ReactMethod
    fun startSendingStats() {
        val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager

        prevRxBytes = TrafficStats.getTotalRxBytes()
        prevTxBytes = TrafficStats.getTotalTxBytes()

        fixedRateTimer("systemStatsTimer", false, 0L, 1000L) {
            // --- RAM Usage ---
            val memoryInfo = ActivityManager.MemoryInfo()
            activityManager.getMemoryInfo(memoryInfo)
            val totalMem = memoryInfo.totalMem.toDouble()
            val availMem = memoryInfo.availMem.toDouble()
            val usedMemPercent = ((totalMem - availMem) / totalMem * 100).toInt()

            // --- CPU Usage ---
            val reader = RandomAccessFile("/proc/stat", "r")
            val load1 = reader.readLine().split(" ").filter { it.isNotEmpty() }.drop(1).map { it.toLong() }
            val idle1 = load1[3]
            val total1 = load1.sum()
            Thread.sleep(360) // small delay to measure CPU diff
            reader.seek(0)
            val load2 = reader.readLine().split(" ").filter { it.isNotEmpty() }.drop(1).map { it.toLong() }
            val idle2 = load2[3]
            val total2 = load2.sum()
            val cpuUsage = ((total2 - total1 - (idle2 - idle1)).toDouble() / (total2 - total1) * 100).toInt()
            reader.close()

            // --- Network Speed ---
            val rxBytes = TrafficStats.getTotalRxBytes()
            val txBytes = TrafficStats.getTotalTxBytes()
            val downloadSpeed = ((rxBytes - prevRxBytes) / 1024).toInt() // KB/s
            val uploadSpeed = ((txBytes - prevTxBytes) / 1024).toInt() // KB/s
            prevRxBytes = rxBytes
            prevTxBytes = txBytes

            // --- Send Event to JS ---
            val map = Arguments.createMap()
            map.putInt("ramUsage", usedMemPercent)
            map.putInt("cpuUsage", cpuUsage)
            map.putInt("downloadSpeed", downloadSpeed)
            map.putInt("uploadSpeed", uploadSpeed)

            reactAppContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("SystemStatsUpdate", map)
        }
    }
}
