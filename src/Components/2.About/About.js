import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './About.css';
import {animateScroll as scroll, Link} from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faCss3Alt, faJsSquare, faNodeJs, faReact, faGithub, faBootstrap, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
// import herokuIcon from '@iconify-icons/cib/heroku';
// import mongodbIcon from '@iconify-icons/cib/mongodb';
import netlifyIcon from '@iconify-icons/cib/netlify';
import postmanIcon from '@iconify-icons/cib/postman';

function About () {

  return(

    <Container fluid className="about">

        <Row className="text-center">
          <Col className="mt-3">
            <h2>About Me</h2>                  
          </Col>
        </Row>
        
       <Container className="containerAbout vertical-center">       
        
          <Row className="text-center align-items-center">

            <Col xs={12} md={8} lg={8} className="descriptionCol">
              <Row>
                <Col className="text-justify">
                  <p>
                  Hi there! I'm <b>Jesús</b>, a <b>Full Stack Web Developer</b> based in Barcelona with <b>communications background</b>, until I decided to change it through Ironhack, pushed by the desire of expanding my knowledge to the sector I consider the future.
                  </p>
                  <p>
                  I consider myself a <b>creative</b> person with an <b>analytical</b> and <b>solving-problem mind</b>. Used to work under preassure and love being member of a team.
                  </p>

                  <p className="paragraphLine"></p>

                  <h5 className="text-center mt-4 mb-4">TECHNOLOGIES</h5>

                  <Row className="mb-3 mx-auto techRows">

                  
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faHtml5} ></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faCss3Alt} ></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faJsSquare} ></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faNodeJs} ></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faReact} ></FontAwesomeIcon>
                    </Col>
                  </Row>

                  <Row className="mx-auto techRows">
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faBootstrap} ></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faGitSquare} ></FontAwesomeIcon>
                    </Col>
                    <Col>
                        <FontAwesomeIcon className="techLogos" icon={faGithub} ></FontAwesomeIcon>
                    </Col>
    
                    <Col>
                        <Icon className="techLogos" icon={postmanIcon} ></Icon>
                    </Col>  
                    <Col>
                        <Icon className="techLogos" icon={netlifyIcon} ></Icon>
                    </Col>                           
                  </Row>
                  
                  <Row className="mt-4 text-center">
                    <Col>
                        <p><b>ExpressJS</b>, <b>Bulma</b>, <b>Handlebars</b> and more.</p>
                    </Col>
                  </Row>

                  <p className="paragraphLine"></p>

                  <p className="text-center">If you want to know <b>more about me</b>, check my <a href="https://www.linkedin.com/in/jesusruapareja/?locale=en_US"  target="_blank" rel="noreferrer" className="linkClassAbout">Linkedin</a> profile or download  <a href="./CV_JESUSRUA_ENGLISH.pdf" download="JESUS_RUA_CV_ENSGLISH" className="linkClassAbout">my resume</a>.</p>

                </Col>
              </Row>
            </Col>

            
            <Col>
              <Row>
                <Col>
                  <img src="./my-picture.jpg" alt="jesusrua" id="my-picture"/>
                </Col>
              </Row>
            </Col> 

          </Row>        
             
      </Container>

      <Row className="mt-3">
        <Col className="text-right ">
          <FontAwesomeIcon icon={faChevronUp} onClick={()=> scroll.scrollToTop()} />
          <p className="scroll" onClick={()=> scroll.scrollToTop()}>Back to Top</p>                            
        </Col>
        <Col className="text-left ">
          <Link to="projects" smooth={true} duration={1000}><FontAwesomeIcon icon={faChevronDown} /></Link>
          <Link to="projects" smooth={true} duration={1000}><p className="scroll">My Projects</p></Link>                             
        </Col>
      </Row>

    </Container>
  )
};

export default About;