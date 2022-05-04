import React, { useState, useEffect }  from 'react';
import './about.css';
import {  Row, Col } from 'react-grid';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'  
import List from './List';
import withListLoading from './withListLoading';



const CommentForm = () => {

    return (
<Container fluid>

  <Row>   
  <Col  sm={2} style={{background: "#18183D", color:"white", overflow: 'hidden',}}>
    <h3>All</h3>
    <Card.Link style={{color: "white"}}href="/student">Courses</Card.Link>   
    <h6>Students</h6>
    <Card.Link style={{color: "white"}}href="/sessions">Sessions</Card.Link> 

 
  </Col>
  <Col sm={10}><h2>| Announcements</h2>
  <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
 <footer>
        <div className='footer'>
          Built with {' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
           by Group 10
        </div>
  </footer>
   
    

    
  </Col>
    
  </Row>
</Container>


    );
};

export default CommentForm;

