import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./views/Home/Home.component";
import Until from "./views/Until/Until.component";
import {routes} from "./constants/routes";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";

const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
            <Routes>
                <Route path={routes.HOME} element={<Home/>}/>
                <Route path={routes.UNTIL} element={<Until/>}/>
                <Route path="*" element={ <Navigate to={routes.HOME} replace />} />
            </Routes>
        </BrowserRouter>
        </LocalizationProvider>


    );
}
export default App;
