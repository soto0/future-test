import { FC } from 'react';
import * as yup from "yup";
import s from './../Search.module.css';
import { Field, Form, Formik } from 'formik';
import SearchIcon from './../../../../assets/images/search.svg';
import { useNavigate } from 'react-router-dom';

interface SearchFormProps {
    GetBooks: any,
    GetLoading: any
    SortValue: string,
    SetSelectorsValidate: any,
    SelectorsValidate: boolean
};

const SearchForm: FC<SearchFormProps> = (props: SearchFormProps) => {
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        bookTitle: yup.string().required()
    });

    return (
        <Formik
            initialValues={{ bookTitle: '' }}
            onSubmit={(values: any) => {
                props.GetBooks(values.bookTitle, props.SortValue, 'All');
                props.GetLoading();
                props.SetSelectorsValidate(true);
                navigate('');
            }}
            validationSchema={validationSchema}
        >
            {({ values, isValid, handleChange, handleBlur }) => (
                <Form className={s.input__block}>
                    <Field type='text' name='bookTitle' className={props.SelectorsValidate ? s.search__input : s.search__input_error} onChange={handleChange} onBlur={handleBlur} value={values.bookTitle} />
                    <button className={s.search__btn} type='submit' disabled={!isValid}>
                        <img src={SearchIcon} alt="search" className={s.search__btn_icon} />
                    </button>
                </Form>
            )}
        </Formik>

    );
};


export default SearchForm;