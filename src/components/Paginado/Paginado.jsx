import styles from "./paginado.module.css";

function Paginado({ numRecipes, recipePerPage }) {
    const numPages = [];
    const numPagae = Math.ceil(numRecipes / 9);
    for (let i = 1; i <= numPagae; i++) numPages.push(i);

    return (
        <div className={styles.principal} >
            <nav>
                {numPages && numPages.map((item) => (

                    <button onClick={() => recipePerPage(item)} key={item} >{item}</button>

                ))}

            </nav>
        </div>
    );
}

export default Paginado;