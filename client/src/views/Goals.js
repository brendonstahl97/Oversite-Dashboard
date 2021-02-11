import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table} from "reactstrap";
import { createShorthandPropertyAssignment } from 'typescript';
import {
    chartExample1, // in src/views/Dashboard.js
    chartExample2, // in src/views/Dashboard.js
    chartExample3, // in src/views/Dashboard.js
    chartExample4, // in src/views/Dashboard.js
  } from "../variables/charts";
  import { Line, Bar } from "react-chartjs-2";


const Goals = (props) => {

    return (
<>
<div className="content">
    <Row>
        <Col>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Goals</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-check-2 text-success" /> 5
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
        </Col>
    </Row>

    <Row>
    <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Goals List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Habit</th>
                      <th className="text-center">Completion Date</th>
                    </tr>
                  </thead>
                  <tbody>
                      {/* <tr>
                          <td></td>
                      </tr> */}
                    <tr>
                      <td>Quit Smoking</td>
                      <td>Stop smoking by April</td>
                      <td>Reduce</td>
                      <td className="text-center">4/1/21</td>
                    </tr>
                    <tr>
                      <td>Push-ups</td>
                      <td>Do 25 push ups every day</td>
                      <td>Repeat</td>
                      <td className="text-center">12/31/21</td>
                    </tr>
                    <tr>
                      <td>Learn ReactJs</td>
                      <td>One React JS lesson each day for one month</td>
                      <td>Repeat</td>
                      <td className="text-center">3/31/21</td>
                    </tr>
                    <tr>
                      <td>Eat Healthier</td>
                      <td>Eat less McDonalds every week</td>
                      <td>Reduce</td>
                      <td className="text-center">6/1/21</td>
                    </tr>
                    <tr>
                      <td>Gym</td>
                      <td>Go to the gym 3 times each week</td>
                      <td>Repeat</td>
                      <td className="text-center">12/31/21</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
    </Row>
</div>
</>
    );
};

export default Goals;