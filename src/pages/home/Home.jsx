import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Hero from '../../components/pages/Hero';
import Pricing from '../../components/pages/Pricing';
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