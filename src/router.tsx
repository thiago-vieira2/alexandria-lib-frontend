import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/index.tsx";

export function Router() {
   return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
   );
}