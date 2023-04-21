import { useState } from "react"
import { useNavigate } from "react-router-dom";
import q4 from "../../assets/q4.mp4"

export const InnovationVideo = () => {

    return (
        <>
            <h2>Innovation Video</h2>
            <div>
                <video src={q4} width="100%" height="300" autoPlay />
            </div>
        </>
    )
}