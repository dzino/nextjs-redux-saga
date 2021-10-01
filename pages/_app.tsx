import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { compose, createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "@redux-saga/core"
import { rootReducer } from "../redux"
import { sagaWatcher } from "../sagas"

/**
 * # Redux
 * Chrome: Redux DevTools
 */
const saga = createSagaMiddleware()
const devTools =
  typeof window !== 'undefined'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()]
    : []
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, saga), ...devTools)
)
saga.run(sagaWatcher)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
