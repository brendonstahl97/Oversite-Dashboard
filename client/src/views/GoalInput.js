import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardTitle, Button, Form, FormGroup, Label, Input, Alert, CardBody } from 'reactstrap';
import axios from 'axios';


import GoalUpdate from "../components/GoalUpdate/GoalUpdate.js";


function NewGoal(props) {

  const history = useHistory();

  //alert
  const [visible, setVisible] = useState(false);

  //data form
  const [goalState, setGoalState] = useState({
    userId: "",
    goalName: "",
    unitType: "",
    goalType: "Reduce",
    targetType: "Average",
    target: 0,
    avgPeriod: "Day",
    completionDate: "",
    consequenceTargetContact: "",
    successMessage: "",
    failureMessage: "",
    goalLog: []
  });

  useEffect(() => {
    setGoalState({
      ...goalState,
      userId: window.user._id
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    setGoalState({
      ...goalState,
      userId: window.user.id
    });

    let validate = Object.values(goalState);
    validate.splice(validate.length - 1);
    console.log(validate)

    //Check if a field is empty, throw alert if true.
    if (validate.includes("")) {
      //throw alert
      setVisible(true);
    } else {
      axios.post('/api/goals', goalState).then((res) => {

        const data = axios.get(`/api/goals/list/${window.user._id}`);

        data.then(res => {
          const goals = res.data;
          window.goals = goals;
          console.log("LOGIN GOALS:", window.goals);

          history.push("/admin/dashboard");
        });
      });
    };
  };

  const updateState = (e) => {
    setGoalState({
      ...goalState,
      [e.target.name]: e.target.value
    });
  };



  const onDismiss = () => setVisible(false);


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
                <FormGroup>
                  <h4>
                    I want my
                    <Col xs="auto">
                      <Label for="unitTypeInput">Unit</Label>
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
                      <Label for="goalTypeSelection">Target Units per Period</Label>
                      <Input type="number" name="target" id="targetInput" placeholder="1" onChange={updateState} />
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


                    <Label for="consequenceTargetContact">Contact Email</Label>
                    <Input
                      type="email"
                      name="consequenceTargetContact"
                      placeholder="MyMom@MyMomsEmail.com"
                      onChange={updateState}
                    />

                    <Label for="successMessage">Success Message</Label>
                    <Input
                      type="text"
                      name="successMessage"
                      placeholder="Hey Mom I totally crushed my goal!"
                      onChange={updateState}
                    />

                    <Label for="failureMessage">Failure Message</Label>
                    <Input
                      type="text"
                      name="failureMessage"
                      placeholder="OOPS.  I didn't succeed."
                      onChange={updateState}
                    />


                  </h4>

                </FormGroup>
                <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                  Please ensure that you filled out the goal input form correctly!
                </Alert>

                <Button onClick={handleClick}> Submit</Button>

              </Form>
            </CardBody>

          </Card>

          <GoalUpdate userId={goalState.userId} />

        </Col>

      </Row>

    </div>
  );

};

export default NewGoal;