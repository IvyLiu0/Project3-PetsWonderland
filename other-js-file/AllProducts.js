import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "react-slideshow-image/dist/styles.css";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const productImages = [
  "/products/bowl1.jpg",
  "/products/clothes1.jpg",
  "/products/leash1.jpg",
  "/products/toy1.jpg",
];

export const AllProducts = () => {
  return (
    <React.Fragment>
      <br />
      <br />
      <div className="CardProduct">
        <CardGroup className="productCard">
          <Card style={{ marginBottom: "20px" }} className="Card">
            <Card.Img variant="top" src={productImages[0]} />
            <Card.Body>
              <Card.Title>Bowls</Card.Title>
            </Card.Body>
            <Button variant="dark">
              <Link to="/bowls" className="productButton">
                Products
              </Link>
            </Button>
          </Card>
          <Card
            style={{ marginLeft: "20px", marginBottom: "20px" }}
            className="Card"
          >
            <Card.Img variant="top" src={productImages[1]} />
            <Card.Body>
              <Card.Title>Clothes</Card.Title>
            </Card.Body>
            <Button variant="dark">
              <Link to="/clothes" className="productButton">
                Products
              </Link>
            </Button>
          </Card>
        </CardGroup>

        <CardGroup className="productCard">
          <Card className="Card">
            <Card.Img variant="top" src={productImages[2]} />
            <Card.Body>
              <Card.Title>Leash</Card.Title>
            </Card.Body>
            <Button variant="dark">
              <Link to="/leash" className="productButton">
                Products
              </Link>
            </Button>
          </Card>
          <Card style={{ marginLeft: "20px" }} className="Card">
            <Card.Img variant="top" src={productImages[3]} />
            <Card.Body>
              <Card.Title>Toy</Card.Title>
            </Card.Body>
            <Button variant="dark">
              <Link to="/toy" className="productButton">
                Products
              </Link>
            </Button>
          </Card>
        </CardGroup>
      </div>
    </React.Fragment>
  );
};
