import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./views/Home/Home.component";
import Until from "./views/Until/Until.component";
import {routes} from "./constants/routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.until} element={<Until/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
