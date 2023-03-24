
function Paginado({ numRecipes, recipePerPage }) {
    const numPages = [];
    const numPagae = Math.ceil(numRecipes/9);
    for (let i = 1; i <= numPagae ; i++) numPages.push(i);

    return (
        <nav>
            {numPages && numPages.map((item) => (

                <button onClick={()=>recipePerPage(item)} key={item} >{item}</button>

            ))}

        </nav>
    );
}

export default Paginado;