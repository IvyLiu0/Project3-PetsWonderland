import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Alldata } from "./data/alldata";
import "./css/petswonderland.css";
import { Link } from "react-router-dom";

function AllProduct() {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setShowImage(item);
  };

  return (
    <div className="productAll">
      <h1>All Product</h1>
      <Container className="productContainer">
        <Row>
          {Alldata.map((data, index) => (
            <Col md={4} key={index}>
              <div className="img-card">
                <Image
                  style={{ width: "300px", height: "350px" }}
                  thumbnail
                  src={data.image}
                  onClick={() => handleShow(data)}
                />
                <h5 className="productDesc">{data.desc}</h5>
                <p className="productPrice">${data.price}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="productBtn">
        <Button className="productButton">
          <Link to="/cartItem" className="productBtnLink">
            Buy Products
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
      </div>
    </div>
  );
}
export default AllProduct;
