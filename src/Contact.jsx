import React, { useState } from 'react';


const formSubmit = () => {
    
}

const Contact = () => {
    const [data, setdata] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setdata((preVal) => {
            return{
                ...preVal,
                [name]: value,
            };
        });
    };

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className="conatiner contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label class="form-label">Full Name</label>
                                <input type="text " name="fullname" value={data.fullname} onClick={InputEvent} placeholder='enter your name' class="form-control" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label">Phone Number</label>
                                <input type="email" name="phone" value={data.phone} onChange={InputEvent} placeholder='phone number' class="form-control" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={InputEvent} placeholder='enter your email address' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" name="password"  onChange={InputEvent} placeholder='password' class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" placeholder='message' name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
