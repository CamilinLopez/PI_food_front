import axiosInstance from "../../configAxios";
import style from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Step from "./Step/Step";


function Detail() {
    const [detail, setDetail] = useState({});
    const { DetailId } = useParams();


    useEffect(() => {
        const getDetail = async () => {
            const data = (await axiosInstance.get(`/recipes/${DetailId}`)).data;
            setDetail(data);
        }
        getDetail();
    }, [DetailId])

    const highlightWords = (text) => {
        return text.replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>');
    }


    return (
        <>
            {
                Object.keys(detail).length === 0
                    ?
                    <h6>Loading...</h6>
                    :
                    <div className={style.principal} >

                        <div className={style.contenedor1} >
                            <div className={style.inf1} >

                                <h5>{detail.title}</h5>
                                <img src={detail.image} alt={detail.id} />

                                <div className={style.hsId} >
                                    <p>ID: {detail.id}</p>
                                    <p>healthScore: {detail.healthScore}</p>
                                </div>

                            </div>

                            <div className={style.inf2} >
                                <h5>summary</h5>
                                <p dangerouslySetInnerHTML={{ __html: highlightWords(detail.summary) }} />
                            </div>
                        </div>

                        <hr />

                        <div className={style.contenedor2} >
                            <div className={style.step} >
                                <Step analyzedInstructions={detail.analyzedInstructions[0].steps} />
                            </div>
                            <div className={style.diets} >
                                <h5>dietas</h5>
                            </div>
                        </div>
                    </div>

            }
        </>
    )
}

export default Detail;