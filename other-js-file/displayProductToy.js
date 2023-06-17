import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToyItems = (props) => {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setShowImage(item);
  };

  return (
    <ListGroup className="ListGroup">
      <React.Fragment>
        <label className="sort">
          Sort Price By: {" \xa0\xa0 "}
          <select
            onChange={(e) => props.sortprice3(props.toyList, e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </label>
      </React.Fragment>

      <br />
      <br />
      {props.toyList.map((product3) => (
        <ListGroupItem key={product3.id}>
          <h5 className="Desc">
            {product3.desc} {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}{" "}
            <span className="price">${product3.price}</span>
          </h5>
          <img
            src={product3.image}
            alt={product3.desc}
            height="200"
            width="200"
            onClick={() => handleShow(product3)}
          />
          {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <button onClick={() => props.handleIncrease(product3)}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          {" \xa0 "}
          <button onClick={() => props.handleDecrease(product3)}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <span>{product3.value}</span>
          quantity
        </ListGroupItem>
      ))}

      <Button variant="dark">
        {" "}
        <Link to="/allproducts" className="productButton">
          Back to All Products
        </Link>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {showImage.desc}
            <span className="price">${showImage.price}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImage.image}
            width="350"
            alt={showImage.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImage.rating}/5
          </p>
        </Modal.Body>
      </Modal>
    </ListGroup>
  );
};
