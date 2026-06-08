import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./AuthState"
const store = configureStore({
    reducer: {
        auth: authReducer
    },
})

export {store}