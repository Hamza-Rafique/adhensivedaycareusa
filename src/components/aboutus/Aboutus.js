import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center heading-about">About Us</h2>
            <div className="para">
              <h2 className="sub-heading">DEDICATED EDUCATORS</h2>
              <p className="text-center pargrah">
                Our classes are taught by dedicated and experienced educators.
                Using proven teaching strategies, they make sure that every
                student finds a path to success.
              </p>
            </div>
            <div className="para">
              <h2 className="sub-heading secound"> FIRST-RATE COURSE OFFERINGS </h2>
              <p className="text-center pargrah">
                We embrace a learning environment that will prepare you for the
                path ahead. Our classes incorporate traditional learning styles
                as well as hands-on experiences.
              </p>
            </div>
            <div className="para secound">
            
            <h2 className="sub-heading">  OUR MISSION </h2>
              <p className="text-center pargrah">
              Your success is our priority. To support our inclusive community,
              we provide a personal approach, tailoring learning methods to each
              student's needs.
            </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
