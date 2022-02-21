import React from "react"
import { Outlet } from "react-router-dom"
// import { Route, Routes } from "react-router-dom"

const About = (props) => {
    return (
        <>
            {/* <Routes>
                <Route path="author/*" element={<About/>}></Route>
            </Routes> */}
            <div>* About *</div>
            <Outlet />
        </>
    )
}
export default About