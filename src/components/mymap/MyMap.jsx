import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mymap.scss";
import mapData from "../../components/data/indonesia.json";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { publicRequest } from "../../requestMethods";
import SelectFilter from "../../components/selectFilter/SelectFilter";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Icon } from "leaflet";
import { CircularProgress } from "@mui/material";
import Detail from "../detail/Detail";
import { tahun } from "../../utils/naming";

const MyMap = ({ setProvince, open, setOpen }) => {
  const [calc, setCalc] = useState({});

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [inputSearch, setInputSearch] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [provincee, setProvincee] = useState("");
  const [year, setYear] = useState("");
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        setIsLoading(true);
        const res = await publicRequest.get(`/cultures`);
        setList(res.data);
        setCultures(res.data);
        if (res) {
          setIsLoading(false);
        }
        const totalData = await publicRequest.get(`/cultures/count`);
        const provinceData = await publicRequest.get(`/provinces`);
        const calcData = await publicRequest.get(`/cultures/calculate`);
        // setProvinces(provinceData.data);
        setProvinces(mergeProvincesTotal(provinceData.data, totalData.data));
        setCalc(calcData.data);
      } catch (err) {}
    };
    getAllData();
  }, []);

  const findId = (val, totalData) => {
    let temp = totalData.filter((item) => item._id === val);
    return temp[0];
  };

  const mergeProvincesTotal = (val, totalData) => {
    const test = val?.map((province) => {
      const totalTemp = findId(province._id, totalData);

      return {
        ...province,
        geojson: {
          ...province.geojson,
          properties: {
            ...province.geojson.properties,
            provinceId: totalTemp?._id || "",
            total: totalTemp?.count || 0,
          },
        },
      };
    });
    return test;
  };

  let data = mapData.map((map) => map.geojson);
  // console.log(mapData);
  //mapdata ; array , map(object)

  // mapData.map((map) => console.log(map.lat));
  // mapData.map((map) => console.log(map));

  const countryStyle = {
    fillOpacity: 0.5,
    // fillColor: 'red',
    color: "black",
    weight: 2,
  };

  const onEachCountry = (country, layer) => {
    if (country.properties.total) {
      if (country.properties.total >= calc.high) {
        layer.options.fillColor = "green";
      } else if (country.properties.total <= calc.low) {
        layer.options.fillColor = "red";
      } else {
        layer.options.fillColor = "yellow";
      }
    }

    layer.on("click", function (e) {
      setProvince(country.properties.provinceId);
    });
    layer.on("mouseover", function (e) {
      e.target.setStyle({
        fillOpacity: 0.7,
      });
    });
    layer.on("mouseout", function (e) {
      e.target.setStyle({
        fillOpacity: 0.3,
      });
    });
  };

  const reset = () => {
    setProvincee("");
    setYear("");
  };

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = cultures;

      if (year) {
        updatedList = updatedList.filter((item) => item.year === year);
      }
      if (provincee) {
        updatedList = updatedList.filter(
          (item) => item.province._id === provincee
        );
      }
      if (inputSearch) {
        updatedList = updatedList.filter(
          (item) =>
            item.name.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
            -1
        );
      }
      setList(updatedList);
    };
    applyFilters();
  }, [year, provincee, inputSearch, cultures, isLoading]);
  console.log(list);

  return (
    <>
      <div className="MyMaps">
        <MapContainer
          center={[0.7893, 113.9213]}
          zoom={5}
          scrollWheelZoom={false}
          className="map_container"
        >
          {provinces.length > 0 && (
            <>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON
                style={countryStyle}
                data={provinces.map((map) => map.geojson)}
                onEachFeature={onEachCountry}
              />
            </>
          )}
          {provinces.map((data) => (
            <Marker
              position={[data.lat, data.long]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
              eventHandlers={{
                click: (e) => {
                  setProvince(data.geojson.properties.provinceId); // will print 'FooBar' in console
                },
              }}
            >
              <Popup>
                <div className="info">
                  <b>{data.name}</b>
                  <p>{"Jumlah Seni Tari : " + data.geojson.properties.total}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        {calc.high && (
          <div className="legend">
            <div className="title">Klasifikasi</div>
            <div className="colorInfo">
              <div className="color" style={{ background: "green" }}></div>
              <div>{" > " + Math.floor(calc.high) + "    (Tinggi)"}</div>
            </div>
            <div className="colorInfo">
              <div className="color" style={{ background: "yellow" }}></div>
              <div>
                {Math.floor(calc.low) +
                  " - " +
                  Math.floor(calc.high) +
                  " (Sedang)"}
              </div>
            </div>
            <div className="colorInfo">
              <div className="color" style={{ background: "red" }}></div>
              <div>{" < " + Math.floor(calc.low) + "    (Rendah)"}</div>
            </div>
            <div className="provInfo">
              Provinsi tinggi : {calc.highProvince}
            </div>
            <div className="provInfo">Provinsi sedang : {calc.midProvince}</div>
            <div className="provInfo">Provinsi rendah : {calc.lowProvince}</div>
          </div>
        )}
        <button
          // className="button-open"
          style={{
            position: "absolute",
            marginTop: 100,
            marginLeft: 12,
            top: 0,
            zIndex: 1,
            background: "white",
            border: "none",
            padding: 10,
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? "<" : ">"}
        </button>
        <div
          className="mobile_map"
          style={open ? { display: "none" } : { display: "" }}
        >
          <div className="top" style={{ marginTop: 30 }}>
            <div
              className="search"
              style={{
                position: "relative",
                border: "0.5px solid lightgray",
                borderRadius: 30,
                padding: 4,
              }}
            >
              <input
                style={{ border: "none", outline: "none" }}
                type="text"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                placeholder="Cari Seni Tari"
              />
              <span
                style={{
                  position: "absolute",
                  right: 10,
                  cursor: "pointer",
                }}
              >
                <SearchOutlinedIcon />
              </span>
            </div>
            <div
              className="filters"
              style={{ marginTop: 10, position: "relative", cursor: "pointer" }}
            >
              <SelectFilter
                options={provinces}
                label="Province"
                value={provincee}
                setValue={setProvincee}
              />
              <SelectFilter
                options={tahun(2010, 2021)}
                label="Year"
                value={year}
                setValue={setYear}
              />

              <span
                style={{
                  position: "absolute",
                  marginLeft: 10,
                  top: 5,
                  cursor: "pointer",
                }}
                onClick={reset}
              >
                Reset
              </span>
            </div>
          </div>
          {isLoading ? (
            <div style={{ minHeight: 280 }}>
              <CircularProgress color="primary" size="2rem" thickness={5} />
            </div>
          ) : list.length < 1 ? (
            <div style={{ minHeight: 280 }}>Seni Tari tidak ditemukan</div>
          ) : (
            <>
              <div
                style={{
                  height: "320px",
                  margin: "auto 0",
                  overflow: "auto",
                }}
              >
                {list.map((culture) => (
                  <>
                    <div style={{ marginTop: 15 }}>
                      <Detail culture={culture} />
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyMap;
