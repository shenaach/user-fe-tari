import React from "react";
import "./single.scss";
import SingleDetail from "../../components/singleDetail/SingleDetail";
import Topbar from "../../components/topbar/Topbar";

const Single = () =>{
    // const [value, setValue] = useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // console.log(value);
    
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