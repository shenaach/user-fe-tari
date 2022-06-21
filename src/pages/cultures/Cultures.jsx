import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectFilter from "../../components/selectFilter/SelectFilter";
import Detail from "../../components/detail/Detail";
import cultures from "../../components/data/tari.json";
import provinces from "../../components/data/indonesia.json";
import "./cultures.scss";
import Pagination from "@mui/material/Pagination";
import Topbar from "../../components/topbar/Topbar";

const Cultures = () => {
    const [province, setProvince] = useState("");
    const [year, setYear] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [list, setList] = useState(cultures);
    const [page, setPage] = useState(1);

    const PER_PAGE = 9;
    const count = Math.ceil(list.length / PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);

        p !== page && window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const offset = (page - 1) * PER_PAGE;
    const currentPageData = list.slice(offset, offset + PER_PAGE);

    const years = [
        {
            id: 1,
            label: 2010,
            value: 2010,
        },
        {
            id: 2,
            label: 2013,
            value: 2013,
        },
    ];

    const reset = () => {
        setProvince("");
        setYear("");
    };

    useEffect(() => {
        const applyFilters = () => {
            let updatedList = cultures;

            if (year) {
                updatedList = updatedList.filter((item) => item.year === year);
            }
            if (province) {
                updatedList = updatedList.filter(
                    (item) => item.province === province
                );
            }
            if (inputSearch) {
                updatedList = updatedList.filter(
                    (item) =>
                        item.title
                            .toLowerCase()
                            .search(inputSearch.toLowerCase().trim()) !== -1
                );
            }

            setList(updatedList);
        };
        applyFilters();
    }, [year, province, inputSearch]);

    return(
        <>
        <Topbar />
        <div className="cultures">
            <div className="top">
            <div className="wrapper">
                <div className="search">
                    <input 
                    type="text"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    placeholder="Cari Seni Tari.." />
                    <SearchOutlinedIcon />
                </div>
                </div> 
                <div className="filters">
                    <SelectFilter
                        options={provinces}
                        label="Province"
                        value={province}
                        setValue={setProvince}
                    />
                    <SelectFilter
                        options={years}
                        label="Year"
                        value={year}
                        setValue={setYear}
                    />

                    <button className="reset" onClick={reset}>
                        reset
                    </button>
                    {/* <SelectFilter answer={answer} setAnswer={setAnswer} /> */}
                </div>
            </div>
            <div className="card-container">
                {currentPageData.map((culture) => (
                    <Detail key={culture.id} culture={culture} />
                ))}
            </div>
            <div className="pagination">
                <Pagination
                    count={count}
                    page={page}
                    size="large"
                    onChange={handleChange}
                />
            </div>
        </div>
        </>
    );
};

export default Cultures;
