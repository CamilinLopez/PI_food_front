import Modal from "react-modal";
import styles from "./modal.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDiets } from "../../redux/actions";

const ModalDiets = ({ modalAbierto, setModalAbierto, handleFilter }) => {

    const [name, setName] = useState("");
    const [searchD, setSearchD] = useState(["whole 30", "vegetarian", "primal"]); 
    
    const dispatch = useDispatch();

    const searchDiet =  useSelector(state => state.foodReducer.filterDiets);
    const diets =  useSelector(state => state.foodReducer.diets);

    
    useEffect(() => {
        if(name === "") setSearchD(diets)
    },[setSearchD, name, diets])

    const handleChange = (e) => {
        const nameDiet = e.target.value;
        setName(nameDiet);
        
        dispatch(filterDiets(nameDiet));
        setSearchD(searchDiet);
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