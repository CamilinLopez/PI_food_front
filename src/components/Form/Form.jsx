import style from "./form.module.css"
import { useState } from "react"

const From = () => {
    const [receta, setReceta] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: [],
        diets: []
    });
    const [paso, setPaso] = useState({
        number: 1,
        step: "",
        ingredients: [],
        equipment: [],
        length: {
            number: "",
            unit: "minutes"
        }
    });
    const [ingredient, setIngredient] = useState({
        id: 0,
        name: "",
        localizedName: "",
        image: ""
    })
    const [equipment, setEquipment] = useState({
        id: 0,
        name: "",
        localizedName: "",
        image: ".jpg"
    })
    const [diet, setDiet] = useState({
        name: ""
    })


    const handleOnChange = (e) => {
        setReceta({
            ...receta,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChange1 = (e) => {
        setPaso({
            ...paso,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChange2 = (e) => {
        setIngredient({
            ...ingredient,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnChange3 = (e) => {
        setEquipment({
            ...equipment,
            [e.target.name]: e.target.value,
            localizedName: e.target.value
        })
    }

    const handleOnChange4 = (e) => {
        setDiet(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(receta);
    }

    return (
        <div className={style.principal} >
            <h4 className={style.title}>Crea tu receta</h4>

            <div className={style.contenedor} >
                <form className={style.form} onSubmit={submit} >

                    <div className={style.inputs1} >
                        <input type="text" name="title" value={receta.title} onChange={handleOnChange} placeholder="nombre de la receta" />
                        <input type="text" name="image" value={receta.image} onChange={handleOnChange} placeholder="agrega una imagen" />
                        <input type="number" name="healthScore" value={receta.healthScore} onChange={handleOnChange} placeholder="puntaje" />
                    </div>

                    <div className={style.inputs2} >
                        <textarea name="summary" value={receta.summary} onChange={handleOnChange} placeholder="resumen de tu receta" rows="10" />
                    </div>

                    <div className={style.inputs3} >
                        <input type="text" name="step" value={paso.step} onChange={handleOnChange1} placeholder="nombre del paso " />
                        <div className={style.addingredient} >
                            <input type="text" name="name" value={ingredient.name} onChange={handleOnChange2} placeholder="nombre del ingrediente" />
                            <button >add</button>
                        </div>
                        <div className={style.equipment} >
                            <input type="text" name="name" value={equipment.name} onChange={handleOnChange3} placeholder="nombre del utencilio" />
                            <button>add</button>
                        </div>
                        <button>add step</button>
                    </div>

                    <div className={style.inputs4} >
                        <input type="text" name="name" value={diet.name} onChange={handleOnChange4} placeholder="nombre de la dieta" />
                        <p>Mostrar mas</p>
                        <button>add</button>
                    </div>
                </form>
            </div>
            <button className={style.crear} >crear</button>
        </div>
    )
}

export default From;