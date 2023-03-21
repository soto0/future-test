import {FC} from 'react';
import { Link } from 'react-router-dom';
import s from './BookCard.module.css';

interface BookCardProps {
    Icon: string,
    Category: string,
    Title: string,
    Author: string
    Id: string
};

const BookCard: FC<BookCardProps> = (props: BookCardProps) => {
    return (
        <Link to={props.Id} className={s.book}>
            <div className={s.book__top}>
                <img src={props.Icon} alt="book" className={s.book__icon} />
            </div>
            <div className={s.book__bottom}>
                <p className={s.book__category}>{props.Category}</p>
                <h3 className={s.book__title}>{props.Title}</h3>
                <p className={s.book__author}>{props.Author}</p>
            </div>
        </Link>
    );
};

export default BookCard;