import { MENU_DETAILS_IMAGE_URL } from "../../utils/constants";

const RestaurantMenuListItem = (props) => {
  const { id, imageId, ratings, defaultPrice, name, price, description } =
    props?.cardItems?.card?.info;
  return (
    <div className="mx-10 py-5 border-b-2 flex justify-between">
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-lg">
          ₹ {(price ? price : defaultPrice) / 100}
        </p>
        <p className="text-gray-400 text-base">
          {ratings.aggregatedRating.rating}
        </p>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="max-w-28 h-28 bg-green-200 overflow-hidden rounded-lg">
        <img
          width="100%"
          height="100%"
          src={`${MENU_DETAILS_IMAGE_URL}${imageId}`}
        />
      </div>
    </div>
  );
};

export default RestaurantMenuListItem;
