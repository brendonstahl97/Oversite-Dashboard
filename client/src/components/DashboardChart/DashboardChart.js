import React, { useState } from "react";
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

// core components
import {
    chartExample1,
} from "variables/charts.js";

export default function DashboardChart(props) {

    const [bigChartData, setbigChartData] = useState("data1");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };

    return (
        <Card className="card-chart">
            <CardHeader>
                <Row>
                    <Col className="text-left" sm="6">
                        {/* <h5 className="card-category">Total Shipments</h5> */}
                        <CardTitle tag="h2">{props.goalName}</CardTitle>
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
    );
};
