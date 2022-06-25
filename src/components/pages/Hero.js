import React from "react";
import './hero.css';
import img from "../../images/3508755.jpg";
import { Button } from './Button';
import { Link } from 'react-router-dom';

const Hero=()=>{
    return(
        <>
        <div className="mainSection">
            <div className="contentBox">
                <h4>Seni Pertunjukkan</h4>
                <h1>Sistem Informasi Geografis untuk Pemetaan Seni Tari</h1>
                <p>Lestari adalah website pemetaan seni tari tiap provinsi di Indonesia yang didalamnya terdapat peta Indonesia dilengkapi dengan kategorisasi warna jumlah tari pada tiap provinsinya.</p>
                <div className= "btnBox">
                    <div className="btn">
                    <Link to='/peta' style={{ textDecoration: "none" }}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                      Lihat Peta
                  </Button>
                </Link>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src={img} alt="home" />
            </div>
        </div>
        </>
    )
}

export default Hero;
