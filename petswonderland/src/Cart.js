import { ListGroup, ListGroupItem } from "reactstrap";
import "./css/petswonderland.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export const Cart = (props) => {
  const totalvalue = props.allList
    .map((item) => item.value)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="Lite">
      <h3 className="CartItems">Your cart items</h3>
      {totalvalue > 0 && (
        <div>
          <ListGroup className="Lite">
            {props.allList
              .filter((itemlist) => itemlist.value > 0)
              .map((itemlist) => (
                <ListGroupItem key={itemlist.id}>
                  <div>
                    <img
                      className="CartImage"
                      src={itemlist.image}
                      alt={itemlist.desc}
                      height="250"
                      width="200"
                    />
                    <h5 className="CartItem">
                      {itemlist.desc}
                      {
                        " \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "
                      }
                      Quantity: {itemlist.value}
                    </h5>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
          <br />
          <Link to="/signin">
            <Button className="btn CheckOut">Check Out</Button>
          </Link>
        </div>
      )}
      {totalvalue === 0 && (
        <div>
          <h4 className="Contiue">There are 0 items in your cart.</h4>
          <Link to="/cartItem">
            <button className="btn Contiue1">Continue Shop</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
