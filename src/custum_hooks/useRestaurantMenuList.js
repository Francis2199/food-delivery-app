import { useEffect, useState } from "react";

import { RESTAURANT_DETAILS_URL } from "../../utils/constants";

const useRestaurantMenuList = (id) => {
  // const [restaurantMenuList, setRestaurantMenuList] = useState([]);
  const [restaurantName, setRestaurantName] = useState("Name");
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    fetchRestaurantMenuList(id);
  }, []);

  const fetchRestaurantMenuList = async (id) => {
    const data = await fetch(`${RESTAURANT_DETAILS_URL}${id}`);
    const restaurantMenuJSON = await data.json();
    console.log(restaurantMenuJSON);

    // const card1 =
    //   restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
    //     .card.card.itemCards;

    // const card2 =
    //   restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
    //     .card.card.itemCards;

    // const restaurantMenuData = card1 ? card1 : card2;
    // setRestaurantMenuList(restaurantMenuData);
    setRestaurantName(restaurantMenuJSON.data.cards[0].card.card.text);
    setCardItems(
      restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    );
  };
  return {
    // menuList: restaurantMenuList,
    restaurantName: restaurantName,
    cardDetails: cardItems,
  };
};

export default useRestaurantMenuList;
