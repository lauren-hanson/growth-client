import { useNavigate } from "react-router-dom";
import q2 from "../../assets/q2.mp4"

export const EducationVideo = () => {

    const navigate = useNavigate()

    return (
        <>
            <h2>Education Video</h2>
            <div>
                <video src={q2} width="100%" autoPlay onEnded={() => navigate(`/form/education`)} id="background-video" />
            </div>
        </>
    )
}