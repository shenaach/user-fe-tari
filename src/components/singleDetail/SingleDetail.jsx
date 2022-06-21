import React from "react";
import "./singleDetail.scss";

const SingleDetail = () => {
    return(
        <div className="singleDetail">
                <div className="detailbudaya">
                    <img 
                    src="https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/56339-11.jpg" 
                    alt="" 
                    className="singleDetailImg"
                    />
                    <h1 className="singleDetailTitle">Iya
                    {/* {culture.title} */}
                    </h1>
                    <div className="singleDetailInfo">
                        <span className="infoCat">Iya
                            {/* {culture.year ? culture.year : "-"} */}
                            </span>
                        <span className="infoCat">Iya
                            {/* {culture.province ? culture.province : "-"} */}
                            </span>
                    </div>
                    <p className="infoDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    {/* {culture.desc} */}
                    </p>
                </div>
        </div>
    );
};

export default SingleDetail;