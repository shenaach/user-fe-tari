import React, { useState } from "react";
import MyMap from "../../components/mymap/MyMap";
import List from "../../components/list/List";
import Topbar from "../../components/topbar/Topbar";
import "./maps.scss";

const Maps = () => {
  const [province, setProvince] = useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Topbar />
      <div className="maps">
        <List province={province} setProvince={setProvince} open={open} />
        <MyMap setProvince={setProvince} open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Maps;
// export default function Maps(){
//     return(
//     <>
//     <Topbar />
//     <div className="maps">
//     <List />
//     <MyMap />
//     </div>
//     </>
//     )
// }
