import React from 'react';
import "./detail.scss";

const Detail = ({culture}) =>{
    const page = window.location.pathname.split("/")[1];
    
    return (
        <div className="detail">
         <div className="detailItem">
         <img 
         className="detailImg"
         src={
            culture.img ===
                "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/" ||
            !culture.img
                ? "https://www.sewakantorcbd.com/_nuxt/img/notAvailable.36eba18.png"
                : culture.img
        }
         alt=""
         />
         <div className="detailInfo">
             <div className="detailCategory">
                 <span className="detailCat">{culture.year ? culture.year : "-"}</span>
                 <span className="detailCat">{culture.province?.name ? culture.province?.name : "-"}</span>
             </div>
             <span className="detailTitle">
             {culture.name}
             </span>
             <p className="detailDesc">
             {culture.desc ? (
                        <p>{culture.desc.substring(0, 230)} ...</p>
                    ) : (
                        <p>Deskripsi belum tersedia</p>
                    )}
             </p>
             <div className="detailBottom">
                 <a className="buttonRead" href={`/tari/${culture._id}`}>
                     Lihat Selengkapnya
                 </a>
             </div>
         </div>
         </div>
     </div>
    );
};

export default Detail;