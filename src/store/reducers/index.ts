import { combineReducers } from "redux";
import { BooksReducer } from "./Books";

export const rootReducer = combineReducers({
    Books: BooksReducer
});

export type RootState = ReturnType<typeof rootReducer>