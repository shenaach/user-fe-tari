import React, { useState } from 'react';
import MyMap from "../../components/mymap/MyMap";
import List from "../../components/list/List";
import Topbar from "../../components/topbar/Topbar";
import "./maps.scss"

const Maps = () => {
    const [province, setProvince] = useState("");

    return (
        <>
        <Topbar />
        <div className="maps">
            <List province={province} setProvince={setProvince} />
            <MyMap setProvince={setProvince} />
        </div>
        </>
    );
};

export default Maps;
// export default function Maps(){
//     return(
//     <>
//     <Topbar />
//     <div className="maps">
//     <List />
//     <MyMap />
//     </div>
//     </>
//     )
// }