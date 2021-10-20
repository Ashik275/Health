import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {/* <h2 className=" service-header p-5">Our Services</h2> */}
            <Row xs={1} md={3} className="g-2 container ms-5">

                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}

                    ></Service>


                    )


                }

            </Row>

        </div>
    );
};

export default Services;