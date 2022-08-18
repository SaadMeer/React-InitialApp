import React from 'react';
import dataApi from './dataApi';
import Card from './Card'

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>OverServices</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                dataApi.map((ele, index) => {
                                    return <Card key={index}
                                        imgsrc={ele.imgsrc}
                                        title={ele.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
