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
    goalType: "",
    targetType: "",
    target: "",
    avgPeriod: "",
    completionDate: "",
    description: "",
    habit: undefined,
    consequences: [],
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.table(goalState);
    console.log('Button click ...');

    useAxios.post('/api/goals', goalState).then((res) =>
      console.log(res));
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
                  <Label for="exampleEmail">Goal Name</Label>
                  <Input
                    type="text"
                    name="goal"
                    id="newGoal"
                    placeholder="Be more awesome"
                    onChange={updateState}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Completion Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="completionDate"
                    placeholder="date placeholder"
                    onChange={updateState}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Desciption</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={updateState}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="habit" id="habitSelect" onChange={updateState}>
                    <option id="reduce">Reduce</option>
                    <option id="increase">Increase</option>
                    <option id="repeat">Repeat</option>
                  </Input>
                </FormGroup>
                {/* <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
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
                {/* <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup> */}
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