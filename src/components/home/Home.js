import { useNavigate } from "react-router-dom";
export const Home = () => {

    const navigate = useNavigate()

    return (<>
        <label for="growth">How do you want your company to grow?</label>
        <fieldset>
            <input
                type="text"
            />
            <button
                onClick={() => navigate(`/videos/${video.id}`)}>
                play.
            </button>
        </fieldset ></>)
}