import React, { useState } from "react";
import "./topbar.scss";

const Topbar = () => {
    const navbarData = [
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
                {navbarData.map((item, key) => (
                    <li
                        className="item"
                        key={key}
                        id={
                            window.location.pathname.split("/")[1] ===
                            item.path.split("/")[1]
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

// import React, { useState } from 'react';
// import "./topbar.scss";

// const Topbar = () => {
//     const topbarData = [
//         {
//             title: "Beranda",
//             path: "/",
//         },
//         {
//             title: "Peta",
//             path: "/peta",
//         },
//         {
//             title: "Tari",
//             path: "/tari",
//         },
//     ];

//     const [active, setActive] = useState(false);
//     const navToggle = () => {
//         setActive(!active);
//     };

//     return (
//         <nav className={active ? "topbar active" : "topbar"}>
//             <div className="brand">
//                 <a href="/">Lestari</a>
//                 <i className="topIcon fa-solid fa-map-location-dot"></i>
//             </div>
//             <ul className={active ? "menu active" : "menu"}>
//                 {topbarData.map((item, key) => (
//                     <li
//                         className="item"
//                         key={key}
//                         id={
//                             window.location.pathname.split("/")[1] ===
//                             item.path.split("/")[1]
//                                 ? "active"
//                                 : ""
//                         }
//                     >
//                         <a href={item.path} className="link">
//                             {item.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>

//             <div
//                 onClick={navToggle}
//                 className={active ? "toggler toggle" : "toggler"}
//             >
//                 <div className="line1"></div>
//                 <div className="line2"></div>
//                 <div className="line3"></div>
//             </div>
//         </nav>
//     );
// };

// export default Topbar;