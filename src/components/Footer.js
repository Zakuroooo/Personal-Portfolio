import { Container, Row, Col } from "react-bootstrap";
import Logo4 from "../assets/img/Logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/whitegithub.png";
import leetcode from "../assets/img/leetcode.png";

export const Footer = () => {
  return (
    <footer className="footer" style={{ padding: "40px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left side with Logo */}
          <Col
            xs={12}
            sm={6}
            className="mb-4 mb-sm-0 d-flex justify-content-center justify-content-sm-start"
          >
            <img src={Logo4} alt="Logo" style={{ maxWidth: "180px" }} />
          </Col>

          {/* Right side with social icons */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mb-2">
              <a
                href="https://www.linkedin.com/in/pranay-sarkar65/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon1}
                  alt="LinkedIn"
                  style={{ width: "28px", margin: "0 10px" }}
                />
              </a>
              <a
                href="https://github.com/Zakuroooo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="GitHub"
                  style={{ width: "28px", margin: "0 10px" }}
                />
              </a>
              <a
                href="https://leetcode.com/u/Zakurooooo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leetcode}
                  alt="LeetCode"
                  style={{ width: "28px", margin: "0 10px" }}
                />
              </a>
            </div>
            <p style={{ marginBottom: "0", fontWeight: 500 }}>
              Made By Pranay Sarkar
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
