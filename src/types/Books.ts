export interface BooksState {
    Books: [],
    SearchValue: string,
    Category: string | undefined,
    Loading: boolean
};

export enum  BooksTypes {
    GET_BOOKS = 'GET_BOOKS',
    GET_LOADING = 'GET_LOADING'
};

interface getBooks {
    type: BooksTypes.GET_BOOKS,
    books: []
    searchValue: string,
    category: string | undefined,
    loading: boolean
};

interface getLoading {
    type: BooksTypes.GET_LOADING,
    loading: boolean
}


export type BooksAction = getBooks | getLoading;
