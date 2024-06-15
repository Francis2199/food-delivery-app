import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_URL } from "../../utils/constants";

const RestaurantOverview = () => {
  let { id } = useParams();

  const [restaurantMenuList, setRestaurantMenuList] = useState([]);
  const [restaurantName, setRestaurantName] = useState("Name");

  useEffect(() => {
    fetchRestaurantMenuList(id);
  }, []);

  const fetchRestaurantMenuList = async (id) => {
    const data = await fetch(`${RESTAURANT_DETAILS_URL}${id}`);
    const restaurantMenuJSON = await data.json();
    console.log(restaurantMenuJSON);

    const card1 =
      restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
        .card.card.itemCards;

    const card2 =
      restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
        .card.card.itemCards;

    const restaurantMenuData = card1 ? card1 : card2;
    setRestaurantMenuList(restaurantMenuData);
    setRestaurantName(restaurantMenuJSON.data.cards[0].card.card.text);
  };

  return restaurantMenuList.length ? (
    <div className="main-cont">
      <h1>{restaurantName}</h1>
      {restaurantMenuList.map((restMenu) => {
        return (
          <div className="rest-menu-list-cont">
            <h3>{restMenu.card.info.name}</h3>
            <div>{`$ ${restMenu.card.info.price / 100}`}</div>
            <div>{`${restMenu.card.info.ratings.aggregatedRating.rating} (${restMenu.card.info.ratings.aggregatedRating.ratingCountV2})`}</div>
            <div>Info</div>
          </div>
        );
      })}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default RestaurantOverview;
