import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import { Alldata } from "./data/alldata";
import "./css/App.css";
import { Link } from "react-router-dom";

function AllProduct() {
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
            Products
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default AllProduct;
