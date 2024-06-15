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
    <div className="restarentimg_main_container">
      <div className="restarentimg_child_container">
        <img
          className="restarent_img"
          alt="img"
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
        />
      </div>
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
