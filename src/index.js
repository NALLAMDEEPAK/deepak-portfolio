import React from "react";
import Reactdom from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import App from "./App";

Reactdom.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </BrowserRouter>,document.getElementById("root")
)
