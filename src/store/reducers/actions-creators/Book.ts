import { BookAction, BookTypes } from './../../../types/Book';
import { Dispatch } from "redux"
import axios from 'axios';

export const getBook = (bookId: string) => {
    return async (dispatch: Dispatch<BookAction>) => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
            dispatch({ type: BookTypes.GET_BOOK, book: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};