import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {

    const { name, picture, Degree, doctor } = props.detail;


    return (
        <div>

            <Col >
                <Card style={{ height: '52rem' }} className="card my-2  ">
                    <Card.Img variant="top" src={picture} className="img-fluid" />
                    <Card.Body className="service-card">

                        <Card.Text className="text-wrap">
                            <h4>{name}</h4>
                            <h5><b>Degree-</b>{Degree}</h5>
                            <p>Speciality :{doctor}</p>

                            <div  >

                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Get Appoinment
                                </button>



                                <Link to='/serviceDetails'>
                                    <button type="button" className="btn btn-outline-primary mx-2">View Details </button>
                                </Link>

                            </div>





                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetail;