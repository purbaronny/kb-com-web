import emailjs from "emailjs-com";
import React, { useState } from "react";

function onClickButton(event) {
  //event.preventDefault();
}

const Result =()=>{
    return(

      <div className="text-center">
        <p>Your message has successfully sent</p>
      </div>
        
    );
};

function Contact() {

    const[result,showResult]=useState(false);
    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_smbfjbr','template_hogphgu',e.target,'Fa5m0dy7CLzOz9yud')
        .then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset() 
       showResult(true);    
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label for="exampleFormControlInput1">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                  name="name"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+62-"
                  name="no_telp"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Type your Message Here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit form
                </button>

                <div className="row">
                    {result?<Result/>:null}

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;