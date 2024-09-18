import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaurav Pal </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently serving as a Project Coordinator at the Cyber Security Research Lab, National Institute of Technology Karnataka (NITK), and previously worked as a Research Software Engineer at the Smart City Research Center, IIIT Hyderabad.
            <br />
            I have  completed Master of Technology (M.Tech) in Electronics & Communication Engineering at Haldia Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Riding Bike
            </li>
            <li className="about-activity">
              <ImPointRight /> HAM Radio (Amateur Radio Operator with Callsign VU3JXG)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "CQ CQ CQ!!! This is VU3JXG calling and Stading by, Over!"{" "}
          </p>
          <footer className="blockquote-footer">VU3JXG</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
