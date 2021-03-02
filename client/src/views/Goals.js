import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import GoalList from '../components/GoalList/GoalList.js';
import GoalUpdate from "../components/GoalUpdate/GoalUpdate.js";
import NoGoalsDashboard from "../components/NoGoalsDashboard/NoGoalsDashboard";

const Goals = (props) => {

  return (
    <>
      <div className="content">
        {window.goals.length > 0 ? (
          <>
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Goals List</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <GoalList />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <GoalUpdate />
              </Col>
            </Row>
          </>
        ) : (
          <NoGoalsDashboard />
        )
        }
      </div>
    </>
  );
};

export default Goals;