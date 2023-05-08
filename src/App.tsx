import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./views/Home/Home.component";
import Until from "./views/Until/Until.component";
import {routes} from "./common/routes";
import dayjs from "dayjs";

const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.HOME} element={<Home/>}/>
                <Route path={routes.UNTIL} element={<Until/>}/>
                <Route path="*" element={ <Navigate to={routes.HOME} replace />} />
            </Routes>
        </BrowserRouter>


    );
}
export default App;
