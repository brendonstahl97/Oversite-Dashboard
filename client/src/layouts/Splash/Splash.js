import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";


// core components
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import RegisterModal from "components/RegisterModal/RegisterModal";
import LoginModal from "components/LoginModal/LoginModal";

// reactstrap components
import { Row, Col, Container } from "reactstrap";

const Splash = (props) => {
  const mainPanelRef = React.useRef(null);

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
                    <div className="content">
                      <h1 className="d-flex justify-content-center"><u>OVERSITE</u></h1>
                      <h2 className="d-flex justify-content-center">The personal goal tracker, with a catch</h2>
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
                      <h2 className="d-flex justify-content-center">Meet your goals, or we'll tell your Mom</h2>
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
