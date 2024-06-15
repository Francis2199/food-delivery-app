import { BANNER_LIST_URL } from "../../utils/constants";

export const BannerImage = (props) => {
  const { imageId, text } = props.bannerContent;
  return (
    <div className="img">
      <img
        width="200"
        height="200"
        alt="img"
        src={`${BANNER_LIST_URL}${imageId}`}
      />
      <p>{text}</p>
    </div>
  );
};
