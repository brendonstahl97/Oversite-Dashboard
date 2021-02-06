import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, Button, Form, FormGroup, Label, Input, CardBody } from 'reactstrap';

const newGoal = (props) => {
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
        <Input type="text" name="goal" id="newGoal" placeholder="Be more awesome" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Completion Date</Label>
        <Input
          type="date"
          name="date"
          id="completionDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Desciption</Label>
        <Input type="textarea" name="description" id="description" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="habit" id="habitSelect">
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
            <Input type="radio" name="consequence1" id="consequence1"/>{' '}
            Message someone if I succeed
          </Label>
          <Input type="text" name="phoneNumber1" id="phoneNumber1" placeholder="123-456-7890" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="consequence2" id="consequence2"/>{' '}
            Message someone if I fail
          </Label>
          <Input  type="text" name="phoneNumber2" id="phoneNumber2" placeholder="123-456-7890" />
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
      <Button>Submit</Button>
    </Form>
</CardBody> 
    
</Card>  
</Col>

</Row>

</div>



);
   
}

export default newGoal;