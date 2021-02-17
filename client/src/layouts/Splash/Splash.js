import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";


// core components
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import RegisterModal from "components/RegisterModal/RegisterModal";
import LoginModal from "components/LoginModal/LoginModal";

const Splash = (props) => {
  const mainPanelRef = React.useRef(null);

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper">
            <div className="main-panel" ref={mainPanelRef} data={color}>
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
                <Redirect from="*" to="/splash/register" />
              </Switch>

            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Splash;
