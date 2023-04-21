import { useState, useEffect } from "react"

export const VideoList = () => {

    const [videos, setVideos] = useState([])

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
                    return <><div>{v.label} -</div>
                        <p>{v.topic.type}</p></>
                }
                )}
        </article>
    )


}