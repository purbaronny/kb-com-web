import { Component } from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";

//const { Performance } = require("w3c-hr-time");
//const performance=new Performance(); 
    
class Career extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languageCode: "en-US",
            title: "Career",
            cards: [{
                code: "ae",
                title: "Android Development",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/img1.png",
                linkSourceText: "Get Quote",
                createdAt:"2022-02-02T10:23:59.000Z",
                expiredAt:"2022-04-03T12:59:59.000Z",
                enabled:true
            }, {
                code: "wd",
                title: "Web Development",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/img2.png",
                linkSourceText: "Get Quote",
                createdAt:"2021-11-08T10:22:43.819Z",
                expiredAt:"2022-03-09T10:22:43.819Z",
                enabled:true
            }, {
                code: "dm",
                title: "Database Management",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/img3.png",
                linkSourceText: "Get Quote",
                createdAt:"2022-03-29T10:22:43.819Z",
                expiredAt:"2022-10-03T10:22:43.819Z",
                enabled:true
            }, {
                code: "ba",
                title: "Business Analytics",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/img4.png",
                linkSourceText: "Get Quote",
                createdAt:"2020-10-10T10:22:43.819Z",
                expiredAt:"2022-09-15T10:22:43.819Z",
                enabled:true
            }, {
                code: "dmar",
                title: "Digital Marketing",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/img5.png",
                linkSourceText: "Get Quote",
                createdAt:"2020-09-03T10:22:43.819Z",
                expiredAt:"2022-09-10T10:22:43.819Z",
                enabled:true
            }, {
                code: "va",
                title: "Video Creation",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/img6.png",
                linkSourceText: "Get Quote",
                createdAt:"2021-11-30T10:22:43.819Z",
                expiredAt:"2022-03-01T10:22:43.819Z",
                enabled:false
                
            }]
        
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
        return {languageCode: props.languageCode };
    }
    
    componentDidUpdate(prevProps) {
        fetch("./careerData.json")
          .then(response => response.json())
          .then(result => {     
            
            for (var i = 0; i < result.length; i++) {
              var obj = result[i];
              //var date=new Date();

                if(obj.languageCode === this.props.languageCode) {
                    
                    var cardsFinal=[];
                    for(var j=0; j<this.state.cards.length;j++){

                        var cardObserved=this.state.cards[j];
                        
                        var dateCards=new Date(cardObserved.expiredAt);
                        var dateNow=Date.now();
                        
                        if(dateCards[Symbol.toPrimitive]('number')>dateNow){
                            cardsFinal.push(cardObserved);
                            console.log(cardsFinal);
                        }
                    }
                    
                    this.setState({
                        languageCode: obj.languageCode,
                        title: obj.title,
                        cards:cardsFinal
                    });
                    //console.log(performance.timeOrigin);
                    break;  
              }
            }
            //console.log(date.toLocaleTimeString());
            // console.log(this.state.text1);
        });
    }

    render() {
        return (
            <>
                <div className="my-5">
                    <h1 className="text-center">{this.state.title}</h1>
                </div>

                <div className="container-fluid mb-5">
                    <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {this.state.cards.map((card => 
                                <Card key={card.code} title={ card.title} imgsrc={card.imgsrc} text1="25 applicant" linkSourceText="Detail"/>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Career;