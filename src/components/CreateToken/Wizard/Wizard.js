import React, { useState, useEffect } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, Container } from "react-bootstrap";
import {
  writeContract,
  waitForTransaction,
} from "@wagmi/core"
import './Wizard.css';
import { useNetwork, useAccount } from "wagmi";
import TokenAttribute from "../TokenAttribute/TokenAttribute";
import Confirmation from "../Confirmation/Confirmation";
import { tokenDeployer } from "../../../utils/constant";
import ToshiMinterInterface from "../../../abi/ToshiMinter.json";


const Sample = () => {
  const { chain, chains } = useNetwork();

  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const [toshiMinterConf, setToshiMinterConf] = useState({});

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = async () => {

    try {
      const { hash } = await writeContract({
        mode: "recklesslyUnprepared",
        ...toshiMinterConf,
        functionName: "deployToken",
        args: [user.token_name, user.token_symbol, user.decimals, user.initial_supply, (+user.tax_fee) * 10, user.receive_address],
      });
    } catch (e) {
      console.log(e, "error");
    }
  };

  useEffect(() => {
    if (chain) {
      setToshiMinterConf({
        address: tokenDeployer[chain?.id],
        abi: ToshiMinterInterface,
      });
    }
  }, [chain]);

  return (
    <Container className="container-set">
      <h2 className="text-center my-3 fw-bold">Create Token</h2>
      <Row className="stepper">
        <Col>
          <Card>

            <Stepper activeStep={activeStep} alternativeLabel className="stepper-tab">
              <Step className="step-number"> Token attributes</Step>
              <Step > Confirmation</Step>
            </Stepper>
            {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
              <TokenAttribute user={user} userCallback={assignUser} />
              <Confirmation user={user} completeCallback={handleComplete} />
            </StepWizard>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Sample;


