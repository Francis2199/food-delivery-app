import { BannerImage } from "./bannerimage";
import * as ImageJSONData from "../../assets/data/data.json";

export const Banner = () => {
  const imgData = ImageJSONData.data.cards[0].card.card.imageGridCards.info;
  return (
    <div>
      <div className="banner_btn-container">
        <button
          className="lessthan_btn"
          onClick={() => {
            document.getElementById("container").scrollLeft -= 200 * 4;
          }}
        >
          &lt;
        </button>
        <button
          className="greaterthan_btn"
          onClick={() => {
            document.getElementById("container").scrollLeft += 200 * 4;
          }}
        >
          &gt;
        </button>
      </div>
      <div className="img_mainContainer" id="container">
        {imgData.map((banner) => {
          return <BannerImage bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};
