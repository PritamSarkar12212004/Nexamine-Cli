import { View, Text, ScrollView, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from '../../components/icon/Icon'
import ColorGrediant from '../../components/wraper/ColorGrediant'

const SettingScreen = () => {
    const [settings, setSettings] = useState({
        encryption: true,
        notifications: true,
        autoBackup: false,
        syncOnMobileData: false,
        darkMode: true,
        biometricAuth: false,
        cloudSync: true,
        compactView: false,
        developerMode: false
    })

    const toggleSwitch = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <ColorGrediant>
            <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
                <View className="mb-6">
                    <Text className="text-3xl font-bold text-white mb-2">Settings</Text>
                    <Text className="text-gray-400">Manage your database application preferences</Text>
                </View>

                {/* Security Section */}
                <View className="bg-gray-800/50 rounded-2xl p-5 mb-6">
                    <Text className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="shield" size={20} color="#3B82F6" className="mr-2" />
                        Security & Privacy
                    </Text>

                    <View className="space-y-4">
                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">End-to-End Encryption</Text>
                                <Text className="text-gray-400 text-xs">Encrypt all database communications</Text>
                            </View>
                            <Switch
                                value={settings.encryption}
                                onValueChange={() => toggleSwitch('encryption')}
                                trackColor={{ false: '#767577', true: '#3B82F6' }}
                                thumbColor={settings.encryption ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Biometric Authentication</Text>
                                <Text className="text-gray-400 text-xs">Use fingerprint or face ID to access app</Text>
                            </View>
                            <Switch
                                value={settings.biometricAuth}
                                onValueChange={() => toggleSwitch('biometricAuth')}
                                trackColor={{ false: '#767577', true: '#3B82F6' }}
                                thumbColor={settings.biometricAuth ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Auto-Lock</Text>
                                <Text className="text-gray-400 text-xs">Lock app after 5 minutes of inactivity</Text>
                            </View>
                            <Text className="text-blue-400 font-medium">Configure</Text>
                        </View>
                    </View>
                </View>

                {/* Notifications Section */}
                <View className="bg-gray-800/50 rounded-2xl p-5 mb-6">
                    <Text className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="bell" size={20} color="#10B981" className="mr-2" />
                        Notifications
                    </Text>

                    <View className="space-y-4">
                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Push Notifications</Text>
                                <Text className="text-gray-400 text-xs">Receive alerts for important events</Text>
                            </View>
                            <Switch
                                value={settings.notifications}
                                onValueChange={() => toggleSwitch('notifications')}
                                trackColor={{ false: '#767577', true: '#10B981' }}
                                thumbColor={settings.notifications ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Email Notifications</Text>
                                <Text className="text-gray-400 text-xs">Get updates via email</Text>
                            </View>
                            <Text className="text-blue-400 font-medium">Configure</Text>
                        </View>

                        <View className="flex-row justify-between items-center py-3">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Sound Alerts</Text>
                                <Text className="text-gray-400 text-xs">Play sound for critical notifications</Text>
                            </View>
                            <Text className="text-blue-400 font-medium">Configure</Text>
                        </View>
                    </View>
                </View>

                {/* Storage & Data Section */}
                <View className="bg-gray-800/50 rounded-2xl p-5 mb-6">
                    <Text className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="database" size={20} color="#F59E0B" className="mr-2" />
                        Storage & Data
                    </Text>

                    <View className="space-y-4">
                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Auto Backup</Text>
                                <Text className="text-gray-400 text-xs">Backup database daily at 2:00 AM</Text>
                            </View>
                            <Switch
                                value={settings.autoBackup}
                                onValueChange={() => toggleSwitch('autoBackup')}
                                trackColor={{ false: '#767577', true: '#F59E0B' }}
                                thumbColor={settings.autoBackup ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Sync on Mobile Data</Text>
                                <Text className="text-gray-400 text-xs">Allow data sync when not on WiFi</Text>
                            </View>
                            <Switch
                                value={settings.syncOnMobileData}
                                onValueChange={() => toggleSwitch('syncOnMobileData')}
                                trackColor={{ false: '#767577', true: '#F59E0B' }}
                                thumbColor={settings.syncOnMobileData ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Cloud Sync</Text>
                                <Text className="text-gray-400 text-xs">Sync data with cloud storage</Text>
                            </View>
                            <Switch
                                value={settings.cloudSync}
                                onValueChange={() => toggleSwitch('cloudSync')}
                                trackColor={{ false: '#767577', true: '#F59E0B' }}
                                thumbColor={settings.cloudSync ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="py-4">
                            <View className="flex-row justify-between items-center mb-2">
                                <Text className="text-white font-medium">Storage Usage</Text>
                                <Text className="text-gray-400">1.2 GB of 2 GB used</Text>
                            </View>
                            <View className="w-full bg-gray-700 rounded-full h-2">
                                <View className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></View>
                            </View>
                            <TouchableOpacity className="mt-4 bg-blue-600 py-3 rounded-xl flex items-center">
                                <Text className="text-white font-semibold">Expand Storage</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Appearance Section */}
                <View className="bg-gray-800/50 rounded-2xl p-5 mb-6">
                    <Text className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="palette" size={20} color="#EC4899" className="mr-2" />
                        Appearance
                    </Text>

                    <View className="space-y-4">
                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Dark Mode</Text>
                                <Text className="text-gray-400 text-xs">Use dark theme interface</Text>
                            </View>
                            <Switch
                                value={settings.darkMode}
                                onValueChange={() => toggleSwitch('darkMode')}
                                trackColor={{ false: '#767577', true: '#EC4899' }}
                                thumbColor={settings.darkMode ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Compact View</Text>
                                <Text className="text-gray-400 text-xs">Show more data in less space</Text>
                            </View>
                            <Switch
                                value={settings.compactView}
                                onValueChange={() => toggleSwitch('compactView')}
                                trackColor={{ false: '#767577', true: '#EC4899' }}
                                thumbColor={settings.compactView ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Font Size</Text>
                                <Text className="text-gray-400 text-xs">Adjust text size throughout app</Text>
                            </View>
                            <Text className="text-blue-400 font-medium">Medium</Text>
                        </View>
                    </View>
                </View>

                {/* Advanced Settings */}
                <View className="bg-gray-800/50 rounded-2xl p-5 mb-6">
                    <Text className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Icon name="settings" size={20} color="#8B5CF6" className="mr-2" />
                        Advanced
                    </Text>

                    <View className="space-y-4">
                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Developer Mode</Text>
                                <Text className="text-gray-400 text-xs">Enable advanced debugging tools</Text>
                            </View>
                            <Switch
                                value={settings.developerMode}
                                onValueChange={() => toggleSwitch('developerMode')}
                                trackColor={{ false: '#767577', true: '#8B5CF6' }}
                                thumbColor={settings.developerMode ? '#fff' : '#f4f3f4'}
                            />
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Cache Management</Text>
                                <Text className="text-gray-400 text-xs">Clear temporary files</Text>
                            </View>
                            <Text className="text-blue-400 font-medium">Clear Now</Text>
                        </View>

                        <View className="flex-row justify-between items-center py-3 border-b border-gray-700/50">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Export Data</Text>
                                <Text className="text-gray-400 text-xs">Download your database backup</Text>
                            </View>
                            <Text className="text-blue-400 font-medium">Export</Text>
                        </View>

                        <View className="flex-row justify-between items-center py-3">
                            <View className="flex-1">
                                <Text className="text-white font-medium">Reset Settings</Text>
                                <Text className="text-gray-400 text-xs">Restore all settings to default</Text>
                            </View>
                            <Text className="text-red-400 font-medium">Reset</Text>
                        </View>
                    </View>
                </View>

                {/* App Info */}
                <View className="bg-gray-800/50 rounded-2xl p-5 mb-10">
                    <Text className="text-xl font-semibold text-white mb-4">About</Text>

                    <View className="space-y-3">
                        <View className="flex-row justify-between items-center py-2">
                            <Text className="text-gray-400">App Version</Text>
                            <Text className="text-white">2.4.1</Text>
                        </View>
                        <View className="flex-row justify-between items-center py-2">
                            <Text className="text-gray-400">Build Number</Text>
                            <Text className="text-white">20231215</Text>
                        </View>
                        <View className="flex-row justify-between items-center py-2">
                            <Text className="text-gray-400">License</Text>
                            <Text className="text-white">Enterprise Edition</Text>
                        </View>
                        <View className="flex-row justify-between items-center py-2">
                            <Text className="text-gray-400">Terms of Service</Text>
                            <Text className="text-blue-400">View</Text>
                        </View>
                        <View className="flex-row justify-between items-center py-2">
                            <Text className="text-gray-400">Privacy Policy</Text>
                            <Text className="text-blue-400">View</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ColorGrediant>
    )
}

export default SettingScreen