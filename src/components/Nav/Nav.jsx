import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import { getRecipesBySearch } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./nav.module.css";


const Nav = () => {
    const dispatch = useDispatch();

    const onSearch = (name) => {
        name !== "" && dispatch(getRecipesBySearch(name));
    }

    return (

        <nav className={styles.principal} >
            <div className={styles.botones} >
                <Link className={styles.home} to="/Home" >Home</Link>
                <Link className={styles.from} to="/Form" >Form</Link>
            </div>

            <SearchBar onSearch={onSearch} />

        </nav>

    )
}

export default Nav;