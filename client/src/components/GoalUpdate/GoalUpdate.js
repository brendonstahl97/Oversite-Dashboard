import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, Button, Form, Label, Input, CardBody } from 'reactstrap';
import useAxios from 'axios';

const GoalUpdate = (props) => {

    const [goalState, setGoalState] = useState({
        userUuid: "",
        name: "",
        goalType: "",
        completionDate: "",
        data: [],
    });

    const handleClick = (e) => {
        e.preventDefault();
        console.table(goalState);
        console.log('Button click ...');

        useAxios.post('/api/goals/update', {
            data: [
                {
                    value: "1",
                    date: "feb23"
                }
            ]
        }).then((res) => console.log(res));
    };

    const updateState = (e) => {
        setGoalState({
            ...goalState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="content">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4"><legend>Goal Update</legend></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Label for="exampleSelect">Did you finish your goal today???</Label>
                                <Input type="select" name="completed" id="completeSelect" onChange={updateState}>
                                    <option id="yes">Yes</option>
                                    <option id="no">No</option>
                                </Input>
                                <Button onClick={handleClick}> Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );

}

export default GoalUpdate;