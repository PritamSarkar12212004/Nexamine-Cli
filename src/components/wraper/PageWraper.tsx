import React, { Fragment } from 'react'
import { View } from 'react-native'

const PageWraper = ({ children }: any) => {
    return (
        <View className='flex-1 px-5 '>
            {
                children
            }
        </View>
    )
}

export default PageWraper