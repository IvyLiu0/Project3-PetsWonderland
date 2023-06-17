import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeashItems = (props) => {
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
            onChange={(e) => props.sortprice2(props.leashList, e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </label>
      </React.Fragment>

      <br />
      <br />
      {props.leashList.map((product2) => (
        <ListGroupItem key={product2.id}>
          <h5 className="Desc">
            {product2.desc} {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}{" "}
            <span className="price">${product2.price}</span>
          </h5>
          <img
            src={product2.image}
            alt={product2.desc}
            height="200"
            width="200"
            onClick={() => handleShow(product2)}
          />
          {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <button onClick={() => props.handleIncrease(product2)}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          {" \xa0 "}
          <button onClick={() => props.handleDecrease(product2)}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
          <span>{product2.value}</span>
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
