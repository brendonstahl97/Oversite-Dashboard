import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import GoalList from '../components/GoalList/GoalList.js';

import {
  chartExample2 // in src/views/Dashboard.js
} from "../variables/charts";
import { Line } from "react-chartjs-2";


const Goals = (props) => {

  return (
    <>
      <div className="content">
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
      </div>
    </>
  );
};

export default Goals;