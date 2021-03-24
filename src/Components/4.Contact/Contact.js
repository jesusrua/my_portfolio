import React from 'react';
import Styles from './Contact.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
// import emailjs from 'emailjs-com';

function Contact () {

  return(
    <Container fluid className="contact">

      <Row className="text-center">
        <Col className="mt-3">
          <h2>Contact Me</h2>                  
        </Col>
      </Row>

      <Container className="containerContact">

        <Row className="justify-content-center mt-4">
          <Col className="text-center" md={8}>
            <p> Don't hesitate to contact me for more information, for a coffee if you think we could get along (I haven't mentioned that I love to travel, music, nature, ... ) or anything you need from me!</p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4 mb-4">
          <Col md={6}>
            <Form>
              <Form.Group>
                <Form.Label className="formTitle">Subject:</Form.Label>
                <Form.Control type="text" placeholer="SUBJECT"/>
              </Form.Group>
              <Form.Group>
                <Form.Label className="formTitle">Name:</Form.Label>
                <Form.Control type="text" placeholer="NAME"/>
              </Form.Group>
              <Form.Group>
                <Form.Label className="formTitle">Email:</Form.Label>
                <Form.Control type="email" placeholer="EMAIL"/>
              </Form.Group>
              <Form.Group>
                <Form.Label className="formTitle">Message:</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Col className="text-center">
                <Button type="submit">
                  Submit
                </Button>                
              </Col>
            </Form>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col className="text-center">
            <p>Or if it's easier for you, just send me a normal email to <a href="mailto:jesus.rua.pareja@gmail.com" className="linkClass">  jesus.rua.pareja@gmail.com </a> or contact me via <a href="https://www.linkedin.com/in/jesusruapareja/?locale=en_US" target="_blank" rel="noreferrer" className="linkClass">LinkedIn</a>.</p>
            <p>I just thought the form was cool and I needed to fill 100vh 😊</p>
            <p>Cheers! And follow me on:</p>
            <Row>
              <Col>
                <a href="https://www.linkedin.com/in/jesusruapareja/?locale=en_US" target="_blank" rel="noreferrer" className="linkClass"><FontAwesomeIcon className="techLogos m-2" icon={faLinkedin}/></a>
                <a href="https://github.com/jesusrua" target="_blank" rel="noreferrer" className="linkClass"><FontAwesomeIcon className="techLogos m-2" icon={faGithubSquare}/></a>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>

    </Container>
  )
};

export default Contact;