import { View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import getToken from '../functions/tokens/getToken'
import TokenConstant from '../constants/tokens/TokenConstant'
import GenerateKey from '../functions/encryption/GenerateKey'
import setData from '../functions/tokens/setData'
import { userContext } from '../utils/context/ContextProvider'

const WorkerRoutes = ({ children }: any) => {
    const [loading, setLoading] = useState<boolean>(true)
    const { setokenContext } = userContext()
    const fetchToken = async () => {
        const privateKey = await getToken(TokenConstant.key.PRIVATE_KEY)
        const publicKey = await getToken(TokenConstant.key.PUBLIC_KEY)
        if (!privateKey && !publicKey) {
            const { privateKey: newPrivateKey, publicKey: newPublicKey } = GenerateKey()
            await setData(TokenConstant.key.PRIVATE_KEY, newPrivateKey)
            await setData(TokenConstant.key.PUBLIC_KEY, newPublicKey)
            await setokenContext({
                privateToken: newPrivateKey,
                publickToken: newPublicKey
            })
            setLoading(false)
        }
        await setokenContext({
            privateToken: privateKey,
            publickToken: publicKey
        })
        setLoading(false)
    }
    useEffect(() => {
        fetchToken()
    }, [])

    if (loading) {
        return <View className='flex-1 flex items-center justify-center'><ActivityIndicator color={"white"} size={30} /></View>
    }
    return (
        children
    )
}

export default WorkerRoutes