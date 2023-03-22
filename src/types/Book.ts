export interface BookState {
    Book: any
};

export enum BookTypes {
    GET_BOOK = 'GET_BOOK'
};

interface getBook {
    type: BookTypes.GET_BOOK,
    book: []
};

export type BookAction = getBook;