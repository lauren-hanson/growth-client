
import { GrowthVideo } from "./GrowthVideo"


export const Video = ({ label }) => {


    return (
        <article className="videos__individual">
            <div>
                <h3>{label}</h3>
            </div>

            <GrowthVideo />

        </article>
    )
}