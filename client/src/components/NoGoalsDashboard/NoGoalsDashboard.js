import React from "react";
import { useHistory } from "react-router-dom";


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";


export default function DashboardChart(props) {

    let history = useHistory();

    function handleClick() {
        history.push("/admin/newgoal");
    }

    return (
        <Card className="card">
            <CardHeader>
                <Row>
                    <Col className="text-left" sm="6">
                        <CardTitle tag="h2">You don't have any goals yet!</CardTitle>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <h3>Click here to create one or we'll tell your mom</h3>
                <Button onClick={handleClick}>Create Goal</Button>
            </CardBody>
        </Card>
    );
};
