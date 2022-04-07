/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import serviceCar from '../../Service';
import CardItem from './Card';
import './Home.css';

const Item = ({search, driver}) => {
  let navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
   Promise.all([serviceCar.getCar()])
    .then(([getCar])=>{
      setData(getCar)
    })
  }, [driver])

  const toRupiah = (value) =>{
    return new Intl.NumberFormat('id-ID', 
    { style: "currency", currency: "IDR", minimumFractionDigits: 0 }) // mengubah format rawModal menjadi RP
    .format(value); 
  }

  const passenger = (value) => {
    let result;
    if(value === "small"){
      result = 2;
    }else if (value === "medium") {
      result = 4
    }else if (value === "large") {
      result = 6
    }else{
      result = 1;
    }
    return result;
  }
  const handleChose = (id) => {
    // console.log("id",id)
    return navigate(`/detail/${id}`)
  }

  const listCar = data?.filter(item => item.status.toString() === driver)?.map((item) => {
    return (
      <CardItem 
        key={item.id}
        data={item} 
        toRupiah={toRupiah} 
        passenger={passenger}
        handleChose={handleChose}  
      />
    )
  })
  return (
    <>
      <Container>
        <Row>
        {(search === false || driver === undefined) &&  ""}
        {(search === true && driver) && listCar}
        </Row>
      </Container>
    </>
  )
}

export default Item