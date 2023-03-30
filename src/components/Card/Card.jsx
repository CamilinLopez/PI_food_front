import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ title, image, diets, healthScore, status, id }) {

    return (
        <>
            {
                status
                    ?
                    <h5 className={styles.messageError} >{status.message}</h5>
                    :
                    <div className={styles.principal} >

                        <div className={styles.contenedor} >

                            <div className={styles.imgDiets} >
                                <img src={image} alt={title} />
                                <div className={styles.list} >

                                    {
                                        diets.map((item, pos) => {
                                            return (
                                                <li key={pos}>{
                                                    item.name ? item.name : item
                                                }</li>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                            <div className={styles.titleScore} >
                                <Link to={`/Detail/${id}`}>
                                    <h6>{title}</h6>
                                </Link>
                                <p>healthScore {healthScore}</p>
                            </div>
                        </div>

                    </div>
            }

        </>
    )
}

export default Card;