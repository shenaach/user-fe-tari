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
        "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/56339-11.jpg",
        "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/56339-11.jpg",
        "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/56339-11.jpg",
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
                    <h1>{culture?.name}</h1>
                    <div className="info-top">
                        <div className="infos1">
                            {"Tahun " + culture?.year || "-"}
                        </div>
                        <div className="infos2">
                            {culture?.province?.name || "-"}
                        </div>
                        <div className="infos3">
                            {"No Reg. " + culture?.reg_num || "-"}
                        </div>
                        <div className="infos4">
                            {"Tipe " + culture?.type || "-"}
                        </div>
                    </div>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Deskripsi" />
                            <Tab label="Galeri" />
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
                                            ? "https://www.sewakantorcbd.com/_nuxt/img/notAvailable.36eba18.png"
                                            : culture.img
                                    }
                                    alt=""
                                />
                            </div>
                            <p className="infoDesc">
                                {culture.desc ||
                                    "Deskripsi belum tersedia"}
                            </p>
                        </div>
                    ) : value === 1 ? (
                        culture.imgs.length > 0 ? (
                            <Gallery images={culture.imgs} />
                        ) : (
                            "Galeri belum tersedia"
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
                                : "Video belum tersedia"}
                        </div>
                    )}
                </div>
                </div>
        </div>
    );
};

export default CultureDetail;