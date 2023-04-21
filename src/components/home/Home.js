import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate()
    

    return (<>
        <fieldset>
            <label for="growth">How do you want your company to grow?</label>
            <div>
                <input
                    type="text"
                />
            </div>
            <br></br>
            <button>submit.</button>

        </fieldset >
        <div>
            <button
                onClick={() => navigate(`/video`)}>
                play.
            </button>
        </div></>)
}