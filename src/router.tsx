import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index.tsx";
import Main from "./pages/main/index.tsx";
import About from "./pages/about/index.tsx";

export function Router() {
   return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element = {<About/>}/>

        </Routes>
    </BrowserRouter>
   );
}