import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ title, image, diets, healthScore, status, id }) {

    return (
        <div className={styles.principal} >
            {
                status
                    ?
                    <h3>No hay resultados</h3>
                    :
                    <div>
                        <p>health score {healthScore}</p>

                        <Link to={`/Detail/${id}`}>
                            <h6>{title}</h6>
                        </Link>
                        <img src={image} alt={title} />
                        <ul>
                            {
                                diets.map((item, pos) => {
                                    return (
                                        <li key={pos} > {
                                            item.name ? item.name : item
                                        } </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
            }

        </div>
    )
}

export default Card;