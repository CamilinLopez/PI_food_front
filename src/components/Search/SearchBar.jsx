import { useState } from "react";
import styles from "./search.module.css";

const SearchBar = ({ onSearch }) => {
    const [recipe, setRecipe] = useState("");

    const handleChange = (e) => {
        setRecipe(e.target.value);
    }

    return (
        <div className={styles.principal} >
            <input
                type={"search"}
                value={recipe}
                onChange={handleChange}
            />
            <button onClick={() => onSearch(recipe)} >Buscar</button>
        </div>
    )
}

export default SearchBar;