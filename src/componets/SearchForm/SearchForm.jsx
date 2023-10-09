import { useFormValidation } from "../../hooks/useFormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import "./SearchForm.css";

function SearchForm({
  onFilterClick,
  isChecked,
  inputValue = "",
  onInputChange,
  onSubmit,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }

  return (
    <section className="search search__container container">
      <form className="form search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          placeholder="Фильм"
          name="search"
          id="search"
          autoComplete="off"
          type="text"
          minLength="1"
          value={inputValue}
          onChange={onInputChange}
        />
        <button className="search__btn" type="submit">
          Найти
        </button>
      </form>
      <FilterCheckbox onFilterClick={onFilterClick} isChecked={isChecked} />
    </section>
  );
}

export default SearchForm;
