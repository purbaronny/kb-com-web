import { Component } from "react";
import Card from "./Card";

class Award extends Component {

    state = {
        languageCode: "en-US",
        title: "Our Award",
        cards: [{
            code: "ae",
            title: "Android Development",
            text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/img1.png",
            linkSourceText: "Get Quote"
        }, {
            code: "wd",
            title: "Web Development",
            text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/img2.png",
            linkSourceText: "Get Quote"
        }, {
            code: "dm",
            title: "Database Management",
            text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/img3.png",
            linkSourceText: "Get Quote"
        }, {
            code: "ba",
            title: "Business Analytics",
            text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/img4.png",
            linkSourceText: "Get Quote"
        }, {
            code: "dmar",
            title: "Digital Marketing",
            text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/img5.png",
            linkSourceText: "Get Quote"
        }, {
            code: "va",
            title: "Video Creation",
            text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            imgsrc: "Pictures/img6.png",
            linkSourceText: "Get Quote"
        }]        
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
    
      componentDidMount() {
        fetch("./awardData.json")
          .then(response => response.json())
          .then(result => {        
            for (var i = 0; i < result.length; i++) {
              var obj = result[i];
              if(obj.languageCode === this.props.languageCode) {
                this.setState({
                  languageCode: obj.languageCode,
                  title: obj.title,
                  cards: obj.cards
                 });
                 break;  
              }
            }
            // console.log(result);
            // console.log(this.state.text1);
        });
      }
    
      componentDidUpdate(prevProps) {
        fetch("./awardData.json")
          .then(response => response.json())
          .then(result => {        
            for (var i = 0; i < result.length; i++) {
              var obj = result[i];
              if(obj.languageCode === this.props.languageCode) {
                this.setState({
                  languageCode: obj.languageCode,
                  title: obj.title,
                  cards: obj.cards
                 });
                 break;  
              }
            }
            // console.log(result);
            // console.log(this.state.text1);
        });
      }

    render() {
        return(
            <>
                <div className="my-5">
                    <h1 className="text-center">{this.state.title}</h1>
                </div>

                <div className="container-fluid mb-5">
                    <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {this.state.cards.map((card =>
                                <Card key={this.code} title={card.title} text1={card.text1} imgsrc={card.imgsrc} linkSourceText={card.linkSourceText} />
                            ))}                       
                        </div>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Award;