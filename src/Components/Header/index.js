import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgCar from '../../Assets/Img/img_car.png';
import useShow from '../../Utils/Hooks/useShow';
import './Header.css';

const Header = () => {
  const { show } = useShow();
  const search = show;
  return (
    <>
      <Container fluid className="px-0 bg-color-header">
        <Row>
          <Col xs md="12" lg={{ span: 5, offset: 1 }}>
            <Container className="h-100 px-lg-0">
              <div className="h-100 d-flex flex-column justify-content-center align-content-center">
            {search === false ? (
              <>
                <h2 className="mb-3">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p>
                  Selamat datang di Binar Car Rental. 
                  Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                  Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </>
            ):(
              <Container className=''>
                <p className="empty-space">&nbsp;</p>
              </Container>
            )
            }
              </div>

            </Container>
          </Col>
          <Col xs md="12" lg="6">
          {search ===false && <img className="w-100" src={imgCar} alt="" /> }
          {search ===true && <Container></Container> }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Header