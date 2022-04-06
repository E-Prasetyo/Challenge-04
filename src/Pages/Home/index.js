/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { Header } from '../../Components';
import { useForm, Controller } from "react-hook-form";
import Item from './Items';
import imgPerson from '../../Assets/Img/fi_users.png'
import './Home.css'
import useShow from '../../Utils/Hooks/useShow';

const Home = () => {
  const { show, setShow } = useShow();
  const [dateSearch, setDateSearch] = useState("");
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  const resultSubmit = data =>{
    setShow(true);
    setDateSearch(data.Tanggal)
    // console.log("data", data);
  } 

  console.log(show)
  return (
    <>
      {/* <Header search={show} /> */}
      <Container className="border border-2 py-2 px-3 offset-header">
        <Form onSubmit={handleSubmit(resultSubmit)}>
          <Row>
            <Col xs sm="3" md lg="2">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tipe Driver</Form.Label>
                <Controller
                  control={control} 
                  name="tipeDriver"                                           
                  defaultValue=""                                                                        
                  render={({ field: { onChange, value, ref }}) => (
                    <Form.Select
                      onChange={onChange}
                      name="tipeDriver"
                      ref={ref}
                      value={value}>
                        <option>Open this select menu</option>
                        <option value="1">Dengan Supir</option>
                        <option value="2" className="text-danger bg-warning">
                          Tanpa Supir  (Lepas Kunci)
                        </option>
                    </Form.Select>
                  )}
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Tanggal</Form.Label>
                <Controller
                  control={control}   
                  name="Tanggal"                                         
                  defaultValue=""                                                                        
                  render={({ field: { onChange, value, ref }}) => (
                    <Form.Control 
                      onChange={onChange}
                      name="Tanggal"
                      ref={ref}
                      type="date"
                      value={value}
                    />
                  )}
                />
              </Form.Group>
            </Col>
            <Col xs sm="3" md lg="2">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Time</Form.Label>
                <Controller
                  control={control}   
                  name="Time"                                         
                  defaultValue=""                                                                        
                  render={({ field: { onChange, value, ref }}) => (
                    <Form.Control 
                      onChange={onChange}
                      name="Time"
                      ref={ref}
                      type="time"
                      value={value}
                    />
                  )}
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
                          className="border border-end-0" 
                          onChange={onChange}
                          name="Penumpang"
                          ref={ref}
                          type="text"
                          value={value}
                        />
                        <span className="bg-white border border-start-0 py-1 pe-2" id="inputGroup-sizing-sm"><img src={imgPerson} alt="" /></span>
                      </div>
                    )}
                  />
                </Form.Group>
            </Col>
            <Col xs sm="2" md lg="2">
              <div className="d-flex flex-column justify-content-end btn-search">
              {show !== true? (
                  <Button type='submit' variant="success">Cari Mobil</Button> 
                ):(
                  <Button type='submit' variant="outline-primary">Edit</Button> 
                )
              }
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <Item search={show} tanggal={dateSearch}/>
    </>
  )
}

export default Home