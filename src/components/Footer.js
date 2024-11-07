import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github.png";
import leetcode from "../assets/img/leetcode.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pranay-sarkar65/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Zakuroooo">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://leetcode.com/u/Zakurooooo/">
                <img src={leetcode} alt="Icon" />
              </a>
            </div>
            <p>Made By Pranay Sarkar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
