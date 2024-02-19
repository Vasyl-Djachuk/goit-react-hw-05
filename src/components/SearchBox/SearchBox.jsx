import { useId, useState } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ changeQuery }) => {
  const [searchText, setSearchText] = useState(``);
  const id = useId();

  const handleChange = e => {
    setSearchText(e.target.value.trim());
  };

  const handleSumit = e => {
    e.preventDefault();
    if (searchText == ``) return;
    changeQuery(searchText);
    setSearchText(``);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSumit}>
        <label htmlFor={id}></label>
        <input
          className={css.input}
          name="search"
          value={searchText}
          onChange={handleChange}
          id={id}
          type="text"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
