import axiosInstance from "../../configAxios";
import style from "./form.module.css"
import { useState } from "react"
import { validateDatos, val, validatePasos, validateDiet, validateIngredient, validateEquipement } from "./validate";
import ModalDiets from "../Modal/ModalDiets";

let steps = [];

const From = () => {

    const [modalAbierto, setModalAbierto] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const [receta, setReceta] = useState({
        title: "",
        image: "",
        summary: "",
        healthScore: "",
        analyzedInstructions: [{ steps: [] }],
        diets: []
    });
    const [paso, setPaso] = useState({
        number: 1,
        step: "",
        ingredients: [],
        equipment: [],
    });
    const [ingredient, setIngredient] = useState({
        id: 0,
        name: "",
        localizedName: "",
        image: "ingredient.jpg"
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
    const [erroros, setErrors] = useState({})
    const [erroros1, setErrors1] = useState({})
    const [erroros2, setErrors2] = useState({})
    const [erroros3, setErrors3] = useState({})
    const [erroros4, setErrors4] = useState({})


    const handleOnChange = (e) => {
        setReceta({
            ...receta,
            [e.target.name]: e.target.value
        });

        setErrors(validateDatos(
            {
                ...receta,
                [e.target.name]: e.target.value
            }
        ));
    }

    const handleOnChange1 = (e) => {
        setPaso({
            ...paso,
            [e.target.name]: e.target.value
        })

        setErrors1(validatePasos(
            {
                ...paso,
                [e.target.name]: e.target.value
            }
        ));
    }

    const handleOnChange2 = (e) => {
        setIngredient({
            ...ingredient,
            [e.target.name]: e.target.value,
            localizedName: e.target.value
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
        setDiet({ ...diet, [e.target.name]: e.target.value });

        setErrors2(validateDiet(
            {
                ...diet,
                [e.target.name]: e.target.value
            }
        ));
    }

    const handleOnChange5 = (e) => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }


    const submit = async (e) => {
        e.preventDefault();


        setReceta({
            ...receta,
            title: "",
            image: "",
            summary: "",
            healthScore: "",
            analyzedInstructions: [{ steps: [] }],
            diets: []
        })

        setPaso({
            ...paso,
            number: 1,
            step: "",
            ingredients: [],
            equipment: [],
        })

        setIngredient({
            ...ingredient,
            id: 0,
            name: "",
            localizedName: "",
            image: "ingredient.jpg"
        })

        setEquipment({
            ...equipment,
            id: 0,
            name: "",
            localizedName: "",
            image: ".jpg"
        })

        steps = [];

        try {
            let response = (await axiosInstance.post("/recipes", receta));
            if (response.error) throw new Error(response.error);
            console.log(response)
        } catch (error) {

            console.log(error);
        }

    }

    const addIngredient = () => {

        setErrors3(validateIngredient(ingredient));

        if (ingredient.name !== "") {
            setIngredient({
                ...ingredient,
                id: ingredient.id + 1
            })

            setPaso({
                ...paso,
                ingredients: [...paso.ingredients, ingredient]
            })

            setIngredient({ ...ingredient, name: "" })
        }

    }

    const addEquipement = () => {

        setErrors4(validateEquipement(equipment));

        if (equipment.name !== "") {
            setEquipment({
                ...equipment,
                id: equipment.id + 1
            })

            setPaso({
                ...paso,
                equipment: [...paso.equipment, equipment]
            })

            setEquipment({ ...equipment, name: "" })
        }


    }

    const addStep = () => {

        setErrors1(validatePasos(paso));


        if (paso.step !== "") {

            if (time.number !== "") paso.length = time;

            // datos.steps.push(paso);
            steps.push(paso)

            setReceta({
                ...receta,
                analyzedInstructions: [
                    { steps }
                ],
                prueba: "sii"

            })

            setIngredient({ ...ingredient, name: "" })
            setEquipment({ ...equipment, name: "" })
            setPaso({ ...paso, step: "", ingredients: [], equipment: [] })
            setTime({ ...time, number: "" })

        }

    }

    const deModalDiets = (e) => {

        setIsSelected(!isSelected)
        setDiet(prevState => ({
            ...prevState,
            name: e.target.getAttributeNS(null, "valor")
        }))
    }

    const addDiets = () => {

        setErrors2(validateDiet(diet));

        if (diet.name !== "") {
            setReceta({
                ...receta,
                diets: [...receta.diets, diet.name]
            });

            setDiet(prevState => ({
                ...prevState,
                name: ""
            }))
        }

    }


    return (
        <div className={style.principal} >
            <h4>Crea tu receta</h4>
            <div className={style.contenedor} >
                <div className={style.fracment1} >

                    <div className={style.in1} >
                        <h5>Datos</h5>
                        <input type="text" name="title" value={receta.title} onChange={handleOnChange} placeholder="nombre de la receta" />
                        <samp className={erroros.title ? style.danger : style.nodanger} >{!erroros.title ? val : erroros.title}</samp>
                    </div>
                    <div className={style.in1} >
                        <input type="text" name="image" value={receta.image} onChange={handleOnChange} placeholder="agrega una imagen" />
                        <samp className={erroros.image ? style.danger : style.nodanger} >{!erroros.image ? val : erroros.image}</samp>
                    </div>
                    <div className={style.in1} >
                        <input type="number" name="healthScore" value={receta.healthScore} onChange={handleOnChange} placeholder="puntaje" />
                        <samp className={erroros.healthScore ? style.danger : style.nodanger} >{!erroros.healthScore ? val : erroros.healthScore}</samp>
                    </div>

                </div>

                <div className={style.fracment2} >
                    <div className={style.in1} >
                        <h5>Resumen</h5>
                        <textarea name="summary" value={receta.summary} onChange={handleOnChange} placeholder="resumen de tu receta" rows="10" />
                        <samp className={erroros.summary ? style.danger : style.nodanger} >{!erroros.summary ? val : erroros.summary}</samp>
                    </div>
                </div>

                <div className={style.fracment1} >
                    <div className={style.in1} >
                        <h5>Pasos</h5>
                        <input type="text" name="step" value={paso.step} onChange={handleOnChange1} placeholder="nombre del paso " />
                        <samp className={erroros1.step ? style.danger : style.nodanger} >{!erroros1.step ? val : erroros1.step}</samp>
                    </div>
                    <div className={style.in1} >
                        <div className={style.inputmessageingredient} >
                            <input type="text" name="name" value={ingredient.name} onChange={handleOnChange2} placeholder="nombre del ingrediente" />
                            <button onClick={addIngredient} >add</button>
                        </div>
                        <samp className={erroros3.name ? style.danger : style.nodanger} >{!erroros3.name ? val : erroros3.name}</samp>

                    </div>
                    <div className={style.in1} >
                        <div className={style.intputmessageequipment} >
                            <input type="text" name="name" value={equipment.name} onChange={handleOnChange3} placeholder="nombre del utencilio" />
                            <button onClick={addEquipement} >add</button>
                        </div>
                        <samp className={erroros4.name ? style.danger : style.nodanger} >{!erroros4.name ? val : erroros4.name}</samp>
                    </div>
                    <div className={style.in1} >
                        <div className={style.addTime} >
                            <input type="number" name="number" value={time.number} onChange={handleOnChange5} placeholder="tiempo de coccion" />

                        </div>
                        <samp className={style.nodanger} >{val}</samp>
                    </div>
                    <button onClick={addStep} >add step</button>
                </div>


                <div className={style.fracment1} >
                    <div className={style.in1}>
                        <h5>Dietas</h5>
                        <input type="text" name="name" value={diet.name} onChange={handleOnChange4} placeholder="nombre de la dieta" />
                        <samp className={erroros2.name ? style.danger : style.nodanger} >{!erroros2.name ? val : erroros2.name}</samp>
                        <p style={{ cursor: 'pointer' }} onClick={() => setModalAbierto(true)}>Mostrar mas</p>
                        <ModalDiets modalAbierto={modalAbierto} setModalAbierto={setModalAbierto} handleFilter={deModalDiets} />

                    </div>
                    <button onClick={addDiets} >add diet</button>
                </div>


            </div>
            <div className={style.crear} >
                <button onClick={submit} >crear</button>
            </div>
        </div>
    )
}

export default From;