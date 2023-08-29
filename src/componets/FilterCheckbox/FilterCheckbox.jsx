import "./FilterCheckbox.css";

function FilterCheckbox() {
    return (
        <div className="filter__container">
            <label className="filter__switch">
                <input className="filter__input" type="checkbox" />
                <span className="filter__slider" />
            </label>
            <p className="filter__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;