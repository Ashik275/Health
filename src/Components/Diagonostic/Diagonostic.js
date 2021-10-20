import React from 'react';
import pic1 from './xray.jpg'
import pic2 from './mri.jpg'
import pic3 from './ct.jpg'

const Diagonostic = () => {
    return (
        <div>
            <div>
                <h2 className="bg-dark text-white mt-2">Our Diagostic Services</h2>
                <div className="row row-cols-1 row-cols-md-3 my-4 g-4 container ms-5">


                    <div className="col">
                        <div className="card" >
                            <img src={pic1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">X-Ray</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pic2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MRI</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={pic3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">CT Scan</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Diagonostic;