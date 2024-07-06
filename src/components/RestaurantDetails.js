import { useDispatch } from "react-redux";
import { RESTAURANT_LIST_IMAGE_URL } from "../../utils/constants";

import { Link } from "react-router-dom";
import { addItem } from "../Store/CartSlice";

const RestaurantDetails = (props) => {
  const {
    id,
    avgRating,
    slaString,
    text,
    name,
    sla,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.restData.info;

  const dispatch = useDispatch();

  const addItemsToCart = () => {
    console.log("called");
    // Action to be dispatched
    // props?.cardItems

    dispatch(addItem(props.cardItems));
  };
  return (
    <div className="restarentimg_main_container w-[280] mr-8 mb-8 rounded-2xl">
      <div className="restarentimg_child_container w-full h-[150] m-auto overflow-hidden rounded-2xl">
        <img
          className="restarent_img"
          alt="img"
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          width="100%"
        />
        <button
          className="px-2 py-1 bg-black left-1/4 bottom-0 text-white rounded-lg absolute"
          onClick={addItemsToCart}
        >
          Add+
        </button>
      </div>
      <Link to={`/details/${id}`}>
        <h3 className="font-semibold mt-4 hover:text-orange-500">{name}</h3>
      </Link>
      <p className="font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline"
          fill="green"
          width="20.088"
          height="20.087"
        >
          <path d="M10.044 20.087A10.044 10.044 0 1 0 0 10.043a10.044 10.044 0 0 0 10.044 10.044zM8.534 8.193l1.4-4.313 1.4 4.313h4.533L12.2 10.858l1.4 4.312-3.666-2.665-3.666 2.665 1.4-4.312L4 8.193z" />
        </svg>{" "}
        {avgRating} <span className="ml-4">{sla.slaString}</span>
      </p>
      <p className="">{cuisines.join(",")}</p>
      <p className="">{`${locality},${areaName}`}</p>
    </div>
  );
};

export default RestaurantDetails;
