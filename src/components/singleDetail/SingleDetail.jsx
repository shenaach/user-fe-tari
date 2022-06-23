import React, { useEffect, useState } from "react";
import "./singleDetail.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Gallery from "../../components/gallery/Gallery";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";

const CultureDetail = () => {
    const [value, setValue] = useState(0);
    const [culture, setCulture] = useState({});
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const photos = [
        "https://www.99.co/blog/indonesia/wp-content/uploads/2020/11/egrang.jpg",
        "https://www.99.co/blog/indonesia/wp-content/uploads/2020/11/egrang.jpg",
        "https://www.99.co/blog/indonesia/wp-content/uploads/2020/11/egrang.jpg",
    ];
    const videos = [
        "https://www.youtube.com/embed/D4jq5Bd9bTA",
        "https://www.youtube.com/embed/D4jq5Bd9bTA",
        "https://www.youtube.com/embed/D4jq5Bd9bTA",
    ];

    useEffect(() => {
        const getAllCultures = async () => {
            try {
                const res = await publicRequest.get(`/cultures/find/${id}`);
                setCulture(res.data);
            } catch (err) {}
        };
        getAllCultures();
    }, []);

    return (
        <div className="singleDetail">
            <div className="cultureDetail-container">
                <div className="heading">
                    <h1>{culture.name}</h1>
                    {/* <div className="regnum">
                        <span>Nomor Registrasi :</span>
                        <span> {culture.reg_num || "-"}</span>
                    </div> */}
                    <div className="info-top">
                        <div className="infos1">
                            {"Tahun " + culture.year || "-"}
                        </div>
                        <div className="infos2">
                            {culture?.province?.name || "-"}
                        </div>
                        <div className="infos3">
                            {"No Reg. " + culture.reg_num || "-"}
                        </div>
                        <div className="infos4">
                            {"Tipe " + culture.type || "-"}
                        </div>
                    </div>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Deskripsi" />
                            <Tab label="Foto" />
                            <Tab label="Video" />
                        </Tabs>
                    </Box>
                </div>
                <div className="tab-container">
                    {value === 0 ? (
                        <div className="description">
                            <div className="img-container">
                                <img
                                    src={
                                        culture.img ===
                                            "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/" ||
                                        !culture.img
                                            ? "https://dpwfkdtjabar.com/assets/images/artikel/no-image.png"
                                            : culture.img
                                    }
                                    alt=""
                                />
                            </div>
                            <p className="infoDesc">
                                {culture.desc ||
                                    "Deskripsi tidak tersedia"}
                            </p>
                        </div>
                    ) : value === 1 ? (
                        culture.imgs.length > 0 ? (
                            <Gallery images={culture.imgs} />
                        ) : (
                            "Gambar tidak tersedia"
                        )
                    ) : (
                        <div className="videos-container">
                            {culture.videos.length > 0
                                ? culture?.videos.map((video) => (
                                      <iframe
                                          width="320"
                                          height="215"
                                          src={video}
                                      ></iframe>
                                  ))
                                : "Video tidak tersedia"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CultureDetail;
// import React from "react";
// import "./singleDetail.scss";

// const SingleDetail = () => {
//     return(
//         <div className="singleDetail">
//                 <div className="detailbudaya">
//                     <img 
//                     src="https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/56339-11.jpg" 
//                     alt="" 
//                     className="singleDetailImg"
//                     />
//                     <h1 className="singleDetailTitle">Iya
//                     {culture.title}
//                     </h1>
//                     <div className="singleDetailInfo">
//                         <span className="infoCat">Iya
//                             {culture.year ? culture.year : "-"}
//                             </span>
//                         <span className="infoCat">Iya
//                             {culture.province ? culture.province : "-"}
//                             </span>
//                     </div>
//                     <p className="infoDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                     {culture.desc}
//                     </p>
//                 </div>
//         </div>
//     );
// };

// export default SingleDetail;