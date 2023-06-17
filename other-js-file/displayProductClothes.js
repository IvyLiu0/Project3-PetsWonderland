import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ClothesItems = (props) => {
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
            onChange={(e) => props.sortprice1(props.clothesrList, e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </label>
      </React.Fragment>

      <br />
      <br />
      {props.clothesList.map((product1) => (
        <ListGroupItem key={product1.id}>
          <h5 className="Desc">
            {product1.desc} {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}{" "}
            <span className="price">${product1.price}</span>
          </h5>
          <img
            src={product1.image}
            alt={product1.desc}
            height="200"
            width="200"
            onClick={() => handleShow(product1)}
          />
          {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <button onClick={() => props.handleIncrease(product1)}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          {" \xa0 "}
          <button onClick={() => props.handleDecrease(product1)}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <span>{product1.value}</span>
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
