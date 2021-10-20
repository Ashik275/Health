import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, picture, Degree } = props.service;
    return (
        <div className="sevice container" >

            <Col >
                <Card style={{ height: '52rem' }} className="card my-2  ">
                    <Card.Img variant="top" src={picture} className="img-fluid" />
                    <Card.Body className="service-card">

                        <Card.Text className="text-wrap">
                            <h4>{name}</h4>
                            <h5><b>Degree-</b>{Degree}</h5>


                            <div  >

                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Get Appoinment
                                </button>


                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title fw-bold" id="exampleModalLabel">GET APPOINTMENT</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form className="my-4">
                                                    <div>   <lable>Name:</lable></div>
                                                    <div>
                                                        <input type="text" placeholder="Enter Your Name" />

                                                    </div>


                                                    <div>  <lable>Age</lable></div>

                                                    <div>   <input type="text" placeholder="Enter Your Age" /></div>



                                                    <div><lable>Phone Number:</lable></div>

                                                    <div> <input type="text" placeholder="Enter Your Phone Number" /></div>

                                                </form>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to='/serviceDetails'>
                                    <button type="button" className="btn btn-outline-primary mx-2">View Details </button>
                                </Link>

                            </div>





                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;