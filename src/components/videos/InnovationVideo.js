import { useNavigate } from "react-router-dom";
import q4 from "../../assets/q4.mp4"

export const InnovationVideo = () => {

    const navigate = useNavigate()

    return (
        <>
            <h2 className="content">Innovation Video</h2>
            <div>
                <video src={q4} width="100%" autoPlay onEnded={() => navigate(`/form/innovation`)} id="background-video" />
            </div>
        </>
    )
}