import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-wrap'>
            <div className="contact-content">
                <h1>Contact ME</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, e<br />os officia maiores ipsam ipsum dolores reiciendis ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>
                <div className="container text-center">
                    <div className="row" >
                        <div className="col">
                            <label for="name" className="form-label">Your Name</label>
                            <input type="text" id="name" className="form-control" />
                        </div>
                        <div className="col">
                            <label for="email" className="form-label">Your Email</label>
                            <input type="email" id="email" className="form-control" />
                        </div>
                        <div className="col">
                            <div className="icon" style={{ fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faLocation} />

                            </div> Nilambur,Kerala
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-8">
                            <label for="subject" className="form-label">Subject</label>
                            <input type="text" id="subject" className="form-control" />
                        </div>
                        <div className="col">
                            <div className="icon" style={{ fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            +91 8590891745
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-8">
                            <label for="message" className="form-label">Your Message</label>
                            <input type="text" id="message" className="form-control" aria-describedby="passwordHelpBlock" />
                        </div>

                        <div className="col">
                            <div className="icon" style={{ fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faGoogleDrive} />
                            </div>
                            unnimayaunni07@gmail.com
                        </div>

                    </div>
                   
                </div > 
                <div className="container text-start"><button type="button" class="btn btn-primary">Send</button></div>
            </div>
        </div>
    )
}

export default Contact