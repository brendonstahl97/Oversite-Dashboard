import React from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "../components/Login/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";

function Login (props) {
  return (
    <div className="content">
      <Container >
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron >
              <h3 classname="title">
                Login
              </h3>
              <hr />
              <Card>
                <CardBody>
                  <LoginForm />
                </CardBody>
              </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default Login;