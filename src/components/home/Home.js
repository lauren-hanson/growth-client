import { useNavigate } from "react-router-dom";
export const Home = ({ video }) => {

    const navigate = useNavigate()
    // const {videoId}= useParams()

    return (<>
        <label for="growth">How do you want your company to grow?</label>
        <fieldset>
            <input
                type="text"
            />
            <button
                onClick={() => navigate(`/video/1`)}>
                play.
            </button>
        </fieldset ></>)
}