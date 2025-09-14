import './global.css'
import React, { Fragment, useEffect, useState } from 'react'
import Routes from './src/routes/Routes'
import { ContextProvider } from './src/utils/context/ContextProvider'
import WorkerRoutes from './src/routes/WorkerRoutes'
import { StatusBar } from 'react-native'

const App = () => {
  return (
    <ContextProvider>
      <Fragment>
        <StatusBar hidden />
        <WorkerRoutes>
          <Routes />
        </WorkerRoutes>
      </Fragment>
    </ContextProvider>
  )
}

export default App
