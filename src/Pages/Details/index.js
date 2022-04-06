/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";
import serviceCar from "../../Service/index";
import { useParams } from "react-router-dom";
import imgPerson from '../../Assets/Img/fi_users.png'
import useShow from '../../Utils/Hooks/useShow'
import Item from './Item';
import './Details.css'

const Details = () => {
  const { show } = useShow();
  let { id } = useParams();
 
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  // const resultSubmit = data =>{
  //   setSearch(true);
  //   setDateSearch(data.Tanggal)
  // } 

  return (
    <>
      <Container className="border border-2 py-2 px-3 offset-header">
        {/* <Form onSubmit={handleSubmit(resultSubmit)}> */}
        <Form>
          <Row>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tipe Driver</Form.Label>
                <Form.Control 
                  className="bg-disable"
                  name="tipeDriver"
                  type="text"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Tanggal</Form.Label>
                <Form.Control 
                  className="bg-disable"
                  name="Tanggal"
                  type="date"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Time</Form.Label>
                <Form.Control 
                  className="bg-disable"
                  name="Time"
                  type="time"
                  disabled
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Form.Label>Penumpang</Form.Label>
                  <Controller
                    control={control}   
                    name="Penumpang"                                         
                    defaultValue=""                                                                        
                    render={({ field: { onChange, value, ref }}) => (
                      <div className="d-flex flex-row">
                        <Form.Control
                          className="border border-end-0 bg-disable" 
                          onChange={onChange}
                          name="Penumpang"
                          ref={ref}
                          type="text"
                          value={value}
                          disabled
                        />
                        <span className="bg-disable border border-start-0 py-1 pe-2" id="inputGroup-sizing-sm"><img src={imgPerson} alt="" /></span>
                      </div>
                    )}
                  />
                </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
      <Item id={id} />
    </>
  )
}

export default Details