import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Typical from 'react-typical';
import {Link} from 'react-scroll';
import './Main.css';

function Main () {

  return(
    <Container fluid className="main vertical-center">

      <Container>

        <Row >
          <Col className="main-text">
            <h1>Hi! I'm Jesús Rua:</h1>
            <Typical
            steps={['FullStack Developer', 1000, 'Front-End Developer', 500, 'Back-End Developer', 500]}
            loop={Infinity}
            wrapper="h2"
            className="typicalText"
            />
            <h2>based in Barcelona</h2>
          </Col>
        </Row>

        <Row>
          <Col >
              <Link to="about" smooth={true} duration={1000}><Button className="mr-2 mt-2" variant="light">About Me</Button></Link>
              <Link to="projects" smooth={true} duration={1000}><Button className="mr-2 mt-2" variant="light">My Projects</Button></Link>
              <Link to="contact" smooth={true} duration={1000}><Button className="mt-2" variant="light">Contact Me</Button></Link>
          </Col>          
        </Row>


      </Container> 
      
    </Container>
  )
};

export default Main;