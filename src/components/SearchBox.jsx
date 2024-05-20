import { IoIosSearch } from "react-icons/io";

import styles from "./SearchBox.module.css"

function SearchBox({ search, setSearch , searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoIosSearch />
      </button>
    </div>
  );
}

export default SearchBox;
