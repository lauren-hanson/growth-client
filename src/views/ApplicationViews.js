import { Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"
import { Video } from "../components/videos/Video"
import { EducationVideo } from "../components/videos/EducationVideo"
import { CultureVideo } from "../components/videos/CultureVideo"
import { InnovationVideo } from "../components/videos/InnovationVideo"
import { InformationEnd } from "../components/endings/InformationEnd"
import { InnovationEnd } from "../components/endings/InnovationEnd"
import { EducationEnd } from "../components/endings/EducationEnd"
import { CultureEnd } from "../components/endings/CultureEnd"



export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/" >
                    {/* Add Routes here */}


                    <Route index element={<Home />} />

                </Route>

                <Route path="/video" >
                    {/* Add Routes here */}


                    <Route index element={<Video />} />
                    <Route path="education" element={<EducationVideo />} />
                    <Route path="innovation" element={<InnovationVideo />} />
                    <Route path="culture" element={<CultureVideo />} />



                </Route>

                <Route path="/form">
                    <Route index element={<InformationEnd />} />
                    <Route path="culture" element={<CultureEnd />} />
                    <Route path="education" element={<EducationEnd />} />
                    <Route path="innovation" element={<InnovationEnd />} />
                </Route>


            </Routes >
        </>
    )
}