import React, { Component } from "react";
import "./ListItem.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class ListItem extends Component {
  //getting props for every update on news.jsx
  constructor(props) {
    super(props);
    let dateString = props.text1;
    let dateResult = new Date(dateString);

    this.state = {
      date: props.date,
      linkTo: props.linkTo
    };
  }

  changeLanguage = (val) => {
    this.props.changeLanguage(val);
  };
  componentWillUnmount() { }

  onLanguageClick = (value) => {
    this.setState(
      {
        languageCode: value,
      },
      () => {
        this.changeLanguage(this.state.languageCode);
      }
    );
  };

  render() {
    return (
      <div className="col-md-11 mx-auto">
        <div className="card-list-item">
          <img src={this.props.imgsrc} className="img-card-item" alt="..." data-aos="fade-right" data-aos-duration="1500" />
          <div className="card-item-body" data-aos="fade-left" data-aos-duration="2000">
            <h5 className="card-item-title" >{this.props.title}</h5>
            <p className="card-item-text">
              {this.props.text1}
            </p>
            <div className="foot-of-card">
              <p className="date-of-news">{this.state.date}</p>


              <a href={`${this.props.linkTo}`} className="btn orange-color" target={"_blank"} >{this.props.linkSourceText}</a>

              {/* <Link
              //   to={`${this.state.linkTo}`} target={"_blank"}
              //   className="btn btn-warning"
              //   key={this.props.code}>{this.props.linkSourceText}
              // </Link> */}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

// function Card({ title, imgsrc }) {
//   return (
//     <>
//       <div className="col-md-4 col-10 mx-auto">
//         <div className="card">
//           <img src={imgsrc} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
//             <NavLink to="/contact" className="btn btn-primary">
//               Get Quote
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default ListItem;
