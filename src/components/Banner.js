import { BannerImage } from "./BannerImage";
import * as ImageJSONData from "../../assets/data/data.json";

export const Banner = () => {
  const imgData = ImageJSONData.data.cards[0].card.card.imageGridCards.info;
  return (
    <div>
      <div className="flex justify-between my-3">
        <p className="font-bold text-2xl mx-10">What's on your mind?</p>
        <div className="banner_btn-container  mx-10 ">
          <button
            className="lessthan_btn bg-indigo-900 w-10 h-10 text-white font-semibold text-2xl rounded-full mr-2"
            onClick={() => {
              document.getElementById("container").scrollLeft -= 160 * 4;
            }}
          >
            &lt;
          </button>
          <button
            className="greaterthan_btn bg-indigo-900 w-10 h-10 text-white font-semibold text-2xl rounded-full"
            onClick={() => {
              document.getElementById("container").scrollLeft += 160 * 4;
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className="img_mainContainer flex mx-10 overflow-hidden"
        id="container"
      >
        {imgData.map((banner) => {
          return <BannerImage key={banner.id} bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};
