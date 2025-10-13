import { Col, Row, Container } from 'react-bootstrap';
import './landing.css';

function Landing() {
  return (
    <Container fluid className="landing-wrapper d-flex ">
      <Row className="w-100 h-100">
        <Col id="left" lg={5} md={3} sm={2} className="landing-section button-section"></Col>
        <Col lg={6} md={8} sm={9} className="landing-section text-section text-center">
          <h2 className="mb-3">You are the Core of Our Success</h2>
          <p>
            Every package you move, every route you optimize, and every customer you connect with makes you an integral part of this company's mission.
            <br />
            You are a valued member of this team, and your efforts directly contribute to making life easier for people every day—your work truly matters to our consumers.
            <br />
            <em>They are counting on us, and we are counting on you!</em>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
