import { BooksState, BooksAction, BooksTypes } from './../../types/Books';

const initialState: BooksState = {
    Books: [],
    SearchValue: '',
    Category: 'All',
    Loading: false
};

export const BooksReducer = (state = initialState, action: BooksAction): BooksState => {
    switch (action.type) {
        case BooksTypes.GET_BOOKS:
            return { 
                        ...state, 
                        Books: action.books, 
                        SearchValue: action.searchValue, 
                        Category: action.category, 
                        Loading: action.loading 
                    }
        case BooksTypes.GET_LOADING: 
            return { ...state, Loading: action.loading }
        default: 
            return state
    }
}