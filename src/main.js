import React from "react";
import ReactDOM from "react-dom/client";
import * as RestaurantJSONData from "../react_data/restaurant-data.json";
import * as ImageJSONData from "../react_data/data.json";

const banner_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const RESTAURANT_LIST_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const HeaderComponent = () => {
  return (
    <header className="header">
      <img
        className="header_image"
        width="100px"
        height="100px"
        alt="react_icon"
        src={require("../assets/swiggy_icon.jpg")}
      />
      <div className="header_heading">
        <h1>SWIGGY</h1>
      </div>
      <ul>
        <li>Offers</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Menu 4</li>
      </ul>
    </header>
  );
};

const BannerComponent = (props) => {
  const { title, imageId, text } = props.bannerContent;
  return (
    <div className="img">
      <img width="200" height="200" alt="img" src={`${banner_url}${imageId}`} />
      <p>{text}</p>
    </div>
  );
};

const BannerImgComponent = () => {
  const imgData = ImageJSONData.data.cards[0].card.card.imageGridCards.info;
  return (
    <div className="img_mainContainer">
      {imgData.map((banner) => {
        return <BannerComponent bannerContent={banner} />;
      })}
    </div>
  );
};

const ImageComponent = (props) => {
  const {
    avgRating,
    slaString,
    text,
    name,
    sla,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div className="restarent_img">
      <img
        width="330px"
        height="250px"
        alt="img"
        src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(",")}</p>
      <p>{`${locality},${areaName}`}</p>
    </div>
  );
};

const MainComponent = () => {
  const restaurantListData =
    RestaurantJSONData.data.cards[0].card.card.gridElements.infoWithStyle
      .restaurants;
  return (
    <div className="restarentimage-container">
      {restaurantListData.map((rest) => {
        return <ImageComponent resData={rest} />;
      })}
    </div>
  );
};

function createPageUsingFunctionalComp() {
  const page = (
    <div>
      <HeaderComponent />
      <BannerImgComponent />
      <MainComponent />
      {/* <div>
           <FooterComponent />
         </div>  */}
    </div>
  );
  const rootEle = ReactDOM.createRoot(document.getElementById("root"));
  rootEle.render(page);
}
createPageUsingFunctionalComp();
