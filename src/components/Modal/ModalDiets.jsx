import Modal from "react-modal";
import styles from "./modal.module.css"
import { useState } from "react";

const ModalDiets = ({ modalAbierto, setModalAbierto, handleFilter }) => {
    const diets = ["vegan", "lacto", "whole 30", "vegetarian", "primal"];
    const [name, setName] = useState("");
    const [searchD, setSearchD] = useState(["whole 30", "vegetarian", "primal"]);


    const handleChange = (e) => {
        const nameDiet = e.target.value;
        setName(nameDiet);

        const findDiet = diets.filter( item => item.includes(nameDiet));
        setSearchD(findDiet)
    }

    const handleClick = (e) => {
        handleFilter(e);
        setModalAbierto(false)
    }

    return (
        <Modal className={styles.modal} overlayClassName={styles.overlay} isOpen={modalAbierto} onRequestClose={() => setModalAbierto(false)} >

            <h6>Dietas</h6>

            <div className={styles.search} >
                <input type="search" value={name} onChange={handleChange} placeholder="Buscar..." />
            </div>

            <div className={styles.print} >
                {
                    searchD.map((item, pos) => {
                        return (
                            <div nombre="typeDiet" valor={item} key={pos} onClick={handleClick} >{item}</div>
                        )
                    })
                }
            </div>

            <button onClick={() => setModalAbierto(false)}>X</button>

        </Modal>
    )
}

export default ModalDiets;