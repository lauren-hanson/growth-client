import { useNavigate } from "react-router-dom";
import q3 from "../../assets/q3.mp4"

export const CultureVideo = () => {

    const navigate = useNavigate()

    return (
        <>
            <h2 className="content">Culture Video</h2>
            <div>
                <video src={q3} width="100%" autoPlay onEnded={() => navigate(`/form/culture`)} id="background-video"/>
            </div>
        </>
    )
}