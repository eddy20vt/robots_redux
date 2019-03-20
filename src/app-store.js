import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'modules/index'
import rootSagas from 'sagas/index'

export const setStore = () => {
    const sagaMiddleware = createSagaMiddleware(rootSagas)
    const middlewares = [
        sagaMiddleware,
    ]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middlewares)),
    )

    sagaMiddleware.run(rootSagas)

    return store
}
