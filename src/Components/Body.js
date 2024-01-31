import { useContext, useEffect, useState } from "react";
import { API, FOODIMG1 } from "./utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {
  faMagnifyingGlass,
  faStar,
  faFaceSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Body = () => {
  const [api, setApi] = useState([]);

  const [filterApi, setFilterApi] = useState([]);

  // const [searchTxt, setSearchTxt] = useState("");

  const [title1, setTitle1] = useState([]);

  const [title2, setTitle2] = useState();

  const [swipe, setSwipe] = useState([]);

  const [api2, setApi2] = useState([]);

  const [title3, setTitle3] = useState();

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 100,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  // };

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
    setTitle1(json?.data?.cards[1]?.card?.card?.header);

    setTitle2(json?.data?.cards[0]?.card?.card?.header);

    setSwipe(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    setApi2(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setTitle3(json?.data?.cards[2]?.card?.card);
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (filterApi.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col -mt-20 h-screen">
        <img src="https://i.pinimg.com/originals/50/7e/92/507e92e1d92210aac1a7130c8757a0dd.gif" />
        <h1 className="text-3xl font-semibold text-gray-700 ">
          FOOD EXPRESS WELCOMES YOU{" "}
          <FontAwesomeIcon className="text-[#ffd43b]" icon={faFaceSmileWink} />
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="w-[1400px] flex justify-between m-10 items-center gap-[650px] ml-auto mr-auto  ">
        <div>
          <button
            className="border-2 p-1 rounded-xl"
            onClick={() => {
              const topRated = api.filter((top) => top.info.avgRating > 4.3);
              setFilterApi(topRated);
              setSwipe([]);

              setTitle2([]);
              setApi2([]);
              setTitle3([]);
            }}
          >
            <FontAwesomeIcon className="text-yellow-400" icon={faStar} /> Rated
          </button>
        </div>

        <div>
          <input
            className="border-2 rounded-full p-1 pl-8"
            type="text"
            maxLength={30}
            placeholder="UserName"
            // value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            //
          />
        </div>
      </div>

      {/* <Swiper
        spaceBetween={100}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper> */}

      <div className="w-[1150px] mx-auto ml-auto mr-auto  border-b-2 ">
        <h1 className="font-bold font-sans text-3xl">{title2.title}</h1>
        <div className="flex w-[1150px] mx-auto mb-10">
          <Swiper spaceBetween={100} slidesPerView={5} direction="horizontal">
            {swipe.map((m) => (
              <SwiperSlide key={m.imageId}>
                <img
                  className="w-[200px] h-[200px] ml-auto mr-auto"
                  src={FOODIMG1 + m.imageId}
                  alt={`Food ${m.imageId}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-[1150px] mx-auto mb-8  mt-10  border-b-2 ">
        <h2 className="font-bold font-sans text-3xl">{title3?.title}</h2>
        <div className="w-[1150px] mx-auto mt-10 flex mb-14">
          <Swiper spaceBetween={100} slidesPerView={4} direction="horizontal">
            {api2.map((restaurantCards) => (
              <SwiperSlide key={restaurantCards.info.id}>
                <Link to={"/restaurants/" + restaurantCards.info.id}>
                  <Card restaurantCardsData={restaurantCards} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-[1150px] mx-auto">
        <h2 className="font-bold font-sans text-3xl">{title1?.title}</h2>
        <div className="w-[1150px] mx-auto mt-10 grid grid-cols-4 gap-x-20 gap-y-5  flex-wrap">
          {filterApi.map((restaurantCards) => (
            <Link
              to={"/restaurants/" + restaurantCards.info.id}
              key={restaurantCards.info.id}
            >
              <Card restaurantCardsData={restaurantCards} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
