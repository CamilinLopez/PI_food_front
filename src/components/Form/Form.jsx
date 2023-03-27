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
    const [time, setTime] = useState({
        number: "",
        unit: "minutes"
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

    const handleOnChange5 = (e) => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(receta);
    }

    return (
        <div className={style.principal} >
            <h4>Crea tu receta</h4>
            <div className={style.contenedor} >

                <div className={style.fracment1} >
                    <div className={style.in1} >
                        <input type="text" name="title" value={receta.title} onChange={handleOnChange} placeholder="nombre de la receta" />
                        <samp>data</samp>
                    </div>
                    <div className={style.in1} >
                        <input type="text" name="image" value={receta.image} onChange={handleOnChange} placeholder="agrega una imagen" />
                        <samp>data</samp>
                    </div>
                    <div className={style.in1} >
                        <input type="number" name="healthScore" value={receta.healthScore} onChange={handleOnChange} placeholder="puntaje" />
                        <samp>data</samp>
                    </div>
                </div>

                <div className={style.fracment2} >
                    <div className={style.in1} >
                        <textarea name="summary" value={receta.summary} onChange={handleOnChange} placeholder="resumen de tu receta" rows="10" />
                        <samp>error</samp>
                    </div>
                </div>

                <div className={style.fracment1} >
                    <div className={style.in1} >
                        <input type="text" name="step" value={paso.step} onChange={handleOnChange1} placeholder="nombre del paso " />
                        <samp>error</samp>
                    </div>
                    <div className={style.in1} >
                        <div className={style.inputmessageingredient} >
                            <input type="text" name="name" value={ingredient.name} onChange={handleOnChange2} placeholder="nombre del ingrediente" />
                            <button>add</button>
                        </div>
                        <samp>error</samp>

                    </div>
                    <div className={style.in1} >
                        <div className={style.intputmessageequipment} >
                            <input type="text" name="name" value={equipment.name} onChange={handleOnChange3} placeholder="nombre del utencilio" />
                            <button>add</button>
                        </div>
                        <samp>error</samp>
                    </div>
                    <div className={style.in1} >
                        <div className={style.addTime} >
                            <input type="number" name="number" value={receta.healthScore} onChange={handleOnChange5} placeholder="tiempo de coccion" />
                            <button>add</button>
                        </div>
                        <samp>error</samp>
                    </div>
                    <button>add step</button>
                </div>


                <div className={style.fracment1} >
                    <div className={style.in1}>
                        <input type="text" name="name" value={diet.name} onChange={handleOnChange4} placeholder="nombre de la dieta" />
                        <samp>error</samp>
                        <p>Mostrar mas</p>
                    </div>
                    <button>add</button>
                </div>


            </div>
            <div className={style.crear} >
                <button onClick={submit} >crear</button>
            </div>
        </div>
    )
}

export default From;