import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import paper2 from "../../Assets/Projects/paper2.jpeg";
import paper1 from "../../Assets/Projects/paper1.jpeg";
import DT from "../../Assets/Projects/DT.jpeg";
import paper3 from "../../Assets/Projects/paper3.jpeg";
import keti from "../../Assets/Projects/keti.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works, Publications and Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DT}
              isBlog={false}
              title="Digital Twin"
              description="Replication of the Physical Water network of KRB Block, IIIT Hyderabad to the Digital Platform with Live Page (with Realtime Updates of the IoT Nodes and Actuation features) and Smilulation Page"
              demoLink="https://drive.google.com/file/d/1KD7eniVc9KzExi9Rp_cfABM2ErV25-4F/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keti}
              isBlog={false}
              title="Joint Winner of Best User Application award at KETI hackathon 2023"
              description="IIITH's Smart City Living Lab team won the best user application award in the Korean Hackathon. 
              The goal of the hackathon was to promote oneM2M to the global developers' community with oneM2M open source.
              A total of 24 university teams across the globe participated in the hackathon with one of them representing IIITH's Smart City Living Lab. 
              Team Sustainables led by Leo J Francis along with Vaibhav Naware, Ushasri Mogadali, Gaurav and Sasidhar Varada worked on solutions for Smart Spaces to control home appliances automatically."
              demoLink="https://blogs.iiit.ac.in/monthly_news/keti-hackathon-2023/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper1}
              isBlog={false}
              title="Scalable and Interoperable Distributed Architecture for IoT in Smart Cities"
              description="This study describes an improved architecture for a distributed and scalable system based on the oneM2M smart city
                            standards. We proposed a multi-layered architecture consisting
                            of a Data Monitoring Layer (DML) which is distributed and
                            oneM2M compliant, a Data Storage Layer (DSL) consisting
                            of temporary and historical data archives, and a Data Enhancement Layer (DEnL) which formats data before storage and the
                            Data Exchange Layer (DEL) which serves as a robust interface
                            where the data clients can securely access the data. We have
                            conducted the performance analysis and provided context on
                            the increase in scalability and load-handling capability in the
                            system."
              demoLink="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10539501"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper2}
              isBlog={false}
              title=""
              description="In this study, we extensively evaluated three prominent
                            IoT middleware platforms, OM2M, ACME, and Mobius,
                            with a focus on metrics such as latency, throughput, and
                            resource utilization. Key findings from our study highlight the
                            importance of careful consideration in architectural design.
                            While modular code adhering to good coding standards is
                            essential for maintainability and codebase organization, our
                            results demonstrate that it does not always guarantee superior
                            performance. Proper parallelism and concurrency management
                            emerge as crucial factors, as evidenced by Mobius consistently
                            outperforming its counterparts."
              demoLink="https://cdn.iiit.ac.in/cdn/smartcitylivinglab.iiit.ac.in/api-media/pdf_files/Exploratory_Study_of_oneM2M-based_Interoperability.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paper3}
              isBlog={false}
              title="Architecting Digital Twin for Smart City Systems: A Case Study"
              description="This paper has presented an architecture for realizing digital twins for smart city systems, focusing on water quality
                            networks. By leveraging advanced sensor technologies and
                            analytics tools, digital twins offer the potential to enhance the
                            efficiency and effectiveness of urban management practices.
                            Although we have focused on one domain, we believe that
                            the process followed and the conceptual architecture can be
                            extended to other domains as well."
              demoLink="https://d197for5662m48.cloudfront.net/documents/publicationstatus/207321/preprint_pdf/0bf637b55c5e1bc760324e986984e2b0.pdf"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
