import styles from "./Card.module.css";

function Card({ title, image, diets, healthScore, status }) {

    return (
        <div className={styles.principal} >
            {
                status
                    ?
                    <h3>No hay resultados</h3>
                    :
                    <div>
                        <p>health score {healthScore}</p>

                        <h6>{title}</h6>
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