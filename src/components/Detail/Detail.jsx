import style from "./detail.module.css";
import { useParams } from "react-router-dom";

function Detail() {
    const { DetailId } = useParams();

    return (
        <div className={style.principal} >
            <h5>{DetailId}</h5>
        </div>
    )
}

export default Detail;