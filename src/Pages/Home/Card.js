import React from 'react';
import iconUsers from '../../Assets/Img/fi_users.png';
import iconSettings from '../../Assets/Img/fi_settings.png';
import iconDate from '../../Assets/Img/fi_calendar.png';
import { Col, Card, Button } from 'react-bootstrap';

const CardItem = ({data, toRupiah, passenger, handleChose }) => {
  const { 
    id, name, category, image, price
  } = data;
  return (
    <Col xs="4">
        <Card className="container-card">
          <Card.Body>
            <Card.Img className="p-3" variant="top" src={image} />
            <Card.Text><small>{name}/{category}</small></Card.Text>
            <Card.Text><b>{toRupiah(price)} / hari</b></Card.Text>
            <Card.Text>
              <small>
                Lor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </small>
            </Card.Text>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex flex-row">
                  <small>
                    <img className='' src={iconUsers} alt="" />
                    <span className="ps-3">{passenger(category)} Orang</span>
                  </small>
                </div>
                <div className="d-flex flex-row">
                  <small>
                    <img className='' src={iconSettings} alt="" />
                    <span className="ps-3">Manual</span>
                  </small>
                </div>
                <div className="d-flex flex-row">
                  <small>
                    <img className='' src={iconDate} alt="" />
                    <span className="ps-3">Tahun 2020</span>
                  </small>
                </div>
              </div>
            <Button 
              className="w-100 mt-3" 
              variant="success"
              onClick={handleChose.bind(null, id)}
            >
              Pilih Mobil
            </Button>
          </Card.Body>
        </Card>
      </Col>
  )
}

export default CardItem