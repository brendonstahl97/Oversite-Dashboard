import React from 'react';
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Quotes from '../components/Quotes/Quotes.js';



const Motivation = (props) => {

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Motivational Quote</CardTitle>
              </CardHeader>
              <CardBody>
                <Quotes />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Motivation;