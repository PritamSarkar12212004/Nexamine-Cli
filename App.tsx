import './global.css'
import React, { Fragment, useEffect, useState } from 'react'
import Routes from './src/routes/Routes'
import { ActivityIndicator, StatusBar } from 'react-native'
import getToken from './src/functions/tokens/getToken'
import TokenConstant from './src/constants/tokens/TokenConstant'
import generateKey from './src/functions/encryption/GenerateKey'
import setData from './src/functions/tokens/setData'

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)

  const fetchToken = async () => {
    console.log("call func")
    const privateKey = await getToken(TokenConstant.key.PRIVATE_KEY)
    const publicKey = await getToken(TokenConstant.key.PUBLIC_KEY)
    console.log("get private keys")
    if (!privateKey && !publicKey) {
      console.log("no keys found, generating new key pair...")
      const { privateKey: newPrivateKey, publicKey: newPublicKey } = generateKey()
      console.log("keys generated")
      await setData(TokenConstant.key.PRIVATE_KEY, newPrivateKey)
      await setData(TokenConstant.key.PUBLIC_KEY, newPublicKey)
      console.log("keys stored successfully")
    } else {
      console.log("keys already exist")
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchToken()
  }, [])

  return (
    <Fragment>
      <StatusBar hidden />
      {
        loading
          ? <ActivityIndicator color={"white"} size={30} />
          : <Routes />
      }
    </Fragment>
  )
}

export default App
