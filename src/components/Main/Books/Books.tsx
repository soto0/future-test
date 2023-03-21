import { FC, useState } from 'react';
import s from './Books.module.css';
import BookCard from '../BookCard/BookCard';
import Preloader from './../../../assets/preloader/preloader.gif';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Books: FC = () => {
    const { Books, Loading, SearchValue } = useTypedSelector(state => state.Books);
    const [moreBooks, setMoreBooks] = useState(4);
    
    const loadMore = () => {
        setMoreBooks(moreBooks + 30);
    };

    return (
        <div className="container">
            <div className={s.books__top}>
                {
                    SearchValue === '' ?
                        undefined :
                        <h4 className={s.books__count}>Found {Books?.length ? Books.length : 0} results</h4>

                }
            </div>
            <div className={s.books__bottom}>
                {Loading ? <img src={Preloader} alt="preloader" className="preloader" /> : undefined}
                {
                    Books?.slice(0, moreBooks).map((book: any) => {
                        return (
                            <BookCard
                                Icon={book.volumeInfo.imageLinks?.thumbnail}
                                Category={book.volumeInfo?.categories}
                                Title={book.volumeInfo.title}
                                Author={book.volumeInfo.authors}
                                Id={book.id}
                                key={book.id}
                            />
                        )
                    })
                }
            </div>
            {
                Books?.length === 0 || Books?.length <= moreBooks || Books?.length === undefined ?
                    undefined :
                    <button className={s.more} onClick={loadMore}>Load more</button>
            }
        </div>
    );
};

export default Books;