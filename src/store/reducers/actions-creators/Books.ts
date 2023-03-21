import axios from "axios";
import { Dispatch } from "redux";
import { ApiKey } from "../../../api/ApiKey";
import { BooksAction, BooksTypes } from "../../../types/Books"

export const getBooks = (bookTitle: string, sort: string, category?: string) => {
    return async (dispatch: Dispatch<BooksAction>) => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&orderBy=${sort}&maxResults=40&key=${ApiKey}`);

        if (category !== 'All') {
            const filterBooks = response.data.items.filter((book: any) => book.volumeInfo.categories?.includes(category));
            dispatch({ type: BooksTypes.GET_BOOKS, books: filterBooks, searchValue: bookTitle, category: category, loading: false });
        } else {
            dispatch({ type: BooksTypes.GET_BOOKS, books: response.data.items, searchValue: bookTitle, category: 'All', loading: false });
        }
    };
};

export const getLoading = () => {
    return (dispatch: Dispatch<BooksAction>) => {
        dispatch({type: BooksTypes.GET_LOADING, loading: true });
    };
};