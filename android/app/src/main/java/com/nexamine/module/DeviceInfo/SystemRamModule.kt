package com.nexamine.module.DeviceInfo

import android.app.ActivityManager
import android.content.Context
import com.facebook.react.bridge.*

class SystemRamModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private val context: Context = reactContext

    override fun getName(): String {
        return "SystemRam"
    }

    @ReactMethod
    fun getSystemMemory(promise: Promise) {
        try {
            val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
            val memoryInfo = ActivityManager.MemoryInfo()
            activityManager.getMemoryInfo(memoryInfo)

            val totalMem = memoryInfo.totalMem
            val availMem = memoryInfo.availMem
            val usedMem = totalMem - availMem

            val result = Arguments.createMap()
            result.putDouble("total", totalMem.toDouble())
            result.putDouble("available", availMem.toDouble())
            result.putDouble("used", usedMem.toDouble())

            promise.resolve(result)
        } catch (e: Exception) {
            promise.reject("ERR_MEMORY", e)
        }
    }
}
