import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [recipe, setRecipe] = useState("");

    const handleChange = (e) => {
        setRecipe(e.target.value);
    }

    return (
        <div>
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