import React from 'react';
import { Link } from 'react-router-dom';


const Common = (props) => {
    return (
        <div>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className='col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1 className='Home-h1'>{props.name} <strong className='brand-name'>TechTechnical</strong></h1>
                                    <h2 className='fs-6 text-capitalize'>we are the team of talented developer making websites</h2>
                                    <div className="mt-4">
                                        <Link to={props.visit} className='btn-get-started'>{props.btname}</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="home img" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Common;
