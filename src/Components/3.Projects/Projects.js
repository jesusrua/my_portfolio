import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './Projects.css';
import {animateScroll as scroll, Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown, faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

function Projects () {

  return(
    <Container fluid className="projects">
      <Row className="text-center">
        <Col className="mt-3">
          <h2>My Projects</h2>                  
        </Col>
      </Row>

      <Container className="containerProjects d-flex justify-content-center align-items-center">
        
        <Row className="justify-content-center">

          <Col md={6}>

            <Card className="card" className="p-2 mt-3 text-center">
              <Card.Img  variant="top" src="./travelFolio.jpg" />
              <Card.Title className="mt-4">MY TRAVEL FOLIO</Card.Title>
              <Card.Body>
              <Card.Text className="mb-5">
                  My Travel Folio has been created to help you to unify all your tickets and files in the same platform, making it easier to organize them during your trips. From scratched to deployed in 10 days.
              </Card.Text>
              <Card.Subtitle className="mb-3">JS, ReactJs, HTML, CSS, Bootstrap, Mongo Atlas, Netlify.</Card.Subtitle>
              <Card.Text>
               <a className="p-2 projectLink" href="https://github.com/My-Travel-Folio/my-travel-folio-FRONT" target="_blank" rel="noreferrer"><FontAwesomeIcon className="techLogos2 m" icon={faGithub}/></a>
               <a className="p-2 projectLink" href="https://my-travel-folio.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="techLogos2" icon={faExternalLinkSquareAlt}/></a>
              </Card.Text>
              </Card.Body>
            </Card>

          </Col>

          <Col md={6} className="align-self-center text-center">

            <Card className="card" className="p-2 mt-3 text-center">
              <Card.Img  variant="top" src="./travelSafe.jpg" />
              <Card.Title className="mt-4">TRAVEL SAFE</Card.Title>
              <Card.Body>
              <Card.Text>
                  Web app created to help the LGBTQ+ community get real information about the conditions they can find in their travel destinations thanks to the user comments about real experiences. From scratched to deployed in 7 days.
              </Card.Text>
              <Card.Subtitle className="mb-3">JS, NodeJs/ExpressJs, HBS, Bootstrap, Mongo Atlas, Heroku.</Card.Subtitle>
              <Card.Text>
               <a className="p-2 projectLink" href="https://github.com/TRAVELsafeProject/TRAVELsafe" target="_blank" rel="noreferrer"><FontAwesomeIcon className="techLogos2 m" icon={faGithub}/></a>
               <a className="p-2 projectLink" href="https://app-travel-safe.herokuapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="techLogos2" icon={faExternalLinkSquareAlt}/></a>
              </Card.Text>
              
              </Card.Body>
            </Card>

          </Col>

          <Col md={6}>

              <Card className="card" className="p-2 mt-3 text-center">
              <Card.Img  variant="top" src="./misoTheCat.jpg" />
              <Card.Title className="mt-4">MISO, THE CAT ADVENTURE</Card.Title>
              <Card.Body>
              <Card.Text>
                Videogame based on the classic 2D platforms games of the 80s. From scratched to deployed in 5 days.
              </Card.Text>
              <Card.Subtitle className="mb-4">Canvas, JavaScript, HTML, CSS. </Card.Subtitle>
              <Card.Text>
               <a className="p-2 projectLink" href="https://github.com/jesusrua/MISO-THE-CAT" target="_blank" rel="noreferrer"><FontAwesomeIcon className="techLogos2 m" icon={faGithub}/></a>
               <a className="p-2 projectLink" href="https://jesusrua.github.io/MISO-THE-CAT/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="techLogos2" icon={faExternalLinkSquareAlt}/></a>
              </Card.Text>
              </Card.Body>
            </Card>

          </Col>



        </Row>
      </Container>

      <Row className="mt-3">
        <Col className="text-right ">
          <FontAwesomeIcon icon={faChevronUp} onClick={()=> scroll.scrollToTop()} />
          <p className="scroll" onClick={()=> scroll.scrollToTop()}>Back to Top</p>                            
        </Col>
        <Col className="text-left ">
          <Link to="contact" smooth={true} duration={1000}><FontAwesomeIcon icon={faChevronDown} /></Link>
          <Link to="contact" smooth={true} duration={1000}><p className="scroll">Contact Me</p></Link>                             
        </Col>
      </Row>

    </Container>
    
  )
};

export default Projects;