import './global.css'
import React, { Fragment } from 'react'
import Routes from './src/routes/Routes'
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <Fragment>
      <StatusBar hidden  />
      <Routes />
    </Fragment>
  )
}

export default App