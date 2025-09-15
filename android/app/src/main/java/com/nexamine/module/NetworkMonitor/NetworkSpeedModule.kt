package com.nexamine.module.NetworkMonitor

import android.net.TrafficStats
import com.facebook.react.bridge.*

class NetworkSpeedModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "NetworkSpeed"

    @ReactMethod
    fun getNetworkBytes(promise: Promise) {
        try {
            val rxBytes = TrafficStats.getTotalRxBytes()
            val txBytes = TrafficStats.getTotalTxBytes()
            promise.resolve(Arguments.createMap().apply {
                putDouble("rx", rxBytes.toDouble())
                putDouble("tx", txBytes.toDouble())
            })
        } catch (e: Exception) {
            promise.reject("ERROR", e)
        }
    }
}
