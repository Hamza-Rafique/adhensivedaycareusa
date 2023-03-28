import React from "react";
import { Container, Button } from "react-bootstrap";
import "./HeroSection.css"; // import your custom CSS file

const HeroSection = () => {
  return (
    <Container>
      <div className="circle">
        <h1>Learn with us</h1>
        <Button className="sing" size="lg">
          Sign Up
        </Button>
      </div>
    </Container>
  );
};

export default HeroSection;
