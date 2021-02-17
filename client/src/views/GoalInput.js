import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardTitle, Button, Form, FormGroup, Label, Input, CardBody } from 'reactstrap';
import useAxios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import GoalUpdate from "../components/GoalUpdate/GoalUpdate.js"


function NewGoal(props) {

  //TODO:  
  //Hook up radio buttons to updateState
  //Send state info to backend
  //Potentially refactor to change component where state lives.  Add Context.

  const [goalState, setGoalState] = useState({
    goalName: "",
    unitType: "",
    goalType: undefined,
    targetType: undefined,
    target: undefined,
    avgPeriod: "",
    completionDate: "",
    consequenceTargetContact: "",
    successMessage: "",
    failureMessage: "",
    goalLog: []
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.table(goalState);
    console.log('Button click ...');

    useAxios.post('/api/goals', { goalState }).then((res) => console.log(res));


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
              <CardTitle tag="h4"><legend>Goal Input</legend></CardTitle>
            </CardHeader>

            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="goalNameInput">Goal Name</Label>
                  <Input
                    type="text"
                    name="goalName"
                    placeholder="Be more awesome"
                    onChange={updateState}
                  />
                </FormGroup>
                <Form inline>
                  <FormGroup>
                    <h4>
                      I want my
                    <Col xs="auto">
                        <Input type="text" name="unitType" id="unitTypeInput" placeholder="Number of Cigarettes" onChange={updateState} />
                      </Col>
                      <Col xs="auto">
                        <Label for="targetTypeSelect">On average or as a total</Label>
                        <Input type="select" name="targetType" id="targetTypeSelect" onChange={updateState}>
                          <option id="average">Average</option>
                          <option id="total">Total</option>
                        </Input>
                      </Col>
                    Per
                    <Col xs="auto">
                        <Label for="averageTypeSelect">Average Period</Label>
                        <Input type="select" name="avgPeriod" id="averageTypeSelect" onChange={updateState}>
                          <option id="day">Day</option>
                          <option id="week">Week</option>
                          <option id="week">Month</option>
                        </Input>
                      </Col>
                    To
                    <Col xs="auto">
                        <Label for="goalTypeSelect">Select</Label>
                        <Input type="select" name="goalType" id="goalTypeSelect" onChange={updateState}>
                          <option id="reduce">Reduce</option>
                          <option id="increase">Increase</option>
                          <option id="repeat">Repeat</option>
                        </Input>
                      </Col>
                    To
                    <Col xs="auto">
                        <Label for="goalTypeSelection">Select</Label>
                        <Input type="text" name="target" id="targetInput" placeholder="1" onChange={updateState} />
                      </Col>
                    By
                    <Col xs="auto">
                        <Label for="dateInput">Completion Date</Label>
                        <Input
                          type="date"
                          name="completionDate"
                          placeholder="date placeholder"
                          onChange={updateState}
                        />
                      </Col>
                    </h4>
                  </FormGroup>
                </Form>
                <FormGroup tag="fieldset">
                  <legend>Consequence</legend>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="consequence1" id="consequence1" />{' '}
                            Message someone if I succeed
                        </Label>
                    <Input type="text" name="phoneNumber1" id="phoneNumber1" placeholder="123-456-7890" />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="consequence2" id="consequence2" />{' '}
                          Message someone if I fail
                        </Label>
                    <Input type="text" name="phoneNumber2" id="phoneNumber2" placeholder="123-456-7890" />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="noConsequence" id="noConsequence" />{' '}
                           No Consequence
                        </Label>
                  </FormGroup>
                </FormGroup>
                <Button onClick={handleClick}> Submit</Button>

              </Form>
            </CardBody>

          </Card>

          <GoalUpdate />

        </Col>

      </Row>

    </div>
  );

}

export default NewGoal;