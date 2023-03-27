import style from "./step.module.css";
import { useState, useEffect } from "react";

function Step({ analyzedInstructions }) {
    const [step, setStep] = useState(0);
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        setSteps(analyzedInstructions);
    }, [analyzedInstructions]);

    const nextstep = () => {
        step < steps.length - 1 && setStep(step + 1)
    }
    const backstep = () => {
        step > 0 && setStep(step - 1)
    }

    return (
        <>
            {
                steps.length
                &&
                <div className={style.principal} >

                    <div className={style.pasos} >
                        <h6>{`Paso ${step + 1}/${steps.length}`}</h6>
                        <h6>{steps[step].step}</h6>
                    </div>

                    <div className={style.ingredietsEquip} >

                        <div className={style.ingrediets} >
                            <h6>Ingredientes</h6>
                            <ul>
                                {
                                    steps[step].ingredients.length === 0
                                        ?
                                        <p>No hay ingredientes</p>
                                        :
                                        <ul>
                                            {
                                                steps[step].ingredients.map((item, pos) => {
                                                    return (
                                                        <li key={pos} >{item.name}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                }
                            </ul>
                        </div>

                        <div className={style.equipment} >
                            <h6>Utelcilios</h6>
                            {
                                steps[step].equipment.length === 0
                                    ?
                                    <p>No hay utencilios</p>
                                    :
                                    <ul>
                                        {
                                            steps[step].equipment.map((item, pos) => {
                                                return (
                                                    <li key={pos} >{item.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                            }
                        </div>

                        <div className={style.length} >
                            <h6>Length</h6>
                            {
                                !steps[step].length
                                    ? <p>____</p>
                                    :
                                    <p>{`${steps[step].length.number} ${steps[step].length.unit}`}</p>
                            }
                        </div>

                    </div>

                    <div className={style.botones} >
                        <button onClick={backstep} >back</button>
                        <button onClick={nextstep} >next</button>
                    </div>

                </div>
            }
        </>
    )
}

export default Step;