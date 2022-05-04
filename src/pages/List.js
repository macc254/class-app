import React from 'react';
import { Container, ModalFooter, ModalHeader, ModalBody, Modal } from 'react-bootstrap';
import './about.css';
import {  Row, Col } from 'react-grid';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import CommentForm from "react-comment-form";




const List = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const { announcements } = props;
  if (!announcements || announcements.length === 0) return <p>No Announcements, sorry</p>;
  return (
    <Container fluid>
    <h2 className='list-head'>Available Announcements</h2>
      {announcements.map((announcements) => {
        return (
  <Row>
   <Col>
    <Card style={{ width: '13rem',borderRadius: '15px', backgroundColor: "#E1E4F2"}} key={announcements.id} className='list'>
    <Card.Body className="test">
    <Card.Title  className='repo-text'>{announcements.title}</Card.Title>
    <Card.Text className='repo-description'>{announcements.message}
    </Card.Text>        
    <Card.Subtitle className="mb-2 text-muted">Posted by: {announcements.user}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Posted On: {announcements.date_created}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">Updated On: {announcements.date_updated}</Card.Subtitle>

    
  <style type="text/css">
    {`
    .btn-flat {
      background-color: #18183D;
      color: white;
    }

    .btn-sm {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button  href  = "/commentform"variant="flat" size="sm">
    Comment
  </Button>
  <>
      <Button onClick={showModal} variant="flat" size="sm">
    Comment
  </Button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Title-dummy data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </>

  

 
</Card.Body>
    </Card>
    </Col>
    </Row>
          
        );
      })}
          </Container>
  );
};
export default List;