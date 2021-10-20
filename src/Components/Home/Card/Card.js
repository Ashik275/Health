import React from 'react';
import pic1 from './Background (2).png'
import pic2 from './Background (3).png'
import pic3 from './Background (5).png'

const Card = () => {
    return (
        <div>
            <div>
                <h1 className="mt-5">Wercome To <b>Health Care </b> <span className="text-danger">Agency</span></h1>
                <p>Our medical specialists care about you & your family’s health</p>
                <div className="row row-cols-1 row-cols-md-3 my-4 g-4">


                    <div className="col">
                        <div className="card" >
                            <img src={pic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HealthCare Professionals
                                </h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pic2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Medical Excellence</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pic3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Technology</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Card;