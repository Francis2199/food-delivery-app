import RestaurantDetails from "./RestaurantDetails";
import { useEffect, useState } from "react";

import { RESTAURANT_LIST_URL } from "../../utils/constants";
import RestaurantShimmerPage from "./RestaurantShimmerPage";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("use effect called");
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const restaurantJSON = await data.json();
    const restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantList(restaurantData);
    setFilteredRestaurantList(restaurantData);
  };

  return filteredRestaurantList.length ? (
    <div className="main-cont">
      <div className="filter-cont filter-cont flex mx-10 my-3 justify-between">
        <button
          className="restaurent_show_btn bg-indigo-900 text-white px-1 py-1 font-normal rounded-md w-[200] h-[35]"
          onClick={() => {
            const filteredOutput = restaurantList.filter((rest) => {
              return rest.info.avgRating > 4.5;
            });
            setFilteredRestaurantList(filteredOutput);
          }}
        >
          Show top rated restaurants
        </button>
        <div className="search-cont">
          <input
            className=" border border-gray-500 h-[35] rounded w-4/6 mx-2 py-2 px-3 text-stone-950 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="searchInput"
            placeholder="Search..."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search_btn bg-indigo-900 text-white px-1 py-1 font-normal rounded-md  w-[55] h-[35]"
            onClick={() => {
              const filteredOutput = restaurantList.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filteredOutput);
            }}
          >
            GO
          </button>
        </div>

        <button
          className="reset_btn bg-indigo-900 text-white px-1 py-1 font-normal rounded-md  w-[60] h-[35]"
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="rest-list-cont rest-list-cont flex flex-wrap mx-10">
        {filteredRestaurantList.map((rest) => {
          return <RestaurantDetails key={rest?.info?.id} restData={rest} />;
        })}
      </div>
    </div>
  ) : (
    // <div className='loader-cont'>
    //   <h1>Loading...</h1>
    // </div>

    <RestaurantShimmerPage />
  );
};

export default RestaurantList;
