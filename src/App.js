import React from 'react'

import App from 'containers/app'
import { Provider } from 'react-redux'
import { setStore } from './app-store'

const store = setStore()

const WebApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
export default WebApp
