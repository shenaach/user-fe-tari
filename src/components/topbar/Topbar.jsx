import React, { useState } from 'react';
import "./topbar.scss";

const Topbar = () => {
    const topbarData = [
        {
            title: "Beranda",
            path: "/",
        },
        {
            title: "Peta",
            path: "/peta",
        },
        {
            title: "Tari",
            path: "/tari",
        },
    ];

    const [active, setActive] = useState(false);
    const navToggle = () => {
        setActive(!active);
    };

    return (
        <nav className={active ? "topbar active" : "topbar"}>
            <div className="brand">
                <a href="/">Lestari</a>
                <i className="topIcon fa-solid fa-map-location-dot"></i>
            </div>
            <ul className={active ? "menu active" : "menu"}>
                {topbarData.map((item, key) => (
                    <li
                        className="item"
                        key={key}
                        id={
                            window.location.pathname === item.path
                                ? "active"
                                : ""
                        }
                    >
                        <a href={item.path} className="link">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div
                onClick={navToggle}
                className={active ? "toggler toggle" : "toggler"}
            >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Topbar;


// export default function Topbar(){
//     return(
//         <div className="top">
//             <div className="topLeft">Maps
//             <i className="topIcon fa-solid fa-map-location-dot"></i>
//             </div>
//             <div className="topCenter">
//                 <ul className="topList">
//                     <Link to="/" style={{ textDecoration: "none" }}>
//                     <li className="topListItem">Beranda</li>
//                     </Link>
//                     <Link to="/peta" style={{ textDecoration: "none" }}>
//                     <li className="topListItem">Peta</li>
//                     </Link>
//                     <Link to="/tari" style={{ textDecoration: "none" }}>
//                     <li className="topListItem">Daftar Tari</li>
//                     </Link>
//                 </ul>
//             </div>
//             <div className="topRight">
//                 {/* <img 
//                     className="topImg"
//                     src="https://i.pinimg.com/originals/8e/93/f3/8e93f3f5b2cf9507091720964670523c.png" 
//                     alt="" 
//                 /> */}
//             </div>
//         </div>
//     )
// }