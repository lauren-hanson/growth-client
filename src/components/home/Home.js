import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Home.css"

export const Home = () => {

    const [forms, setForms] = useState({
        id: "",
        growth: ""
    })

    const navigate = useNavigate()

    const handlePlayButtonClick = (event) => {
        event.preventDefault()

        const infoToSave = {
            growth: forms.growth
        }

        return fetch("http://localhost:8088/forms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(infoToSave)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/video`)
            })

    }


    return (
        <div className="homePage">
            <fieldset className="homePageInput">
                <label htmlFor="growth">How do you want your company to grow?</label>
                <div>
                    <input
                        type="text"
                        value={forms.growth}
                        onChange={
                            (evt) => {
                                const copy = { ...forms }
                                copy.growth = evt.target.value
                                setForms(copy)
                            }
                        }
                    />
                </div>
                <br></br>


            </fieldset >
            <div className="playButton">
                <button
                    onClick={(clickEvent) => {
                        handlePlayButtonClick(clickEvent)
                    }}>
                    play.
                </button>
            </div>
        </div>)
}