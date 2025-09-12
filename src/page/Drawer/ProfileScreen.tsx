import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from '../../components/icon/Icon'

const ProfileScreen = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    phone: '+1 (555) 123-4567',
    email: 'alex.johnson@example.com',
    bio: 'Full Stack Developer | React Native Enthusiast',
    location: 'San Francisco, CA',
    gender: 'Male',
    occupation: 'Software Developer',
    education: 'Master of Computer Science',
    dob: '15 March 1992'
  })

  return (
    <View className="flex-1 bg-gray-900">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        {/* Profile Header */}
        <View className="items-center pt-8 pb-6 bg-blue-600">
          <View className="relative mb-4">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80' }}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-700 p-2 rounded-full">
              <Icon name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>

          <Text className="text-2xl font-bold text-white">{profile.name}</Text>
          <Text className="text-blue-100">{profile.occupation}</Text>
        </View>

        {/* Profile Content */}
        <View className="px-5 pb-10 -mt-4">
          <View className="bg-gray-800 rounded-2xl p-5 mb-5">
            <Text className="text-xl font-semibold text-white mb-4">About Me</Text>

            <View className="space-y-3">
              <View className="flex-row items-center">
                <Icon name="briefcase" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3">{profile.occupation}</Text>
              </View>
              <View className="flex-row items-center">
                <Icon name="graduation-cap" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3">{profile.education}</Text>
              </View>
              <View className="flex-row items-center">
                <Icon name="map-pin" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3">{profile.location}</Text>
              </View>
              <View className="flex-row items-center">
                <Icon name="calendar" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3">Born {profile.dob}</Text>
              </View>
            </View>

            <View className="mt-4 p-3 bg-gray-700 rounded-lg">
              <Text className="text-white leading-5">{profile.bio}</Text>
            </View>
          </View>

          {/* Personal Information */}
          <View className="bg-gray-800 rounded-2xl p-5 mb-5">
            <Text className="text-xl font-semibold text-white mb-4">Contact Information</Text>

            <View className="space-y-3">
              <View className="flex-row items-center py-2">
                <Icon name="phone" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3 flex-1">{profile.phone}</Text>
                <TouchableOpacity>
                  <Icon name="edit" size={16} color="#3B82F6" />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center py-2">
                <Icon name="mail" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3 flex-1">{profile.email}</Text>
                <TouchableOpacity>
                  <Icon name="edit" size={16} color="#3B82F6" />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-center py-2">
                <Icon name="user" size={18} color="#9CA3AF" />
                <Text className="text-white ml-3 flex-1">{profile.gender}</Text>
                <TouchableOpacity>
                  <Icon name="edit" size={16} color="#3B82F6" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="bg-gray-800 rounded-2xl p-5">
            <Text className="text-xl font-semibold text-white mb-4">Profile Actions</Text>

            <View className="space-y-3">
              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center">
                  <Icon name="shield" size={20} color="#3B82F6" />
                  <Text className="text-white ml-3">Privacy Settings</Text>
                </View>
                <Icon name="chevron-right" size={16} color="#9CA3AF" />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center">
                  <Icon name="bell" size={20} color="#10B981" />
                  <Text className="text-white ml-3">Notification Preferences</Text>
                </View>
                <Icon name="chevron-right" size={16} color="#9CA3AF" />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center">
                  <Icon name="lock" size={20} color="#F59E0B" />
                  <Text className="text-white ml-3">Change Password</Text>
                </View>
                <Icon name="chevron-right" size={16} color="#9CA3AF" />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row items-center justify-between py-3">
                <View className="flex-row items-center">
                  <Icon name="log-out" size={20} color="#EF4444" />
                  <Text className="text-white ml-3">Sign Out</Text>
                </View>
                <Icon name="chevron-right" size={16} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen