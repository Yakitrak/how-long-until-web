import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./View/Home/Home.component";
import Until from "./View/Until/Until.component";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/until"} element={<Until/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
