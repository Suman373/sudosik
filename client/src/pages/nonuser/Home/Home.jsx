import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.scss';
import NavbarHome from '../../../components/Navbar-home/NavbarHome';
import { SiFsecure, SiWebmoney } from 'react-icons/si';
import { FaHandshake } from 'react-icons/fa';
import givetakeheart from './assets/give-take-heart.webp';
import donatebox from './assets/donate-box.webp';
import devices from './assets/devices-compatibility.webp';
import BlueButton from '../../../components/BlueButton/BlueButton';

const Home = () => {
    // navigator
    const navigate = useNavigate();

    const getStarted = () => {
        navigate('/userhome');
    }

    const moreFromUs = () => {
        alert("You want more? ");
    }

    return (
        <>
            <div>
                <NavbarHome />
                <div className="banner-wrapper">
                    <section className="banner-slogan">
                        <h1>
                            Be someone's reason for smile
                        </h1>
                        <p>
                            Join us to thrive towards helping millions of unpriviledged who need your help
                        </p>

                        <div>
                            <BlueButton
                                text={"Get started"}
                                handleClick={getStarted} />
                            <BlueButton
                                text={"More from us"}
                                handleClick={moreFromUs} />
                        </div>
                    </section>
                </div>
                <section className="banner-illustration">
                    <div className="icons-container">
                        <i><SiFsecure /></i>
                        <i><FaHandshake /></i>
                        <i><SiWebmoney /></i>
                        <i></i>
                    </div>
                    <div className="illustration-caption">
                        <h1>
                            Looking to help the needy but not sure of the authenticity?
                        </h1>
                        <p>
                            Our site provides you that opportunity of making a huge difference to the lives of millions with small contribution. Yes, you might be worried about if it's safe. Don't worry, we have got you covered.
                        </p>
                    </div>
                    <img src={givetakeheart} alt="give-take-heart" />
                </section>

                <div className="platform-wrapper" id="platform">
                    <section className="our-platform">
                        <h1>Sharing is caring</h1>
                        <div className="platform-card">
                            <p>We don't let non-verified users and organisation start raise programs, so your love and kindness would reach the needy without any hesitation. </p>
                            <img src={donatebox} alt="donate-box" />
                        </div>
                    </section>
                    <section className="our-platform">
                        <h1>Join us to collaborate</h1>
                        <div className="platform-card">
                            <p>We are actively looking for tech enthusiasts and developers to help us bring more features, so that we can reach new heights! </p>
                            <img src={devices} alt="device-compatibility" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home;
