import { Route, Routes } from "react-router-dom"
import { Home } from "../components/home/Home"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/" >
                    {/* Add Routes here */}


                    <Route index element={<Home />} />

                </Route>
                {/* <Route path="/categories">
                        <Route index element={<Categories />} />
                        <Route path="create" element={<NewCategory />} />
                        <Route path="edit/:categoryId" element={<EditCategory />} />
                        <Route path=":categoryId" element={<CategoryPosts />} />
                    </Route>
                    <Route path="/tags">
                        <Route index element={<TagList />} />
                        <Route path="create" element={<NewTag />} />
                        <Route path="edit/:tagId" element={<EditTag />} />
                    </Route>
                    <Route path="/users">
                        <Route index element={<UserList />} />
                        <Route path=":userId" element={<UserDetails />} />
                    </Route> */}


            </Routes >
        </>
    )
}