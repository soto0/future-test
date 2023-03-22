import { combineReducers } from "redux";
import { BookReducer } from "./Book";
import { BooksReducer } from "./Books";

export const rootReducer = combineReducers({
    Books: BooksReducer,
    Book: BookReducer
});

export type RootState = ReturnType<typeof rootReducer>