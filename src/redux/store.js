import { createStore, combineReducers } from 'redux'
import weatherReducer from './reducers/weatherReducer'
import todoReducer from './reducers/todoReducer'

const reducer = combineReducers({
      weatherReducer,
      todoReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )

export default store