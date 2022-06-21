import React from "react";
import Home from "./pages/home/Home";
import Maps from "./pages/home/Maps";
import Cultures from "./pages/cultures/Cultures";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <div className="App">
    {/* <Topbar /> */}
    <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/peta" element={<Maps />} />
                        <Route path="/tari">
                            <Route index element={<Cultures />} />
                            <Route
                                path=":cultureId"
                                element={<Single />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
    </div>
  ); 
}

export default App;
