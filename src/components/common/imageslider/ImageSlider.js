import { Carousel } from "react-bootstrap";
import "./ImageSlider.css";
const ImageSlider = ({ banners }) => {
  if (!(banners && banners.length)) return <></>;
  return (
    <Carousel className="imageSlider">
      {banners.map((banner) => {
        return (
          <Carousel.Item key={banner.id}>
            <img
              className="d-block w-100"
              src={`${banner.bannerImageUrl}`}
              alt={banner.bannerImageAlt}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
