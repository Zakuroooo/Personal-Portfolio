import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import jinwoshadow from "../assets/img/Jinwoshadow.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Validate inputs
    const namePattern = /^[a-zA-Z]+$/;
    const phonePattern = /^[0-9]+$/;

    if (!namePattern.test(formDetails.firstName)) {
      setStatus({
        success: false,
        message: "First name should contain only letters.",
      });
      setButtonText("Send");
      return;
    }

    if (!namePattern.test(formDetails.lastName)) {
      setStatus({
        success: false,
        message: "Last name should contain only letters.",
      });
      setButtonText("Send");
      return;
    }

    if (!phonePattern.test(formDetails.phone)) {
      setStatus({
        success: false,
        message: "Phone number should contain only numbers.",
      });
      setButtonText("Send");
      return;
    }

    // Google Form URL and query parameters
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScr-EofTbywekJTLthXW9KyN5TNEei1mlhc0wAQwqwyogVp9Q/formResponse";

    const queryParams = new URLSearchParams({
      "entry.1045906621": formDetails.firstName, // First Name
      "entry.53956073": formDetails.lastName, // Last Name
      "entry.2045422949": formDetails.email, // Email
      "entry.494248953": formDetails.phone, // Phone
      "entry.1194890540": formDetails.message, // Message
    });

    try {
      const response = await fetch(`${formUrl}?${queryParams.toString()}`, {
        method: "GET",
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setButtonText("Sent"); // Update button text to "Sent"
        setTimeout(() => setButtonText("Send"), 5000); // Revert button text after 3 seconds
        setFormDetails(formInitialDetails); //
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      console.error(error);
      setStatus({
        success: false,
        message: "",
      });
    } finally {
      if (buttonText !== "Sent") setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  style={{ width: "20rem" }}
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={jinwoshadow}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-2">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-2">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-2">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-2">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-2">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
