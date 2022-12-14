import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav-bg'>
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">
                                <Link activeClassName="menu_active" className="navbar-brand" to="/">TechTechnical</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link" to="/service">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link" to="about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link activeClassName="menu_active" className="nav-link" to="contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
