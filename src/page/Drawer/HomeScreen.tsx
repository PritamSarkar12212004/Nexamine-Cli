import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import ColorGrediant from '../../components/wraper/ColorGrediant'
import Header from '../../components/header/Header'
import PageWraper from '../../components/wraper/PageWraper'

const HomeScreen = () => {
    return (
        <ColorGrediant>
            <Header />
            <PageWraper>
                <View className=''>
                </View>
            </PageWraper>
        </ColorGrediant>
    )
}

export default HomeScreen