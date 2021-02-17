import React, { useState } from "react";
import useAxios from "axios";
import { useHistory } from 'react-router-dom';
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
    <>
    <div className="content">
      <Container>
      <Row>
        <Col lg="8"> 
          <div className="content">
          <h1 className="d-flex justify-content-center"><u>OVERSITE</u></h1>
          <h2 className="d-flex justify-content-center">The personal goal tracker, with a catch</h2>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col lg="8">
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
              <Button className="btn-fill" color="primary" type="submit" onClick={handleClick}>
                Submit
                </Button>
            </CardFooter>
            </Card>
            <Col md="6">
              <Row>
                <h4>Already have an account?</h4>
                <Button className="btn float-left">Login</Button>
            </Row>
              </Col>
          </Jumbotron>
        </Col>
      </Row>
      
      <Row>
        <Col lg="8"> 
          <div className="content">
          <h2 className="d-flex justify-content-center">Meet your goals, or we'll tell your Mom</h2>
          </div>
        </Col>
      </Row>

      </Container>
      </div>
    </>
  );
}

export default RegisterModal;