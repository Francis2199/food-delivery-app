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
      <div className="filter-cont">
        <button
          className="restaurent_show_btn"
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
            type="text"
            id="searchInput"
            placeholder="Search..."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search_btn"
            onClick={() => {
              const filteredOutput = restaurantList.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filteredOutput);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="reset_btn"
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="rest-list-cont">
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
