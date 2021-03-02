import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, Button, Form, Label, Input, CardBody } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Win from '../../utils/Win';
import GoalSelectionOption from '../GoalSelectionOption/GoalSelectionOption';

const GoalUpdate = (props) => {

    const history = useHistory();

    const today = new Date().toLocaleDateString("en-US");

    const [goalState, setGoalState] = useState({
        goalIndex: 0,
        goalDate: today,
        goalData: ""
    });

    const handleClick = (e) => {
        axios.post(`/api/goals/update/${window.goals[goalState.goalIndex]._id}`, goalState)
            .then((res) => {
                Win.updateGoals(history);
            });
    };

    const updateGoalState = (e) => {
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
                                <Label for="goalTypeSelect">Which goal needs an update?</Label>
                                <Input type="select" name="goalIndex" id="goalTypeSelect" onChange={updateGoalState}>
                                    {window.goals.map((goal, index) => {
                                        return <GoalSelectionOption goalName={goal.goalName} goalIndex={index} />
                                    })}
                                </Input>
                                <Label for="goalValueInput">How many {window.goals[goalState.goalIndex].unitType} did you do/use/earn today?</Label>
                                <Input type="number" name="goalData" id="goalValueInput" onChange={updateGoalState} />
                                <Button onClick={handleClick}> Submit</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default GoalUpdate;