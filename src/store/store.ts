import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer './reducers/UserSlice';

const rootReducer = combineReducers({
userReducer
})

export const setupStore = () =>{
 return  configureStore ({
    reducer: rootReducer
 })
}

export type RootReducer = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']