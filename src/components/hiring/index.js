import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const HiringComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [ setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>We're Hiring!</h2>
          <h4>JOIN OUR TEAM AND CHANGE LIVES!</h4>
          <p>If you're interested in one of our open positions, start by applying here and attaching your resume.</p>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" onChange={(e) => setResume(e.target.files[0])} />
            </Form.Group>
            <Button type="submit">Submit Application</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default HiringComponent;
