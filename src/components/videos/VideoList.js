import { useState, useEffect } from "react"
import { Video } from "./Video"

export const VideoList = () => {

    const [videos, setVideos] = useState([])
    c

    useEffect(
        () => {
            fetch(`http://localhost:8088/videos?_expand=topic`)
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