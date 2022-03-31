import React from 'react';

import { Carousel } from 'react-bootstrap';
import "./Carousel.css";
import AOS from 'aos';
import { HashLink as Link } from 'react-router-hash-link';
import { BsArrowRight as Arrow } from "react-icons/bs";

import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Carousel2 = () => {
    return (
        <section id="home">
            <Carousel controls={false} pause={false} fade={true}>
                <Carousel.Item interval={3000}>
                    <img id="carousel"
                        className="d-block w-100"
                        src="./Pictures/content07.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caption">Experts in each field who lead change<br></br> and realize customer satisfaction</h3>

                    </Carousel.Caption>
                    <Carousel.Caption>
                        <Link to="visionAndMission#coreValues" className="btn btn-warning searched">Read more <Arrow /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img id="carousel"
                        className="d-block w-100"
                        src="./Pictures/meeting4.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caption">Introducing<br></br> Digital Information</h3>

                    </Carousel.Caption>
                    <Carousel.Caption>
                        <Link to="visionAndMission#visionMission" className="btn btn-warning searched">Read more <Arrow /></Link>

                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img id="carousel"
                        className="d-block w-100"
                        src="./Pictures/typing.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="caption">Build React Native<br></br>IOS Distribution</h3>


                    </Carousel.Caption>
                    <Carousel.Caption>
                        <Link to="visionAndMission#visionMission" className="btn btn-warning searched">Read more <Arrow /></Link>
                    </Carousel.Caption>

                </Carousel.Item>



            </Carousel>
        </section>
    )
}

export default Carousel2