import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const ActionButtons = (props) => {
    const handleBack = () => {
      props.previousStep();
    };
  
    const handleNext = () => {
      props.nextStep();
    };
  
    const handleFinish = () => {
      props.lastStep();
    };
  
    return (
      <div>
        <Row>
        <Col className="text-center step-btn">
          {props.currentStep > 1 && (
           
              <Button onClick={handleBack} className="btn-secondary ">Back</Button>
            
          )}
         
            {props.currentStep < props.totalSteps && (
              <Button onClick={handleNext} >Next</Button>
            )}
            {props.currentStep === props.totalSteps && (
              <Button onClick={handleFinish} className="btn-finish">Sign Transaction</Button>
            )}
          </Col>
        </Row>
      </div>
    );
  };

  export default ActionButtons;