import React from "react";
import { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Carousel } from 'react-bootstrap';
import { BsArrowRight as Arrow } from "react-icons/bs";

class CarouselSlider extends Component {

    constructor(props) {
        super(props);
        if (props.languageCode === "en-US") {
            this.state = {
                languageCode: "en-US",
                caption1: "Experts in each field who lead change",
                caption2: "and realize customer satisfaction",
                caption3: "Introducing",
                caption4: "Digital Information",
                caption5: "Build React Native",
                caption6: "iOS Distribution",
                button: "Read More"
            }
        } else if (props.languageCode === "id-ID") {
            this.state = {
                languageCode: "id-ID",
                caption1: "Pakar di setiap bidang yang memimpin perubahan",
                caption2: "dan mewujudkan kepuasan pelanggan",
                caption3: "Memperkenalkan",
                caption4: "Transformasi Digital",
                caption5: "Membangun Aplikasi iOS",
                caption6: "Berbasis React Native",
                button: "Selengkapnya"
            }
        } else if (props.languageCode === "ko-KR") {
            this.state = {
                languageCode: "ko-KR",
                caption1: "변화를 선도하며",
                caption2: "고객만족을 실현시키는 분야별 전문가",
                caption3: "Digital Transformation을",
                caption4: "소개합니다.",
                caption5: "리액트 네이티브",
                caption6: "iOS 배포 빌드하기",
                button: "더 읽어보기"
            }
        }
    }

    changeLanguage = (val) => {
        this.props.changeLanguage(val);
    }

    onLanguageClick = (value) => {
        this.setState({
            languageCode: value
        }, () => {
            this.changeLanguage(this.state.languageCode);
        });
    }


    componentDidMount(prevProps) {
        fetch("./carouselData.json")
            .then(response => response.json())
            .then(result => {
                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.languageCode === this.props.languageCode) {
                        this.setState({
                            languageCode: obj.languageCode,
                            caption1: obj.caption1,
                            caption2: obj.caption2,
                            caption3: obj.caption3,
                            caption4: obj.caption4,
                            caption5: obj.caption5,
                            caption6: obj.caption6,
                            button: obj.button
                        });

                        break;
                    }

                }



            });
    }

    static getDerivedStateFromProps(props, state) {
        return { languageCode: props.languageCode };
    }


    componentDidUpdate(prevProps) {
        fetch("./carouselData.json")
            .then(response => response.json())
            .then(result => {
                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.languageCode === this.props.languageCode) {
                        this.setState({
                            languageCode: obj.languageCode,
                            caption1: obj.caption1,
                            caption2: obj.caption2,
                            caption3: obj.caption3,
                            caption4: obj.caption4,
                            caption5: obj.caption5,
                            caption6: obj.caption6,
                            button: obj.button
                        });

                        break;
                    }

                }



            });
    }


    render() {
        return (
            <>
                <section id="home">
                    <Carousel controls={false} pause={false} fade={true}>
                        <Carousel.Item interval={3000}>
                            <img id="carousel"
                                className="d-block w-100"
                                src="./Pictures/content07.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="caption">{this.state.caption1}<br></br>{this.state.caption2}</h3>
                                <Link to="service#companyMaintenance" className="btn btn-warning searched">{this.state.button}<Arrow /></Link>
                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img id="carousel"
                                className="d-block w-100"
                                src="./Pictures/meeting4.png"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3 className="caption">{this.state.caption3}<br></br>{this.state.caption4}</h3>
                                <Link to="visionAndMission#businessDomain" className="btn btn-warning searched">{this.state.button}<Arrow /></Link>

                            </Carousel.Caption>


                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img id="carousel"
                                className="d-block w-100"
                                src="./Pictures/typing.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="caption">{this.state.caption5}<br></br>{this.state.caption6}</h3>
                                <Link to="service#companyOperation" className="btn btn-warning searched">{this.state.button}<Arrow /></Link>

                            </Carousel.Caption>

                        </Carousel.Item>



                    </Carousel>
                </section>
            </>
        );
    }
}

export default CarouselSlider;