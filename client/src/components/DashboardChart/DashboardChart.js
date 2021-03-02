import React from "react";
import classNames from "classnames";

// react plugin used to create charts
import { Line } from "react-chartjs-2";

// core components
import { chartExample1 } from "variables/charts.js";

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


export default function DashboardChart(props) {

    const labels = props.goal.goalLog.map(dataObj => dataObj.date);

    const data = props.goal.goalLog.map(dataObj => dataObj.data);

    const chartData = (canvas) => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

        return {
            labels: labels,
            datasets: [
                {
                    label: props.goal.unitType,
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: "#1f8ef1",
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: "#1f8ef1",
                    pointBorderColor: "rgba(255,255,255,0)",
                    pointHoverBackgroundColor: "#1f8ef1",
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: data,
                },
            ],
        };
    };

    return (
        <Card className="card-chart">
            <CardHeader>
                <Row>
                    <Col className="text-left" sm="6">
                        <CardTitle tag="h2">{props.goal.goalName}</CardTitle>
                    </Col>
                    {/* <Col sm="6">
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
                    </Col> */}
                </Row>
            </CardHeader>
            <CardBody>

                <div className="chart-area">
                    {props.goal.goalLog.length > 0 ? (
                        <Line
                            data={chartData}
                            options={chartExample1.options}
                        />
                    ) : (
                            <h3 className="text-center">Add at least one update to the goal to see it here</h3>
                        )}
                </div>
            </CardBody>
        </Card>
    );
};
