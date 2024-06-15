import { RESTAURANT_LIST_IMAGE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

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
  return (
    <div className="restarent_img">
      <img
        width="330px"
        height="250px"
        alt="img"
        src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
      />
      <Link to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(",")}</p>
      <p>{`${locality},${areaName}`}</p>
    </div>
  );
};

export default RestaurantDetails;
