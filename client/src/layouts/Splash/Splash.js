import React from "react";


// core components
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import RegisterModal from "components/RegisterModal/RegisterModal";

const Splash = (props) => {
  const mainPanelRef = React.useRef(null);

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper">
            <div className="main-panel" ref={mainPanelRef} data={color}>
              <RegisterModal />
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Splash;
