import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
const Products = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const getCategories = async () => {
    axios.get("http://localhost:5000/categories").then((res) => {
      const temp = res.data
        .filter((item) => item.enabled)
        .sort((item1, item2) => item1.order - item2.order);
      setCategories(temp);
    });
  };
  const getProducts = async () => {
    axios.get("http://localhost:5000/products").then((res) => {
      const temp = res.data;
      setProducts(temp);
    });
  };
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProductList = () => {
    let list = products;
    if (id) {
      list = list.filter((item) => item.category === id);
    }
    return list.map((product) => {
      return (
        <div key={product.id} className="product-container">
          <div className="effect8">
            <p className="title">{product.name}</p>
            <div className="wrapper">
              <div>
                <img src={`${product.imageURL}`} />
              </div>
              <div className="product-description">{product.description}</div>
            </div>
            <div className="product-price">
              <div>
                <div className="price-tag">MRP Rs.{product.price}</div>
              </div>
              <div>
                <button
                  className="buy-now"
                  onClick={() =>
                    dispatch({
                      type: "ADD",
                      item: { ...product },
                    })
                  }
                >
                  Buy Now
                  <span className="price-desc"> @ Rs.{product.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="products-container">
      <div className="side-menu">
        <ul>
          {categories &&
            categories.map((cat) => {
              return (
                <NavLink exact="true" to={`/products/${cat.id}`}>
                  {cat.name}
                </NavLink>
              );
            })}
        </ul>
      </div>
      <Accordion className="nav-menu">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {categories && categories[0].name}
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              {categories &&
                categories.map((cat) => {
                  return (
                    <NavLink exact="true" to={`/products/${cat.id}`}>
                      {cat.name}
                    </NavLink>
                  );
                })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="products-list">{products && getProductList()}</div>
    </div>
  );
};

export default Products;
