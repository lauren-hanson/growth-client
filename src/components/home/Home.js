import { useNavigate } from "react-router-dom";
import "./Home.css"

export const Home = () => {

    const navigate = useNavigate()


    return (
        <div className="homePage">
            <fieldset className="homePageInput">
                <label for="growth">How do you want your company to grow?</label>
                <div>
                    <input
                        type="text"
                    />
                </div>
                <br></br>


            </fieldset >
            <div className="playButton">
                <button
                    onClick={() => navigate(`/video`)}>
                    play.
                </button>
            </div>
            </div>)
}