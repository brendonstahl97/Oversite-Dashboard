import React from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

import DashboardChart from '../components/DashboardChart/DashboardChart';

function Dashboard(props) {
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            {window.goals.map((goal, index) => {
              return(
                <DashboardChart
                  goalName={goal.goalName}
                />
              );
            })}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
