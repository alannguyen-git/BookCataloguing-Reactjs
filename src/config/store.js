import { createStore, combineReducers } from 'redux';
import dataReducer from '../reducers/rootReducer'

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        console.log(error)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const rootReducer = combineReducers({
    books: dataReducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))
export default store