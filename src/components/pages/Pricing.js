import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='infosection'>
        <div className='infowrapper'>
          <h1 className='infoheading'>Cara Penggunaan Aplikasi</h1>
          <div className='infocontainer'>
            <Link to='/peta' className='infocontainer-card'>
              <div className='infocontainer-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Buka Halaman Peta</h3>
                <ul className='infocontainer-features'>
                  <li>Arahkan kursor ke Icon Pin untuk memilih provinsi yang dipilih</li>
                  <li>Lihat jumlah seni tari tiap Provinsi yang muncul pada Pop Up</li>
                  <li>Terdapat kategori warna tiap Provinsi</li>
                </ul>
                <Link to='/peta' style={{ textDecoration: "none" }}></Link>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Lihat Peta
                </Button> 
              </div>
            </Link>
            <Link to='/peta' className='infocontainer-card'>
              <div className='infocontainer-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gunakan Filter</h3>
                <ul className='infocontainer-features'>
                  <li>Klik kolom Cari Seni Tari dan ketik budaya yang ingin dicari</li>
                  <li>Klik dropdown pada Provinsi dan pilih Provinsi yang ingin dicari</li>
                  <li>Klik dropdown pada Tahun dan pilih Tahun yang ingin dicari</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Lihat Peta
                </Button>
              </div>
            </Link>
            <Link to='/tari' className='infocontainer-card'>
              <div className='infocontainer-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Buka halaman Tari</h3>
                <ul className='infocontainer-features'>
                  <li>Lakukan pencarian dan penyaringan dengan fitur Filter</li>
                  <li>Ditampilkan seni tari yang dicari, klik button Lihat Selengkapnya</li>
                  <li>Ditampilkan deskipsi lengkap mengenai seni tari</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                   Lihat Tari
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;