import React from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

import DashboardChart from '../components/DashboardChart/DashboardChart';
import NoGoalsDashboard from '../components/NoGoalsDashboard/NoGoalsDashboard';

const checkGoals = () => {
  if (window.goals) {
    if (window.goals.length > 0) {
      return true;
    };
  };
  return false;
};


function Dashboard(props) {
  if (checkGoals()) {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              {window.goals.map((goal, index) => {
                return (
                  <DashboardChart
                    goal={goal}
                    key={goal._id}
                  />
                );
              })}
              { }
            </Col>
          </Row>
        </div>
      </>
    );

  } else {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <NoGoalsDashboard />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
