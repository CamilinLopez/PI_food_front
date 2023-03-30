import styles from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Cards({ frist9Recipes }) {

    const errorsInit = useSelector(state => state.foodReducer.errors);
    const status = errorsInit.find(item => item.from === "getRecipesBySearch");


    return (
        <div className={styles.principal} >
            {
                status
                    ?
                    <Card status={status} />
                    :
                    frist9Recipes.map(({ title, id, image, diets, healthScore }) => {
                        return (
                            <Card
                                title={title}
                                key={id}
                                image={image}
                                diets={diets}
                                status={status}
                                healthScore={healthScore}
                                id={id}
                            />
                        )
                    })
            }
        </div>
    )
}

export default Cards;