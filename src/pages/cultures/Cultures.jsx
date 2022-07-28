import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./cultures.scss";
import SelectFilter from "../../components/selectFilter/SelectFilter";
import Detail from "../../components/detail/Detail";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { publicRequest } from "../../requestMethods";
import { tahun } from "../../utils/naming";
import Topbar from "../../components/topbar/Topbar";

const Cultures = () => {
    const [province, setProvince] = useState("");
    const [year, setYear] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [list, setList] = useState();
    const [page, setPage] = useState(1);
    const [cultures, setCultures] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getAllProvinces = async () => {
            try {
                const res = await publicRequest.get(`/provinces`);
                setProvinces(res.data);
            } catch (err) {}
        };
        getAllProvinces();
    }, []);

    useEffect(() => {
        const getAllCultures = async () => {
            setIsLoading(true);
            try {
                const res = await publicRequest.get(`/cultures`);
                setList(res.data);
                setCultures(res.data);
                if (res) {
                    setIsLoading(false);
                }
            } catch (err) {}
        };
        getAllCultures();
    }, []);

    const PER_PAGE = 8;
    const count = Math.ceil(list?.length / PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);

        p !== page && window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const offset = (page - 1) * PER_PAGE;
    const currentPageData = list?.slice(offset, offset + PER_PAGE);

    const years = [
        {
            id: 1,
            label: 2018,
            value: 2018,
        },
        {
            id: 2,
            label: 2019,
            value: 2019,
        },
    ];

    const reset = () => {
        setProvince("");
        setYear("");
    };

    useEffect(() => {
        setPage(1);
        const applyFilters = () => {
            let updatedList = cultures;

            if (year) {
                updatedList = updatedList.filter((item) => item.year === year);
            }
            if (province) {
                updatedList = updatedList.filter(
                    (item) => item.province._id === province
                );
            }
            if (inputSearch) {
                updatedList = updatedList.filter(
                    (item) =>
                        item.name
                            .toLowerCase()
                            .search(inputSearch.toLowerCase().trim()) !== -1
                );
            }

            setList(updatedList);
        };
        applyFilters();
    }, [year, province, inputSearch, isLoading]);

    return (
        <>
        <Topbar />
        <div className="cultures">
            <div className="top">
                <div className="search">
                    <input
                        type="text"
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        placeholder="Cari Seni Tari..."
                    />
                    <SearchOutlinedIcon className="icon" />
                </div>
                <div className="filters">
                    <SelectFilter
                        options={provinces}
                        label="Province"
                        value={province}
                        setValue={setProvince}
                    />
                    <SelectFilter
                        options={tahun(2010, 2021)}
                        label="Year"
                        value={year}
                        setValue={setYear}
                    />

                    <div className="reset" onClick={reset}>
                        Reset
                    </div>
                    {/* <SelectFilter answer={answer} setAnswer={setAnswer} /> */}
                </div>
            </div>

            {isLoading ? (
                <div className="load">
                    <CircularProgress
                        color="primary"
                        size="2rem"
                        thickness={5}
                    />
                </div>
             ) : currentPageData?.length < 1 ? (
                <div className="nodata">Seni Tari tidak ditemukan</div>
            ) : (
                <>
                    <div className="card-container">
                        {currentPageData?.map((culture) => (
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
                </>
            )}
        </div>
        </>
    );
};

export default Cultures;
