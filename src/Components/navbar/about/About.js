import { faCode, faComputer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about-wrap'>
            <div className="about-content">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, e<br />os officia maiores ipsam ipsum dolores reiciendis ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>


                <div className=" card-container container text-center">
                    <div className="row justify-content-md-center  gy-5">
                        <div className="col-12 col-md-6" >
                            <div className="card" >
                                <div className="card-body">
                                    <div className="icon" style={{ fontSize: "50px" }}>
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <h4 style={{ marginTop: "0.25em" }}>DEVELOPER</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card" >
                                <div className="card-body">
                                    <div className="icon" style={{ fontSize: "50px" }}>
                                        <FontAwesomeIcon icon={faComputer} />
                                    </div>
                                    <h4 style={{ marginTop: "0.25em" }}>FREELANCER</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About