import React, { useState } from "react";
import useAxios from "axios";

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
} from "reactstrap";

const RegisterModal = (props) => {

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    username: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    console.table(userState);
    console.log('Button click ...');

    useAxios.post('/api/auth/signup', userState).then((res) => console.log(res));


  };

  const updateState = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value
    });
  };


  return (
    <>
      <Row>
        <Col md="8">
          <Card>
            <CardHeader>
              <h5 className="title">Signup</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="px-md-1" md="3">
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
                  <Col className="px-md-1" md="3">
                    <FormGroup>
                      <label>first Name</label>
                      <Input
                        value={userState.firstName}
                        placeholder="firstName"
                        name="firstName"
                        type="text"
                        onChange={updateState}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="3">
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
                  <Col className="pl-md-1" md="4">
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
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
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
        </Col>
      </Row>
    </>
  );
}

export default RegisterModal;