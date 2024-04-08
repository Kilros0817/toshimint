import React from "react";
import ActionButtons from "../AttributeButtons/AttributeButtons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Confirmation.css';

const Confirmation = (props) => {
    console.log("step3 receive user object");
    console.log(props.user);

    const handleLastStep = () => {
        props.completeCallback();
    };

    return (
        <div className="p-2 p-sm-5 pt-4 m-3 step-confirm">

            <h4 className="mb-4">Please confirm token creation</h4>

            <Row>
                <Col sm={6} className="pe-4">
                    <label>
                        Token name:
                    </label>
                    <p>{props.user.token_name}</p>
                </Col>
                <Col sm={6} className="pe-4">
                    <label>
                        Initial Supply:
                    </label>
                    <p>{props.user.initial_supply}</p>
                </Col>
            </Row>

            <Row>
                <Col sm={6} className="pe-4">
                    <label>
                        Token symbol:
                    </label>
                    <p>{props.user.token_symbol}</p>
                </Col>
                <Col sm={6} className="pe-4">
                    <label>
                        Burn/ Tax fee:
                    </label>
                    <p>{props.user.tax_fee}</p>
                </Col>
            </Row>

            <Row>
                <Col sm={6} className="pe-4">
                    <label>
                        Decimals: 0-18 :
                    </label>
                    <p>{props.user.decimals}</p>
                </Col>
                <Col sm={6} className="pe-4">
                    <label>
                        Receive address:
                    </label>
                    <p>{props.user.receive_address}</p>
                </Col>
            </Row>
            <Row>
                <label>
                    Advanced settings:<p className="d-inline-block ms-2"> {props.user.deflation ? 'Deflation' : 'Not checked'}</p>
                </label>
            </Row>
            <br />
            <ActionButtons {...props} lastStep={handleLastStep} />
        </div>
    );
};

export default Confirmation;