import React from "react";
import { Route, Routes } from "react-router-dom"
import NotMatch from "./pages/NotMatch"
import About from "./pages/About"
import TodoContainer from "./components/TodoContainer"
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={< TodoContainer />} />
                <Route path="/About/*" element={< About />}>
                    <Route path="author" element={< TodoContainer />} />
                </Route>
                <Route path="/*" element={< NotMatch />} />
            </Routes>
        </div>
    )
}

export default App