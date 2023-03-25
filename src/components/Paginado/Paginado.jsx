import styles from "./paginado.module.css";
import { useState } from "react";

function Paginado({ numRecipes, recipePerPage }) {
    const numPages = [];
    const numPagae = Math.ceil(numRecipes / 9);

    const [select, setSelect] = useState(null);

    for (let i = 1; i <= numPagae; i++) numPages.push(i);

    const handleClick = (item) => {
        setSelect(item)
        recipePerPage(item)
    }

    return (
        <div className={styles.principal} >
            <nav>
                {numPages && numPages.map((item) => (

                    <button className={select === item ? styles.selected : styles.noselected} id={item} onClick={() => handleClick(item)} key={item} >{item}</button>

                ))}

            </nav>
        </div>
    );
}

export default Paginado;