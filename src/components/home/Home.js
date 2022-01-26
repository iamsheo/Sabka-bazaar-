import { useEffect, useState } from "react";
import ImageSlider from "../common/imageslider";
import Banner from "../common/banner";
import axios from "axios";
const Home = () => {
  const [banners, setBanners] = useState();
  const [categories, setCategories] = useState();
  const getBanners = async () => {
    axios.get("http://localhost:5000/banners").then((res) => {
      const temp = res.data
        .filter((item) => item.isActive)
        .sort((item1, item2) => item1.order - item2.order);
      setBanners(temp);
    });
  };
  const getCategories = async () => {
    axios.get("http://localhost:5000/categories").then((res) => {
      const temp = res.data
        .filter((item) => item.enabled)
        .sort((item1, item2) => item1.order - item2.order);
      setCategories(temp);
    });
  };
  useEffect(() => {
    getBanners();
    getCategories();
  }, []);

  const getBannerDetails = (
    title,
    subTitle,
    btntext,
    btnHandler = () => {}
  ) => {
    return (
      <div className="description">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <button>{btntext}</button>
      </div>
    );
  };
  const getBannerImage = (url) => {
    return (
      <div className="img-container">
        <img src={`${url}`} />
      </div>
    );
  };
  return (
    <>
      <ImageSlider banners={banners} />
      {categories &&
        categories.length &&
        categories.map((categorie, index) => {
          const { imageUrl, name, description, key } = categorie;
          return (
            <Banner key={key}>
              {index % 2 != 0
                ? getBannerDetails(name, description, `Explore ${key}`)
                : getBannerImage(imageUrl)}
              {index % 2 != 0
                ? getBannerImage(imageUrl)
                : getBannerDetails(name, description, `Explore ${key}`)}
            </Banner>
          );
        })}
    </>
  );
};

export default Home;
