import React from 'react'
import bg from '../../.././img/contact-bg.png';

const Contact = () => {
    return (
        <div className="container">
            <div className="row justify-content-around align-items-center">
                <div className="col-lg-5">
                    <img src={bg} alt="bg" className="img-fluid"/>
                </div>
                <div className="col-lg-5">
                    <h3>Stay Running & Project</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <button className="btn btn-primary">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
