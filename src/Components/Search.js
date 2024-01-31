import React from "react";
import { API } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchCard from "./SearchCard";

const Search = () => {
  const [api, setApi] = useState([]);
  const [filterApi, setFilterApi] = useState([]);

  const [searchTxt, setSearchTxt] = useState();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(API);

    const json = await data.json();

    setApi(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterApi(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setApi2(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  return (
    <div className="w-[800px] ml-auto mr-auto mt-32">
      <div className="relative">
        <input
          className="border-2 rounded-lg p-1 pl-8 w-[800px]"
          type="text"
          placeholder="Search..."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <Link to="/search">
          <button
            className="text-lg absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => {
              const searchItem = api.filter((search) =>
                search.info.name
                  .toLowerCase()
                  .replace(" ", "")
                  .includes(searchTxt.toLowerCase().replace(" ", ""))
              );
              setFilterApi(searchItem);
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Link>
      </div>
      <div>
        {filterApi.map((res) => (
          <SearchCard resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Search;
