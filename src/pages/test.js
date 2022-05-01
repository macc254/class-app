import React from "react";
import './about';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  


const Test = () => {
    return (
<Container fluid>
  <Row>   
    <Col>
    <Card style={{ width: '18rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}}>
  <Card.Body className="test">
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card></Col>
  </Row>
</Container>


    );
};

export default Test;

