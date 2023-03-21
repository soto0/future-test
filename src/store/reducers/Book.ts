import { BookState, BookAction, BookTypes } from './../../types/Book';

const initialState: BookState = {
    Book: []
};

export const BookReducer = (state = initialState, action: BookAction): BookState => {
    switch (action.type) {
        case BookTypes.GET_BOOK:
            return { ...state, Book: action.book }
        default: 
            return state
    };
};