import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import f1race from "../../Assets/Projects/F1Analysis.PNG";
import twml from "../../Assets/Projects/trustworthyML.PNG";
import cyclegan from "../../Assets/Projects/cyclegan.PNG";
import pallet from "../../Assets/Projects/pallet.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1race}
              isBlog={false}
              title="Sports article - Data Analysis"
              description="Analysis of effect of rain on viewer engagement in F1 races. Collected on-air viewership data and data from youtube and twitter for F1 races, The sentiments of viewers are calculated based on the tweets and
              youtube comments using CoreNLP, Built visualizations to demonstrate the influence of various attributes on
              viewer engagement, Created a sports article along with a journalist which
              is published in a sports magazine (Kurt.digital)."
              ghLink="https://github.com/bhargav-ds1/MototSportAnalysis-F1Race"
              demoLink="http://kurt.digital/2022/04/01/formel-1-mythos-regen-sind-regenrennen-wirklich-spannender/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twml}
              isBlog={false}
              title="Case-study (Trustworthy machine learning methods for anomaly detection)"
              description="Case study to enable domain experts to interpret the working of an
              anomaly detection system. Anomaly detection in time series data using autoencoders."
              ghLink="https://github.com/bhargav-ds1/CaseStudy2021-bh"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyclegan}
              isBlog={false}
              title="Research in Generation of artificial image dataset using StyleGAN,
              cycleGAN."
              description="On the Applicability of Synthetic Data for Re-Identification in Warehousing Logistics.
              This work is part of the project Silicon Economy Logistics Ecosystem which is funded by the German Federal Ministry of Transport and Digital Infrastructure."
              ghLink="https://github.com/bhargav-ds1/GAN_data_for_Re-ID-bh"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pallet}
              isBlog={false}
              title="Application of re-identification on EPAL pallet block images"
              description="Re-identification is performed by training the PCB network on the pallet images and using the network to extract feature vectors for each pallet block. Matching of features is done by searching for nearest neighbours based on a trained faiss (Facebook AI Similarity Search) index."
              ghLink="https://github.com/bhargav-ds1/naturident"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
