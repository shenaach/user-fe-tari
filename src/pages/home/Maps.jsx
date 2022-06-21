import React from 'react';
import MyMap from "../../components/mymap/MyMap";
import List from "../../components/list/List";
import Topbar from "../../components/topbar/Topbar";
import "./maps.scss"

export default function Maps(){
    return(
    <>
    <Topbar />
    <div className="maps">
    <List />
    <MyMap />
        {/* <div className="list"> */}
            {/* <div className="container"> */}
                {/* <Detail /> */}
            {/* <div className="card">
                <div className="content">
                    <h1>Detail Budaya</h1>
                    <div className="budaya">Saman</div>
                    <div className="desc">
                        Saman adalah salah satu..
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h1>Detail Budaya</h1>
                    <div className="budaya">Saman</div>
                    <div className="desc">
                        Saman adalah salah satu..
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h1>Detail Budaya</h1>
                    <div className="budaya">Saman</div>
                    <div className="desc">
                        Saman adalah salah satu..
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h1>Detail Budaya</h1>
                    <div className="budaya">Saman</div>
                    <div className="desc">
                        Saman adalah salah satu..
                    </div>
                </div>
            </div> */}
            {/* </div>
        </div> */}
    </div>
    </>
    )
}