import React, { useState } from "react";
import useAxios from "axios";
import { useHistory } from 'react-router-dom';
import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";
// import logo from './public/react-logo.png';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Jumbotron,
  Container
} from "reactstrap";

const RegisterModal = (props) => {

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    console.table(userState);
    console.log('Button click ...');

    useAxios.post('/api/auth/signup', userState).then(
      history.push("/admin/dashboard")
    );
  };

  const updateState = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="content">
      <Container>
        <Row>
          <Col lg="10">
            <Jumbotron>
              <h3 className="title">Signup</h3>
              <hr />
              <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="" md="4">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            value={userState.userId}
                            placeholder="userId"
                            name="userId"
                            type="text"
                            onChange={updateState}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="" md="4">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            value={userState.firstName}
                            placeholder="firstName"
                            name="firstName"
                            type="text"
                            onChange={updateState}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="" md="4">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            value={userState.lastName}
                            placeholder="lastName"
                            name="lastName"
                            type="text"
                            onChange={updateState}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                          <Input
                            placeholder=""
                            name="username"
                            type="email"
                            value={userState.username}
                            onChange={updateState} />
                        </FormGroup>
                      </Col>
                      <Col className="" md="6">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder=""
                            value={userState.password}
                            name="password"
                            type="password"
                            onChange={updateState}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color='success' type="submit" onClick={handleClick}>
                    Submit
                </Button>
                </CardFooter>
              </Card>
              <Col md="6">
                <Row>
                  <h4>Already have an account?</h4>
                </Row>
                <Row>
                  <Button className="btn float-left" color='success' onClick={() => history.push("/splash/login")}>Login</Button>
                </Row>
              </Col>
            </Jumbotron>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default RegisterModal;