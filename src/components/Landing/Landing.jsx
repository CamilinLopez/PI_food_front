import React from "react";
import styles from "./Landing.module.css"
import { Link } from "react-router-dom";

function Landing() {

    return (
        <div className={styles.principal}>
            <div className={styles.div1} >
                <img src="./imagenes/landing7.jpg" alt="landing" />

                <div className={styles.nav} >
                    <h6>spornoocular</h6>
                    <div className={styles.Link} >
                        <Link to="/Home" >Recetas</Link>
                        <Link to="/Landing">Inicio</Link>
                        <Link to="/Tecnologias" >Tecnologias</Link>
                    </div>
                </div>

                <div className={styles.getStar} >
                    <div className={styles.contenedor2} >

                        <div className={styles.info} >
                            <h2>Decidete por una vida saludable</h2>
                            <p>Este sitio web ofrece varias dietas con recetas deliciosas<br />para satisfacer diferentes necesidades nutricionales<br />y objetivos de salud.</p>

                        </div>

                        <div className={styles.buttons} >
                            <Link to="/Home">Descubre recetas</Link>
                            <Link>Conocenos</Link>
                        </div>
                    </div>

                </div>

            </div>

            <div className={styles.div2} >
                <div className={styles.myinfo} >
                    <p>PI food | diseñado por Camilo Lopez | camilollc98@gmail.com</p>
                </div>
            </div>

        </div>
    )

}
export default Landing;