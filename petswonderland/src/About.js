import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/petswonderland.css";
import "react-slideshow-image/dist/styles.css";

const aboutImages = ["/products/aboutImg.jpg"];

const About = () => {
  return (
    <React.Fragment>
      <div>
        <br />
        <br />
        <br />
        <div>
          <img className="aboutImg" src={aboutImages} alt="aboutImages"></img>
        </div>
        <div>
          <br />
          <br />
          <p className="aboutDes">
            PetsWonderland is a pet brand that provides different styles' things
            for your lovly pets. We are also a dedicated team of designers passionate about pets and their distinct personalities.
            <br />
            <br />
            FOR PET LOVERS <br />
            Explore our latest additions to the PetsWonderland product line,
            thoughtfully designed to enhance your pet's daily life. From our
            versatile pet walking accessories and stylish pet wear to our
            functional pet bowls and engaging toys, we have everything to cater
            to your pet's needs. Experience the perfect blend of quality,
            innovation, and style with our new products, ensuring both you and
            your furry friend enjoy every moment together.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
