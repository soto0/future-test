import { FC, useEffect } from 'react';
import s from './Book.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useActions';
import Preloader from './../../assets/preloader/preloader.gif';

const Book: FC = () => {
    const { getBook } = useAction();
    const bookId = window.location.pathname.slice(1);
    const { Book } = useTypedSelector(state => state.Book);

    useEffect(() => {
        getBook(bookId);
    }, []);

    console.log(Book);

    return (
        <>
            {
                Book.length === 0 ?
                    <img src={Preloader} alt="preloader" className="preloader" /> :
                    <div className='book__container container'>
                        <div className={s.book__left}>
                           {
                                Book.volumeInfo.imageLinks?.thumbnail ? 
                                    <img src={Book.volumeInfo.imageLinks?.thumbnail} alt="book" className={s.book__icon} /> :
                                    <p className="no__image">Нет фото</p>
                            }
                        </div>
                        <div className={s.book__right}>
                            <p className={s.book__category}>{Book.volumeInfo?.categories}</p>
                            <h3 className={s.book__title}>{Book.volumeInfo.title}</h3>
                            <p className={s.book__author}>{Book.volumeInfo.authors}</p>
                            <div className={s.book__description}>{Book.volumeInfo.description}</div>
                        </div>
                    </div>

            }
        </>
    );
};

export default Book;