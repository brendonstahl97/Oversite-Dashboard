// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // import { getUser, userData, handleInputChange, handleFormGroupSubmit, loggedIn, 
    
// //   } from "../server/controllers/authController.js";
// // reactstrap components
// import {
//   Button,
//   ButtonGroup,
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   Label,
//   Form, 
//   FormGroup,
//   FormGroupGroup,
//   Input,
//   Table,
//   Row,
//   Col,
//   UncontrolledTooltip,
// } from "reactstrap";



import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "../components/Login/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/css/black-dashboard-react.css";

function Login (props) {
  return (
    <div className="content">
      <Container >
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron >
              <h3>
                <u>Login</u>
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
}

// ReactDOM.render(<App />, document.getElementById("root"));


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

export default Login