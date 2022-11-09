import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhargav Vankayalapati </span>
            from <span className="purple"> Dortmund, Germany.</span>
            <br />I am an aspiring Data Scientist with M.Sc in Data Science from TU Dortmund 
            (Technische Universität Dortmund)
            <br />
            <br />
            Some other activities that I love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Motivated to solve problems using Data"{" "}
          </p>
          <footer className="blockquote-footer">Bhargav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
