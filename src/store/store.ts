import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import rows from './reducers/rows'

const reducer = { rows }

const combinedReducer = combineReducers<typeof reducer>(reducer)

export const store = configureStore({
  reducer: combinedReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof combinedReducer>
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
