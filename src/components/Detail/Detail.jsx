import axiosInstance from "../../configAxios";
import style from "./detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function Detail() {
    const [detail, setDetail] = useState({});
    const { DetailId } = useParams();


    useEffect(() => {
        console.log("mama");
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
                    <h5>Loading...</h5>
                    :
                    <div className={style.princial} >

                        <div className={style.div1} >

                            <div className={style.imgTitle} >
                                <h6>{detail.title}</h6>
                                <img src={detail.image} alt={detail.id} />
                                
                                <div className={style.info} >
                                    <p>ID: {detail.id}</p>
                                    <p className={style.hs} >healthScore: {detail.healthScore}</p>
                                </div>
                            </div>

                            <div className={style.summary} >
                                <h6>summary</h6>
                                <p dangerouslySetInnerHTML={{ __html: highlightWords(detail.summary) }} />
                            </div>

                        </div>
                        <hr />

                    </div>
            }
        </>
    )
}

export default Detail;