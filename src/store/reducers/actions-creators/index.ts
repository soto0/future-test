import * as BooksActionCreators from './Books';
import * as BookActionCreators from './Book';

export default {
    ...BooksActionCreators,
    ...BookActionCreators
};