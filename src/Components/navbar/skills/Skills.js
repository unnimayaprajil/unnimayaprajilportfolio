import React from 'react'
import './Skills.css'
const Skills = () => {
    return (
        <div className='skill-wrap'>
            <div className=" card-container container text-start">
                <div className="row gy-5 ">
                    <div className="col-12 col-md-6" >
                        <div className='experience-wrap'>
                            <h1 className='title'>My Experience</h1>
                            <div className="line " >
                                <div style={{ marginLeft: "30px" }}>
                                    <h5 style={{ fontWeight: "900" }}>Front End Developer</h5>
                                    <p>2021 May 30 -2022 January 10</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum dolores.</p></div>
                            </div>
                            <div className="line" >
                                <div style={{ marginLeft: "30px" }}>
                                    <h5 style={{ fontWeight: "900" }}>Front End Developer</h5>
                                    <p>2019 December 1 -2021 February 10</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum dolores.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6" >
                        <div className='experience-wrap'>
                            <h1 className='title'>Development Skills</h1>
                            <p style={{ fontWeight: "900" }}>Java Script</p>
                            <div className="progress" style={{ height: "5px" }} >
                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%", backgroundColor: "rgb(168, 128, 17)" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{ fontWeight: "900" }}>CSS3</p>
                            <div className="progress" style={{ height: "5px" }} >
                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%", backgroundColor: "rgb(168, 128, 17)" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{ fontWeight: "900" }}>HTML5</p>
                            <div className="progress" style={{ height: "5px" }} >
                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%", backgroundColor: "rgb(168, 128, 17)" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{ fontWeight: "900" }}>ReactJs</p>
                            <div className="progress" style={{ height: "5px" }} >
                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%", backgroundColor: "rgb(168, 128, 17)" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{ fontWeight: "900" }}>Redux</p>
                            <div className="progress" style={{ height: "5px" }} >
                                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "50%", backgroundColor: "rgb(168, 128, 17)" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Skills