
import { VideoPlayer } from "./VideoPlayer"

export const Video = ({ label }) => {


    return (
        <article className="videos__individual">
            <div>
                <h3>{label}</h3>
            </div>

            <VideoPlayer />

        </article>
    )
}