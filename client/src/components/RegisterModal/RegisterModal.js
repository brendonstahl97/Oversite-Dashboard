import React, { useState } from "react";
import useAxios from "axios";
import { useHistory } from 'react-router-dom';
import { AvForm, AvField } from "availity-reactstrap-validation";


// reactstrap components
import {
  Button,
  Card,
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
    password: ""
  });

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button click ...');

    useAxios.post('/api/auth/signup', userState)
      .then(res => {
        console.log(res.data);
        if(res.data._id) {
          history.push("/splash/login");
        }
      }
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
                    <AvForm>
                      <Row>
                        <Col className="" md="4">
                          <FormGroup>
                            <label>Username</label>
                            <Input
                              value={userState.userId}
                              placeholder=""
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
                              placeholder=""
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
                              placeholder=""
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
                            <AvField
                              placeholder=""
                              name="username"
                              type="email"
                              value={userState.username}
                              onChange={updateState}
                              validate={{
                                required: true,
                                email: true,
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="" md="6">
                          <FormGroup>
                            <label>Password</label>
                            <AvField
                              placeholder=""
                              value={userState.password}
                              name="password"
                              type="password"
                              onChange={updateState}
                              validate={{
                                required: {
                                  value: true,
                                  errorMessage: "Please enter a password"
                                },
                                pattern: {
                                  value: "^[A-Za-z0-9]+$",
                                  errorMessage:
                                    "Your password must be composed only with letters and numbers"
                                }
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </AvForm>
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