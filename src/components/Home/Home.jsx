import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllRecipes, getDiets } from "../../redux/actions";
import styles from "./home.module.css";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";

import ModalDiets from '../Modal/ModalDiets';



function Home() {

    const dispatch = useDispatch();

    const [filter, setFilter] = useState({
        dataFuete: "All",
        typeDiet: "All",
        ordenarByScore: "All"
    });
    const [page, setPage] = useState({
        previousPage: 0,
        actualPage: 9
    });
    const [modalAbierto, setModalAbierto] = useState(false);
    const [isSelected, setIsSelected] = useState(false);


    const result = useSelector(state => state.foodReducer.recetas);
    const frist9Recipes = useSelector(state => state.foodReducer.recetas.slice(page.previousPage, page.actualPage));

    useEffect(() => {

        dispatch(getAllRecipes({
            dataFuete: "All",
            typeDiet: "All",
            ordenarByScore: "All",
        }));

        dispatch(getDiets());

    }, [dispatch])
    
    const submit = () => {
        dispatch(getAllRecipes(filter));
    }

    const reload = () => {
        setIsSelected(false)
        setFilter({ ...filter, dataFuete: "All", typeDiet: "All", ordenarByScore: "All", });
        dispatch(getAllRecipes({ dataFuete: "All", typeDiet: "All", ordenarByScore: "All" }));
    }

    const recipePerPage = (numPag) => {
        const numRecipes = numPag * 9;
        const posRecipes = numRecipes - 9;

        setPage({ ...page, previousPage: posRecipes, actualPage: numRecipes });
    }

    const handleFilter = (e) => {
        setIsSelected(!isSelected)
        setFilter({
            ...filter,
            [e.target.getAttributeNS(null, "nombre")]: e.target.getAttributeNS(null, "valor")
        })

    }


    return (
        <div className={styles.principal} >

            <div className={styles.contenedor} >

                <div className={styles.filtro} >
                    <br />
                    <br />
                    <br />
                    <div className={styles.titulo} >
                        <h6>Dietas</h6>
                        <p>{filter.typeDiet}</p>
                    </div>
                    <div nombre="typeDiet" valor="gluten free" onClick={handleFilter} style={{ cursor: 'pointer' }}>gluten free</div>
                    <div nombre="typeDiet" valor="vegan" onClick={handleFilter} style={{ cursor: 'pointer' }}>vegan</div>
                    <div nombre="typeDiet" valor="primal" onClick={handleFilter} style={{ cursor: 'pointer' }}>primal</div>
                    <div nombre="typeDiet" valor="All" onClick={handleFilter} style={{ cursor: 'pointer' }}>all</div>

                    <p style={{ cursor: 'pointer' }} onClick={() => setModalAbierto(true)}>Mostrar mas</p>
                    <ModalDiets modalAbierto={modalAbierto} setModalAbierto={setModalAbierto} handleFilter={handleFilter} />

                    <div className={styles.titulo} >
                        <h6>Ordenar</h6>
                        <p>{filter.ordenarByScore}</p>
                    </div>
                    <div nombre="ordenarByScore" valor="acendente" onClick={handleFilter} style={{ cursor: 'pointer' }}>Ascendente</div>
                    <div nombre="ordenarByScore" valor="decendente" onClick={handleFilter} style={{ cursor: 'pointer' }}>Descendente</div>
                    <div nombre="ordenarByScore" valor="orderAlfabetic" onClick={handleFilter} style={{ cursor: 'pointer' }}>Alfavetico</div>
                    <div nombre="ordenarByScore" valor="All" onClick={handleFilter} style={{ cursor: 'pointer' }}>all</div>
                    <br />

                    <div className={styles.titulo} >
                    <h6>From</h6>
                    <p>{filter.dataFuete}</p>
                    </div>
                    <div nombre="dataFuete" valor="api" onClick={handleFilter} style={{ cursor: 'pointer' }}>api</div>
                    <div nombre="dataFuete" valor="db" onClick={handleFilter} style={{ cursor: 'pointer' }}>db</div>
                    <div nombre="dataFuete" valor="All" onClick={handleFilter} style={{ cursor: 'pointer' }}>all</div>
                    <br /><br />
                    <div className={styles.butons} >
                        <button onClick={submit} >Filtrar</button>
                        <button onClick={reload} >Recargar</button>
                    </div>
                </div>

                <div className={styles.card} >
                    {
                        !frist9Recipes.length ? <p key="1" >Loading....</p> :
                            <Cards frist9Recipes={frist9Recipes} />
                    }
                </div>
            </div>

            <div className={styles.page} >
                {
                    !result.length ? <p>No results</p> : <Paginado numRecipes={result.length} recipePerPage={recipePerPage} />
                }
            </div>

        </div>
    )
}

export default Home;