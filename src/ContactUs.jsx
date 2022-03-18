import React, { useState } from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
import Contact from "./Contact";
import Footer from "./Footer";

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languageCode: "en-US",
            titleContactUs: "Contact Us",
            labelEnterYourName: "Enter your Full Name",
            textEnterYourName: "Enter Full Name",
            labelContactNumber: "Contact Number",
            textContactNumber: "+62-",
            labelEmailAddress: "Email Address",
            textEmailAddress: "name@example.com",
            labelTypeYourMessageHere: "Type your Message Here",
            textTypeYourMessageHere: "Message",
            labelSubmitform: "Submit Form"
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

    static getDerivedStateFromProps(props, state) {
        return { languageCode: props.languageCode };
    }

    componentDidUpdate(prevProps) {
        fetch("./contactUs.json")
            .then(response => response.json())
            .then(result => {
                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.languageCode === this.props.languageCode) {
                        this.setState({
                            languageCode: obj.languageCode,
                            titleContactUs: obj.titleContactUs,
                            labelEnterYourName: obj.labelEnterYourName,
                            textEnterYourName: obj.textEnterYourName,
                            labelContactNumber: obj.labelContactNumber,
                            textContactNumber: obj.textContactNumber,
                            labelEmailAddress: obj.labelEmailAddress,
                            textEmailAddress: obj.textEmailAddress,
                            labelTypeYourMessageHere: obj.labelTypeYourMessageHere,
                            textTypeYourMessageHere: obj.textTypeYourMessageHere,
                            labelSubmitform: obj.labelSubmitform
                        });
                        //console.log(result);
                        break;
                    }

                }
                console.log(result);
                console.log(this.state.text1);

                // console.log(this.state.text1);
            });
    }

    onClickButton(event) {
        //event.preventDefault();
    }

    render() {

        const Result = () => {
            return (

                <div className="text-center">
                    <p>Your message has successfully sent</p>
                </div>

            );
        };

        //const[result,showResult]=useState(false);

        function sendEmail(e) {
            e.preventDefault();



            emailjs.sendForm('service_smbfjbr', 'template_hogphgu', e.target, 'Fa5m0dy7CLzOz9yud')
                .then((result) => {

                    console.log(result.text);

                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
            //showResult(true);    
        }
        return (
            <>
                <section id="header" className="d-flex align-items-center" style={{marginTop:100}}>
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="my-5">
                                    <h1 className="text-center" style={{ color: "rgb(255, 188, 0)   " }}>{this.state.titleContactUs}</h1>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <form onSubmit={sendEmail}>
                                            <div className="form-group">
                                                <label for="exampleFormControlInput1">{this.state.labelEnterYourName}</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={this.state.textEnterYourName} name="name" />
                                            </div>
                                            <div className="form-group pt-3">
                                                <label for="exampleFormControlInput1">{this.state.labelContactNumber}</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={this.state.textContactNumber} name="no_telp" />
                                            </div>
                                            <div className="form-group pt-3">
                                                <label for="exampleFormControlInput1">{this.state.labelEmailAddress}</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={this.state.textEmailAddress} name="email" />
                                            </div>
                                            <div className="form-group pt-3">
                                                <label for="exampleFormControlTextarea1">{this.state.labelTypeYourMessageHere}</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={this.state.textTypeYourMessageHere} name="message" />
                                            </div>
                                            <div className="col-12 pt-3">
                                                <button onClick={this.onClickButton} className="btn btn-primary btn-kirim" type="submit">{this.state.labelSubmitform}</button>
                                                <button class="btn btn-primary btn-loading d-none" type="button" disabled>
                                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    Loading...
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-lg-6 order-1 order-lg-2 header-img" style={{ display: "block" }}>
                                        <p align="right">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.115363048713!2d106.84188341426903!3d-6.248525962920591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7fbe2991fbf%3A0xe46e220a647b07!2sL%E2%80%99Avenue%20Office%20%26%20Residence%20Jakarta!5e0!3m2!1sen!2sid!4v1646029842534!5m2!1sen!2sid" width="460" height="360" style={{ border: 0 }} loading="lazy"></iframe>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <Footer />
            </>
        );
    }
}

export default ContactUs;