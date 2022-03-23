import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import DetailCareer from "./DetailCareer";
import "./ListItem.css";

class ListItem extends Component {
  //getting props for every update on news.jsx
  constructor(props) {
    super(props);
    let dateString = props.text1;
    let dateResult = new Date(dateString);

    this.state = {
      date: dateResult.toString(),
    };
  }

  changeLanguage = (val) => {
    this.props.changeLanguage(val);
  };
  componentWillUnmount() {}

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
          <img src={this.props.imgsrc} className="img-card-item" alt="..." />
          <div className="card-item-body">
            <h5 className="card-item-title">{this.props.title}</h5>
            <p className="card-item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestiae ratione maxime totam nam officia repudiandae ea dolor voluptas, possimus, explicabo accusantium quisquam sapiente a laborum laboriosam corporis cupiditate. Fugiat accusamus adipisci eveniet, quidem iusto nostrum itaque officiis ea ducimus sit impedit inventore ex aliquid ratione facilis quasi explicabo neque nisi distinctio hic quod. Omnis unde assumenda enim ducimus molestiae amet, iusto ut doloremque esse ex nesciunt nam nobis repudiandae natus optio in blanditiis suscipit! Delectus, eaque tenetur. Ratione sapiente distinctio iure architecto optio ipsum maiores, doloribus ab officiis magnam! Alias, ex! Illo asperiores, alias nam esse soluta fuga consectetur.
            </p>
            <div className="foot-of-card">
              <p className="date-of-news">{this.state.date}</p>
              <Link
                to={`/career/${this.props.code}/${this.props.languageCode}`}
                className="card-more"
                key={this.props.code}>{this.props.linkSourceText}
              </Link>
            </div>
          </div>
        </div>
      </div>
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
