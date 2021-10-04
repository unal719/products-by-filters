import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { productReducer } from "./reducers";

const rootReduce = combineReducers({
    products: productReducer,
});

export type RootState = ReturnType<typeof rootReduce>;
export const store = createStore(
    rootReduce,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState>))
);