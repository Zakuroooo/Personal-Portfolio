import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import relianceimg from "../assets/img/reliance.png";
import chatimg from "../assets/img/chatapp.png";
import twoimg from "../assets/img/2048.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Reliance Digital Clone",
      description: "It's a Clone of Reliance Digital Website done by me.",
      imgUrl: relianceimg,
      url: "https://reliance-digital-clone-six.vercel.app/",
      github: "https://github.com/Zakuroooo/reliance-digital-clone",
    },
    {
      title: "RealTime Chat Application",
      description:
        "It's a real time chat application where you can talk in real time.",
      imgUrl: chatimg,
      url: "https://chatapp-sable-psi.vercel.app/",
      github: "https://github.com/Zakuroooo/ChatApp",
    },
    {
      title: "2048 Game",
      description: "It's a 2048 popular tile game.",
      imgUrl: twoimg,
      url: "https://zakuroooo.github.io/Game-2048/",
      github: "https://github.com/Zakuroooo/Game-2048",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have created projects with HTML, CSS, JavaScript, and
                    React, focusing on responsive design and interactive user
                    experiences. These projects showcase my growing skills in
                    frontend development and passion for quality web
                    applications.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Projects will be added soon.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Projects will be added soon.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
