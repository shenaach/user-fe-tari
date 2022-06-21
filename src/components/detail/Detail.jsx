import React from 'react';
import "./detail.scss";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Detail = ({culture}) =>{
    return (
        <div className="detail">
         <div className="detailItem">
         <img 
         className="detailImg"
         src="https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/56339-11.jpg"
         alt=""
         />
         <div className="detailInfo">
             <div className="detailCategory">
                 <span className="detailCat">{culture.year ? culture.year : "-"}</span>
                 <span className="detailCat">{culture.province ? culture.province : "-"}</span>
             </div>
             <span className="detailTitle">
             {culture.title}
             </span>
             <p className="detailDesc">
             {culture.desc}
             </p>
             <div className="detailBottom">
                 <a className="buttonRead" href="/peta/single">
                     Lihat Selengkapnya
                 </a>
             </div>
         </div>
         </div>
     </div>
    );
};

export default Detail;