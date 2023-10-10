import "./FilterCheckbox.css";

function FilterCheckbox({ onFilterClick, isChecked }) {
  return (
    <div className="filter__container">
      <label className="filter__switch">
        <input
          className="filter__input"
          type="checkbox"
          checked={isChecked}
          onChange={onFilterClick}
        />
        <span className="filter__slider" />
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
