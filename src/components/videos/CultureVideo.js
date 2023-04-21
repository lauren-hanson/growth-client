import { useNavigate } from "react-router-dom";
import q3 from "../../assets/q3.mp4"

export const CultureVideo = () => {

    const navigate = useNavigate()

    return (
        <>
            <h2>Culture Video</h2>
            <div>
                <video src={q3} width="100%" height="300" autoPlay onEnded={() => navigate(`/form`)} />
            </div>
        </>
    )
}