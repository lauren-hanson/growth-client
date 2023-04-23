import { useState, useEffect } from "react"
import { Video } from "./Video"

export const VideoList = () => {

    const [videos, setVideos] = useState([])
    c

    useEffect(
        () => {
            fetch(`https://seashell-app-38zla.ondigitalocean.app/videos?_expand=topic`)
                .then(response => response.json())
                .then((videoArray) => {
                    setVideos(videoArray)
                })
        },
        []
    )

    return (
        <article className="videos">
            {
                videos.map((v) => {
                    <Video key={v.id} video={v} label={v.label}
                    />
                }
                )}
        </article>
    )


}