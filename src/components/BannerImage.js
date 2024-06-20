import { BANNER_LIST_URL } from "../../utils/constants";

export const BannerImage = (props) => {
  const { imageId, text } = props.bannerContent;
  return (
    <img
      className="banner_img w-[160] h-[160]"
      alt="img"
      src={`${BANNER_LIST_URL}${imageId}`}
    />
    // {/* <p>{text}</p> */}
  );
};
