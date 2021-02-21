import React, { useState } from "react";
import axios from "axios";
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
  Row,
  Col,
  Jumbotron,
  Container
} from "reactstrap";


const Login = (props) => {

  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    console.log('Button click ...');

    axios.post('/api/auth/login', userState)
      .then(res => {
        if (res.data) {
          //assignment of userdata to window object on sucessful login
          window.user = res.data.user;
          console.log("LOGIN USER DATA:", window.user);

          const data = axios.get(`/api/goals/list/${res.data.user._id}`);
  
          data.then(res => {
            const goals = res.data;
            window.goals = goals;
            console.log("LOGIN GOALS:", window.goals);

            history.push("/admin/dashboard");
          });
        };
      });
  };


  const updateState = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };


  return (
    <>
      <div class="content">
        <Container>
          <Row>
            <Col lg="10">
              <Jumbotron>
                <h3 className="title">Login</h3>
                <hr />
                <Card>
                  <CardBody>
                    <Form>
                      <AvForm>
                        <Row>
                          <Col className="" md="6">
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Email address
                              </label>
                              <AvField
                                placeholder=""
                                name="email"
                                type="email"
                                value={userState.username}
                                onChange={updateState}
                                validate={{
                                  required: true,
                                  email: true,
                                }} />
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
                                      "Please enter a valid password"
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
                    <h4>Don't have an account?</h4>
                  </Row>
                  <Row>
                    <Button className="btn float-left" color='success' onClick={() => history.push("/splash/register")}>Register</Button>
                  </Row>
                </Col>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;

