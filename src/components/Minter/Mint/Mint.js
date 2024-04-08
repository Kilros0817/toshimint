import React from "react";
import { Row, Container, Col, Button, Form, Card } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Mint.css';
import Dropzone from "../Drag-Drop/DragDrop";

const Mint = () => {
    const formik = useFormik({
        initialValues:{
            your_nft:"",
            description:"",
            external_link:"",
            quantity:""
        },
        validationSchema:Yup.object({
            your_nft:Yup.string().required("Required"),
            description:Yup.string().required("Required"),
            external_link:Yup.string().required("Required"),
            quantity:Yup.number().min(1, "Required").max(10, "required").required("Required")
        }),
        onSubmit:(values, {setSubmitting, resetForm}) => {
            console.log(values)
             setSubmitting(false);
             resetForm({values: ''});
        }
    })
    
    return (
        <Container className="container-set">
            <h2 className="text-center my-3 fw-bold">Mint a New NFT</h2>
            <div className="nft-bg">
                <Card className="p-5">
                
                <Form onSubmit={formik.handleSubmit}>
                <Row> 
                    <Col sm={6} className="pe-0 pe-sm-4 ps-0">
                    <h4 className="mb-4">Upload Media</h4>
                    <Dropzone />

                    </Col>
                    <Col sm={6} className="ps-0 ps-sm-4 pe-0 mt-5 mt-sm-0">
                        <h4>General</h4>
                       
                        <Form.Group  controlId="validationCustom01" className="mt-4">
                            <Form.Label className="mb-1">Name your NFT</Form.Label>
                            <Form.Control
                                type="text"
                                name="your_nft"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.your_nft}
                            />
                              <Form.Text className="text-danger">
                            {formik.touched.your_nft && formik.errors.your_nft ? (
                            <div className="text-danger">{formik.errors.your_nft}</div>
                            ) : null}
                        </Form.Text>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom02" className="mt-5">
                            <Form.Label className="mb-1">Description</Form.Label>
                            <Form.Control
                                name="description"
                                type="text"
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.description}
                            />
                             <Form.Text className="text-danger">
                            {formik.touched.description && formik.errors.description ? (
                            <div className="text-danger">{formik.errors.description}</div>
                            ) : null}
                        </Form.Text>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom03" className="mt-5">
                            <Form.Label className="mb-1">External Link</Form.Label>
                            <Form.Control
                                name="external_link"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.external_link}
                            />
                             <Form.Text className="text-danger">
                            {formik.touched.external_link && formik.errors.external_link ? (
                            <div className="text-danger">{formik.errors.external_link}</div>
                            ) : null}
                        </Form.Text>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom04" className="mt-5">
                            <Form.Label className="mb-1">Quantity: 1-10 </Form.Label>
                            <Form.Control
                                name="quantity"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.quantity}
                            />
                              <Form.Text className="text-danger">
                            {formik.touched.quantity && formik.errors.quantity ? (
                            <div className="text-danger">{formik.errors.quantity}</div>
                            ) : null}
                        </Form.Text>
                        </Form.Group>
                    
                </Col>
                </Row>
                <div className="form-group text-center mt-5">
                        <button type="submit" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Mint</button>
                    </div>
                
                        </Form>
                    
              
                
                </Card>
            </div>



        </Container>
    );
};

export default Mint;