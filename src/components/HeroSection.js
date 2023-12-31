import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";

function HeroSection() {
  return (
    <Container className="hero-section">
      <Row className="align-items-center my-5">
        {/* Column for Heading */}
        <Col md={6} className="text-center text-md-left">
          <h1 className="display-4 text-center">
            The Ultimate Products with Pleasure
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices pharetra dapibus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Duis tempus, ex ac
            fringilla condimentum, leo ex venenatis sem, et varius dolor ex eget
            ipsum. Sed a tincidunt ipsum. Fusce laoreet tellus enim, sed viverra
            justo tempus eu. Praesent efficitur semper elementum. Aliquam
            scelerisque euismod diam, blandit egestas tellus porta quis. Ut
            finibus elit sed viverra ornare. Cras nec dignissim est. Nunc sem
            eros, convallis ac maximus nec, posuere eget nisi. Aliquam erat
            volutpat. Fusce ut elementum augue.
          </p>
          {/* Add any additional content or buttons here */}
          <Button>See More Info</Button>
        </Col>

        {/* Column for Image */}
        <Col md={6} className="text-center">
          <Image
            src="https://placekitten.com/400/300"
            fluid
            alt="Hero Image"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
