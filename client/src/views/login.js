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

export default Login

// ** ORIGINAL CODE WITH INPUT/BUTTON ID'S AND VALUES ** 
// function Login (props) {
//   return (
// <>
// <div className="content">
// <Row>
// <Col md="8">

// <Card>
//     <CardHeader>
//         <CardTitle tag="h4"><legend>Login</legend></CardTitle>
//     </CardHeader>
//     <CardBody>
//         <Form>
//             <FormGroup action="/login" method="POST">
//                 <Label htmlFor="email">Email</Label>
//                 <Input type="email" id="email" name="email" value={userData.email} onChange={handleInputChange} required></Input>
//                 <Label htmlFor="password">Password</Label>
//                 <Input type="password" id="password" name="password" value={userData.password} onChange={handleInputChange} required></Input>
//                 <Button type="submit" onClick={handleFormGroupSubmit}>Submit</Button>
//                 {loggedIn &&
//                     <Button onClick={handleLogout}>Logout</Button>}
//                 {loggedIn &&
//                     <Button onClick={getUser}>GetUser</Button>}
//                 <a href="/register">Register</a>
//                 {loggedIn &&
//                     <h3>Welcome, {currentUser.user.firstName} {currentUser.user.lastName}!</h3>
//                 }
//             </FormGroup>
//         </Form>
//     </CardBody>
// </Card>
// </Col>
// </Row>
// </div>
// </>
//     );
// };
