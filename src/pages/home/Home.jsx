import React from 'react';
import Topbar from "../../components/topbar/Topbar";
// import HeroSection from '../../components/pages/HeroSection';
import Hero from '../../components/pages/Hero';
import Pricing from '../../components/pages/Pricing';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import { homeObjOne} from './Data';
import "./home.css"

export default function Home(){
    return(
        <>
        <Topbar />
        <Hero />
        <Pricing />
        </>
    )
}