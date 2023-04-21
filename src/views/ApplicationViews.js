import { Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"
import { Video } from "../components/videos/Video"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/" >
                    {/* Add Routes here */}


                    <Route index element={<Home />} />

                </Route>

                <Route path="/video/:videoId" >
                    {/* Add Routes here */}


                    <Route index element={<Video />} />

                </Route>


            </Routes >
        </>
    )
}