import React from 'react'
import './Banner.css'
import profile from '../../../assets/profile.png'
const Banner = () => {
    return (
        <div className='image-wrap'>
            <div className='img-content opacity-50'>
                <img src="https://mdbootstrap.com/img/Photos/Others/forest1.jpg" className='img-fluid'></img>
                <div className="overlay"></div>
            </div>
            <div className="banner-content">
                <div className="profiles">
                    <img src={profile} className="rounded profile" alt="..." />
                </div>
                <h1>I'm Unnimaya Prajil</h1>
                <h4>Front End Developer</h4>
            </div>
        </div>
    )
}

export default Banner