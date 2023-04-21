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
            <video src={q1} width="100%" autoPlay onEnded={handleVideoEnded} />
        </div>
    );
}

