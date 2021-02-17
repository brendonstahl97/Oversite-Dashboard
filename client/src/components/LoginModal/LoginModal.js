import React, { useState } from "react";
import useAxios from "axios";
import { useHistory } from 'react-router-dom';

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
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();

    console.table(userState);
    console.log('Button click ...');

    useAxios.post('/api/auth/login', userState);
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
                <Row>
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
                <h4>Don't have an account?</h4>
              </Row>
              <Row>
                <Button className="btn float-left" onClick={() => history.push("/splash/register")}>Register</Button>
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

export default RegisterModal;