import React, { useState } from "react";
import "./gallery.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Gallery = () =>{
    const [model, setModel] = useState(false);
    const [img, setImg] = useState("");

    const getImg = (imgSrc) => {
        setImg(imgSrc);
        setModel(true);
    };

    return(
        <>
        <div className= { model ? "model open" : "model" }>
            <img src={img} alt="" />
            <CloseRoundedIcon onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
                {photos.map((img) => (
                    <div className="pic" onClick={() => getImg(img)}>
                        <img src={img} alt="" />
                    </div>
                ))}
        </div>
        </>
    );
};

export default Gallery;