import styles from "./home.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

import Cards from "../Cards/Cards";

var diets = ["lacto", "vegan", "whole 30", "primal", "Mostrar mas"];
var from = ["Default", "db", "api",];
var order = ["Default", "ascendente", "descendente", "alfavetico"];

let page = {
    previous: 0,
    actual: 9
}

function Home() {
    const dispatch = useDispatch();

    const errors = useSelector(state => state.foodReducer.errors);
    const result = useSelector(state => state.foodReducer.recetas);
    const frist9Recipes = useSelector(state => state.foodReducer.recetas.slice(page.previous, page.actual));


    useEffect(() => {

        dispatch(getAllRecipes({
            dataFuete: "All",
            typeDiet: "All",
            ordenarByScore: "All",
        }))

    }, [dispatch])

    return (
        <div className={styles.principal} >

            <div className={styles.encavezado} >
                <img src="./imagenes/landing5.jpg" alt="home" />

                <div className={styles.nav} >
                    <div className={styles.Link} >
                        <Link to="/" >Inicio</Link>
                        <Link to="/Home" >Recetas</Link>
                        <Link>Tecnologias</Link>
                    </div>
                </div>

            </div>



            <div className={styles.contenedor} >
                <div className={styles.filtro} >

                    <div className={styles.search} >
                        <h6>wads </h6>
                        <SearchBar />
                    </div>


                    <div className={styles.selectores} >

                        <div className={styles.se1} >
                            <h6>Dietas</h6>
                            <select className={styles.select1} name="" id="">
                                {
                                    diets.map((item, pos) => <option value={item} key={pos}>{item}</option>)
                                }
                            </select>
                        </div>

                        <div className={styles.se2} >
                            <h6>Origen</h6>
                            <select name="" id="">
                                {
                                    from.map((item, pos) => <option value={item} key={pos}>{item}</option>)
                                }
                            </select>
                        </div>

                        <div className={styles.se3} >
                            <h6>Orden</h6>
                            <select className={styles.select2} name="" id="">
                                {
                                    order.map((item, pos) => <option value={item} key={pos} >{item}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <div className={styles.botones} >
                        <div className={styles.boton}>
                            <h6>sdcdszf</h6>
                            <button>Restaurar</button>
                        </div>

                        <div className={styles.link} >
                            <h6>dgxsd</h6>
                            <div className={styles.ellink} style={{ height: "30px" }}>
                                <Link>Crear receta</Link>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className={styles.cards} >
                {
                    errors.length
                        ?
                        <h5>Error</h5>
                        :
                        <>
                            {!frist9Recipes.length ? <p>Loading....</p> : <Cards frist9Recipes={frist9Recipes} />}
                        </>
                }
            </div>




        </div>
    )
}

export default Home;