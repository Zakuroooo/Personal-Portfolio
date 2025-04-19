import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              GitHub
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Live Site
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
