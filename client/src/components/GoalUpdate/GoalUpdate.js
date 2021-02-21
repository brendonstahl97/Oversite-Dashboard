import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, Button, Form, Label, Input, CardBody } from 'reactstrap';
import useAxios from 'axios';

const GoalUpdate = (props) => {
    var today = new Date();

    console.log(today.toLocaleDateString("en-US"));

    const [goalState, setGoalState] = useState({
        userId: props.userId,
        name: "",
        goalValue: "",
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
                goalState,
                today.toLocaleDateString("en-US")
            ]
        }).then((res) => console.log(res));
    };

    // const handleGetGoals = () => {
    //     useAxios.get(`/api/goals/list/${props.userId}`)
    //         .then(res => {
    //             console.log(res);
    //         });
    // };

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
                                <Label for="goalValueInput">How many units did you accomplish for today's goal?</Label>
                                <Input type="number" name="goalValue" id="goalValueInput" onChange={updateState} />
                                <Button onClick={handleClick}> Submit</Button>
                                {/* <Button onClick={handleGetGoals}>TEST getGoals</Button> */}
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default GoalUpdate;