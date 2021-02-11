/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    {/* <h5 className="card-category">Total Shipments</h5> */}
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Days
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Weeks
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Months
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Goals</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-trophy text-info" /> 5
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
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-primary" />{" "}
                  3
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-check-2 text-success" /> 2
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card >
            <CardHeader>
                <CardTitle tag="h4">Oustanding Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                  <Table className="tablesorter" responsive>
                  {/* <thead className="text-primary">
                    <tr>
                      <th>Task Name</th>
                      <th className="text-right">Due Date</th>
                    </tr>
                  </thead> */}
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Do 25 push ups every day</td>
                        <td className="text-center">2/10/21</td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Eat less McDonalds every week</td>
                        <td className="text-center">2/10/21</td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>Stop smoking by April</td>
                        <td className="text-center">2/10/21</td>
                      </tr>
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Completed Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Goal Name</th>
                      <th className="text-center">Date Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gym</td>
                      <td className="text-center">2/10/21</td>
                    </tr>
                    <tr>
                      <td>Learn ReactJs</td>
                      <td className="text-center">2/10/21</td>
                    </tr>
                    <tr>
                      <td>Quit Smoking</td>
                      <td className="text-center">2/10/21</td>
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
}

export default Dashboard;
