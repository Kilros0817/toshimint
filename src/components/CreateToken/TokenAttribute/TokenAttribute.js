import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import ActionButtons from "../AttributeButtons/AttributeButtons";
import './TokenAttribute.css';
import { useFormik } from "formik";
import * as Yup from "yup";


const TokenAttribute = (props) => {
  
  
  const formik = useFormik({
    initialValues: {
      token_name: "",
      initial_supply: "",
      token_symbol: "",
      tax_fee: "",
      decimals: "",
      receive_address: "",
      deflation: false

    },
    validationSchema: Yup.object({
      token_name: Yup.string().required("Required"),
      initial_supply: Yup.string().required("Required"),
      token_symbol: Yup.string().required("Required"),
      tax_fee: Yup.string().required("Required"),
      decimals: Yup.number().min(0, "Min value 0 ").max(18, "Max value 18").required("Required"),
      receive_address: Yup.string().required("Required"),
      deflation: Yup.bool().required().oneOf([true], 'terms must be accepted')
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values)
      setSubmitting(false);
      
      props.nextStep();
      props.userCallback(values);
    }
  });


  return (
    <div className="p-3 p-sm-5 m-3 mt-0">

      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col sm={6} className="px-0 px-sm-4">
            <Form.Group className="mt-5" controlId="validationCustom01">
              <Form.Label className="mb-1">Token name</Form.Label>
              <Form.Control
                name="token_name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.token_name}

              />
              <Form.Text className="text-danger">
                {formik.touched.token_name && formik.errors.token_name ? (
                  <div className="text-danger">{formik.errors.token_name}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={6} className="px-0 px-sm-4">
            <Form.Group className="mt-5" controlId="validationCustom01">
              <Form.Label className="mb-1">Initial Supply</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.initial_supply}
                name="initial_supply"
                type="text"
              />
              <Form.Text className="text-danger">
                {formik.touched.initial_supply && formik.errors.initial_supply ? (
                  <div className="text-danger">{formik.errors.initial_supply}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6} className="px-0 px-sm-4">

            <Form.Group className=" mt-5" controlId="validationCustom01">
              <Form.Label className="mb-1">Token symbol</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.token_symbol}
                name="token_symbol"
                type="text"
              />
              <Form.Text className="text-danger">
                {formik.touched.token_symbol && formik.errors.token_symbol ? (
                  <div className="text-danger">{formik.errors.token_symbol}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={6} className="px-0 px-sm-4">
            <Form.Group className=" mt-5" controlId="validationCustom01">
              <Form.Label className="mb-1">Burn/ Tax fee</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tax_fee}
                name="tax_fee"
                type="text"
              />
              <Form.Text className="text-danger">
                {formik.touched.tax_fee && formik.errors.tax_fee ? (
                  <div className="text-danger">{formik.errors.tax_fee}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6} className="px-0 px-sm-4">
            <Form.Group className="mt-5" controlId="validationCustom01">
              <Form.Label className="mb-1">Decimals: 0-18 </Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.decimals}
                name="decimals"
                type="number"
              />
              <Form.Text className="text-danger">
                {formik.touched.decimals && formik.errors.decimals ? (
                  <div className="text-danger">{formik.errors.decimals}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

          </Col>
          <Col sm={6} className="px-0 px-sm-4">


            <Form.Group className="mt-5" controlId="validationCustom01">
              <Form.Label className="mb-1">Receive address</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.receive_address}
                name="receive_address"
                type="text"
              />
              <Form.Text className="text-danger">
                {formik.touched.receive_address && formik.errors.receive_address ? (
                  <div className="text-danger">{formik.errors.receive_address}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4 px-0 px-sm-4">
            <Form.Label className="mb-1">Advanced settings:</Form.Label>
            <Form.Group className="mb-3 d-inline-block ms-2" controlId="validationCustom01">
              <Form.Check
                type="checkbox"
                label="Deflation"
                name="deflation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.deflation}
                 />
              <Form.Text className="text-danger">
                {formik.touched.deflation && formik.errors.deflation ? (
                  <div className="text-danger">{formik.errors.deflation}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <br />
        <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary " {...props} disabled={!(formik.isValid && formik.dirty)}>Next</button>
                    </div>
        {/* <ActionButtons {...props}  /> */}
      </Form>
    </div>
  );
};

export default TokenAttribute;