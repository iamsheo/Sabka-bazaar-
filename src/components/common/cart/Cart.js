import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faTimes,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ cartHandler }) => {
  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  const total = list.itemList.reduce((sum, item) => {
    return sum + item.qty * item.price;
  }, 0);
  const handler = () => {
    cartHandler();
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-conatiner">
        <div className="cart-content">
          <div className="cart-header">
            <div>
              My Cart{" "}
              {list.itemList.length > 0
                ? `(${list.itemList.length} items)`
                : ""}
            </div>
            <div onClick={handler}>
              <FontAwesomeIcon icon={faTimes} color="#fff" />
            </div>
          </div>
          <div class="cart-body">
            {list.itemList.length > 0 ? (
              <>
                <div className="cart-item-list">
                  {list.itemList.map((item) => {
                    return (
                      <div className="cart-item">
                        <div>
                          <img src={`${item.imageURL}`} />
                        </div>
                        <div>
                          <div className="cart-item-title">{item.name}</div>
                          <div className="cart-price-conatiner">
                            <div className="cart-item-price-calc">
                              <FontAwesomeIcon
                                icon={faMinusCircle}
                                color="darkred"
                                size="lg"
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE",
                                    item: { ...item },
                                  })
                                }
                              />
                              <span> {item.qty} </span>
                              <FontAwesomeIcon
                                icon={faPlusCircle}
                                color="darkred"
                                size="lg"
                                onClick={() =>
                                  dispatch({
                                    type: "ADD",
                                    item: { ...item },
                                  })
                                }
                              />
                              <span>X</span>
                              <span>RS {item.price}</span>
                            </div>
                            <div>Rs {item.qty * item.price}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="cart-banner">
                  <div>
                    <img src="/static/images/lowest-price.png" />
                  </div>
                  <div>You won't find it cheaper anywhere</div>
                </div>
              </>
            ) : (
              <div className="cart-no-item">
                <h3>No items in your cart</h3>
                <p>Your favourite items are just a click away</p>
              </div>
            )}
          </div>

          <div className="cart-footer">
            {list.itemList.length > 0 ? (
              <>
                <div>Promo code can be applied on payment page</div>
                <div className="cart-btn">
                  <div className="cart-btn-content">
                    <div>Proceed to Checkout</div>
                    <div>
                      Rs {total} &nbsp;
                      <FontAwesomeIcon icon={faChevronRight} color="#fff" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="cart-shopping-btn">
                <div className="cart-btn-content">
                  <div>Start Shopping</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
