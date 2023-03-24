import React from "react";
import styles from "./Landing.module.css"

function Landing({ setHome, home }) {

    return (
        <div className={styles.principal}>

            <div className={styles.recuadro}>

                <div className={styles.flex1} >
                    <h2>Dietas</h2>
                    <button onClick={() => setHome({...home, pass:true})} >Home</button>
                    <br />
                    <a href="https://www.youtube.com/" className={styles.alink}>This project on GitHub</a>
                </div>

                <div className={styles.flex2} >
                    <img src="./imagenes/imgLanding.png" alt="jj" />
                    <h3>Decidete por una vida saludable</h3>
                    <p>Este sitio web ofrece varias dietas con recetas deliciosas para satisfacer diferentes necesidades nutricionales y objetivos de salud.</p>
                </div>

            </div>

        </div>
    )
}

export default Landing;