import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import Reducers from '../reducers';
import Sagas from '../sagas';
import createSagaMiddleware from 'redux-saga';
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(Sagas)
  return store;
}
