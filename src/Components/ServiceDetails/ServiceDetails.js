import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('ServiceDetail.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])



    return (
        <div>
            <h1 className="fw-bolder my-3">SPECIALITY of OUR DOCTORS</h1>
            <Row xs={1} md={3} className="g-2 container ms-5">

                {
                    details.map(detail => <ServiceDetail
                        key={detail.key}

                        detail={detail}

                    >

                    </ServiceDetail>)







                }

            </Row>
        </div>
    );
};

export default ServiceDetails;