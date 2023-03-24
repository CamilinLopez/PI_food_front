import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import { useLocation } from "react-router-dom";
import { getRecipesBySearch } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Nav = () => {
    const location = useLocation();
    const dispatch = useDispatch();


    const onSearch = (name) => {
        name !== "" && dispatch(getRecipesBySearch(name));
    }

    return (
        <nav>
            <div>
                <Link to="/Home" >Home</Link>
                <Link to="/Form" >Form</Link>
            </div>
            {
                location.pathname === "/Home" && <SearchBar onSearch={onSearch} />
            }

        </nav>
    )
}

export default Nav;