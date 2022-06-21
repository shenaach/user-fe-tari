import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import HeroSection from '../../components/pages/HeroSection';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { homeObjOne} from './Data';
import "./home.css"

export default function Home(){
    return(
        <>
        <Topbar />
        <HeroSection {...homeObjOne} />
        {/* <HeroSection {...homeObjThree} /> */}
        {/* <HeroSection {...homeObjTwo} /> */}
        {/* <HeroSection {...homeObjFour} /> */}
        {/* <div className="home">
            Anggep aja halaman home
        </div> */}
        </>
    )
}