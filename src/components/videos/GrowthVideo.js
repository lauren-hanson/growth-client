import { useState } from "react"
import { useNavigate } from "react-router-dom";
import q1 from "../../assets/q1.mp4"


export const GrowthVideo = () => {

    const [showButtons, setShowButtons] = useState(false);
    const navigate = useNavigate()

    const handleVideoEnded = () => {
        setShowButtons(true);
    };
    
    return (
        <div>
            <video src={q1} width="100%" height="300" autoPlay onEnded={handleVideoEnded} />
            {showButtons && (
                <div>
                    <button
                        onClick={() => navigate(`/video/education`)}>
                        Education</button>
                    <button
                        onClick={() => navigate(`/video/culture`)}>Culture</button>
                    <button
                        onClick={() => navigate(`/video/innovation`)}>Innovation</button>
                </div>
            )}
        </div>
    );
}

