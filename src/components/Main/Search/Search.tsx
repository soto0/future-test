import { FC, useState } from 'react';
import { useAction } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './Search.module.css';
import SearchForm from './SearchForm/SearchForm';

const Search: FC = () => {
    const [selectorCategoriesActive, setSelectorCategoriesActive] = useState(false);
    const [selectorSortingActive, setSelectorSortingActive] = useState(false);
    const [selectorsValidate, setSelectorsValidate] = useState(true);
    const [sortValue, setSortValue] = useState('relevance');
    const { getBooks, getLoading } = useAction();
    const { SearchValue, Category } = useTypedSelector(state => state.Books);

    const selectCategory = (e: any) => {
        try {
            if (SearchValue === '') {
                setSelectorsValidate(false);
            } else {
                getBooks(SearchValue, sortValue, e.target.innerText);
                getLoading();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const selectorCategoriesToggle = () => {
        setSelectorCategoriesActive(!selectorCategoriesActive);
    };

    const selectorSortingToggle = () => {
        setSelectorSortingActive(!selectorSortingActive);
    };

    const onClickSortOption = (e: any) => {
        try {
            if (SearchValue === '') {
                setSelectorsValidate(false);
            } else {
                setSortValue(e.target.innerText);
                getBooks(SearchValue, e.target.innerText, Category);
                getLoading();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={s.search}>
            <SearchForm SortValue={sortValue} GetBooks={getBooks} GetLoading={getLoading} SelectorsValidate={selectorsValidate} SetSelectorsValidate={setSelectorsValidate} />
            <div className={s.search__selectors}>
                <div className={s.selector}>
                    <h2 className={s.selector__title}>Categories</h2>
                    <div className={s.category__selector} onClick={selectorCategoriesToggle}>
                        <p className={s.default__option}>{Category}</p>
                        {
                            selectorCategoriesActive ?
                                <div className={s.select__block}>
                                    <p className={s.option} onClick={selectCategory}>All</p>
                                    <p className={s.option} onClick={selectCategory}>Art</p>
                                    <p className={s.option} onClick={selectCategory}>Biography</p>
                                    <p className={s.option} onClick={selectCategory}>Computers</p>
                                    <p className={s.option} onClick={selectCategory}>History</p>
                                    <p className={s.option} onClick={selectCategory}>Medical</p>
                                    <p className={s.option} onClick={selectCategory}>Poetry</p>
                                </div> :
                                undefined
                        }
                    </div>
                </div>
                <div className={s.selector}>
                    <h2 className={s.selector__title}>Sorting By</h2>
                    <div className={s.sorting__selector} onClick={selectorSortingToggle}>
                        <p className={s.default__option}>{sortValue}</p>
                        {
                            selectorSortingActive ?
                                <div className={s.select__block}>
                                    <p className={s.option} onClick={onClickSortOption}>relevance</p>
                                    <p className={s.option} onClick={onClickSortOption}>newest</p>
                                </div> :
                                undefined
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;