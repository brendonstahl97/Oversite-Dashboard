import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


// core components
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import RegisterModal from "components/RegisterModal/RegisterModal";
import LoginModal from "components/LoginModal/LoginModal";

// reactstrap components
import { Row, Col, Container } from "reactstrap";
// import mom from "../client/public/angrymom.jpg"

const Splash = (props) => {
  const mainPanelRef = React.useRef(null);
  const imgStyle = {
    maxHeight: 175,
  };
  const hStyle = {
    textAlign: "center"
  }

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper">
            <div className="main-panel" ref={mainPanelRef} data={color}>
              <div className="content">
                <Container>
                  <Row>
                    <Col lg="10">
                      <div className="photo d-flex justify-content-center">
                        <img
                          alt="Angry Mom cartoon"
                          src={require("assets/img/angrymom.png").default}
                          style={imgStyle}
                        />
                      </div>
                      <br></br>
                      <div className="content">
                        <h1 style={hStyle}><u>OVERSITE</u></h1>
                        <h2 style={hStyle}>The personal goal tracker, with a catch</h2>
                      </div>
                    </Col>
                  </Row>
                  <Switch>
                    <Route
                      exact path="/splash/login"
                      component={LoginModal}
                    >
                    </Route>
                    <Route
                      exact path="/splash/register"
                      component={RegisterModal}>
                    </Route>
                    <Redirect from="*" to="/splash/login" />
                  </Switch>
                  <Row>
                    <Col lg="10">
                      <div className="content">
                        <h2 style={hStyle}>Meet your goals, or we tell your Mom</h2>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Splash;
