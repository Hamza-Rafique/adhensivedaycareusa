import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Reviews = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(http://img1.wsimg.com/isteam/stock/7727/:/rs=w:3070,m)`,
        backgroundSize: 'cover',
        height: '60vh'
      }}
    >
      <Container>
          <h1 className='heading'> Reviews</h1>
        <Row>
          <Col xs={12} md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Great school!</Card.Title>
                <Card.Text>
                  My child has been attending this school for the past year and we couldn't be happier with the education she's receiving. The teachers are knowledgeable and caring, and the curriculum is challenging but not overwhelming.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Highly recommended</Card.Title>
                <Card.Text>
                  We recently moved to the area and were looking for a good school for our kids. We found this school and it has exceeded our expectations. The staff is friendly and helpful, and our kids are thriving academically and socially.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
