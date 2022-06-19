import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { LoginReducer, registerReducer, simuladorReducer } from "../reducers/Reducers";

const reducers = combineReducers({
    auth: LoginReducer,
    register: registerReducer,
    simulador: simuladorReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)