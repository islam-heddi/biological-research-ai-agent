import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./AuthState"

type AuthPayload = {
    auth: {
        value: {
            user: string;
            userId: string;
            isAuthed: string;
        }
    }
}

const loadState: () => AuthPayload = () => {
  try {
    const serialized = localStorage.getItem("reduxState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (e) {
    return undefined;
  }
};



const saveState = (state: any) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("reduxState", serialized);
    } catch (e) {
        console.error("Could not save state", e);
    return undefined;
    }
}

const preloadedState = loadState()

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    preloadedState
})

store.subscribe(() => {
    saveState(store.getState())
})

export {store}