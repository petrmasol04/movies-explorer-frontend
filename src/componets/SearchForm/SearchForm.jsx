import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm() {
    return (
        <div className="search__container container">
            <form className="search__form">
                <input
                    className="search__input"
                    placeholder="Фильм"
                    name="search"
                    id="search"
                    autoComplete="off"
                    type="text"
                />
                <button className="search__btn" type="submit">Найти</button>
            </form>
            <FilterCheckbox />
        </div>
    )
}

export default SearchForm;