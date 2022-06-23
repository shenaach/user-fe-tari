import React from "react";
import "./single.scss";
import SingleDetail from "../../components/singleDetail/SingleDetail";
import Topbar from "../../components/topbar/Topbar";

const Single = () =>{
    
    return(
        <>
        <Topbar />
        <div className="single">
            <SingleDetail />
        </div>
        </>
    );
};

export default Single;