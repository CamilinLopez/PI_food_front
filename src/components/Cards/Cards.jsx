import styles from "./Cards.module.css";
import Card from "../Card/Card";

function Cards({ frist9Recipes }) {

    return (
        <div className={styles.principal} >
            {
                frist9Recipes.map(({ title, id, image, diets, healthScore, status }) => {
                    return (
                        <Card
                            title={title}
                            key={id}
                            image={image}
                            diets={diets}
                            status={status}
                            healthScore={healthScore}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards;