import { Component } from "react";
import Card from "./Card";
import Footer from "./Footer";
//const { Performance } = require("w3c-hr-time");
//const performance=new Performance(); 

class Career extends Component {

    constructor(props) {
        super(props);
        this.state = {
            languageCode: "en-US",
            title: "Career",
            cards: [{
                code: "IES",
                title: "IT Engineer Senior",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/IT-Engineer-Senior.jpeg",
                linkSourceText: "Detail",
                createdAt: "2022-02-02T10:23:59.000Z",
                expiredAt: "2022-04-03T12:59:59.000Z",
                enabled: true,
                vacancy: 25,
                requirements: [
                    "Experience in using at least one of these JAVA, C, Spring Framework, JPA, Oracle, MySQL",
                    "Experience developing Package Solution such as Temenos Transact, Oracle Flexcube, Finastra Fusion, etc)",
                    "Experience in customer requirements analysis and project implementation",
                    "Experience in core banking and finance SI",
                    "Application Architecture and MSA design/develop"
                ],
                job_description: [
                    "Package Customizing Corebanking, Payment Gateway, Integrate Digital Sector, Banking Terminal",
                    "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
                    "In-house (Information System, Credit Synthesis System, General Management, Core Banking (Swamitra))"
                ]
            }, {
                code: "IIS",
                title: "IT Infrastructure Senior",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/IT-Infrastructure-Senior.jpeg",
                linkSourceText: "Detail",
                createdAt: "2021-11-08T10:22:43.819Z",
                expiredAt: "2022-05-13T10:22:43.819Z",
                enabled: true,
                vacancy: 10,
                requirements: [
                    "New Server Configuration (I/O and file system design, environment configuration)",
                    "Storage allocation, network configuration, DB link, Security vulnerability",
                    "System AS-IS analaysis, construction plan, implementation plan, establishing test plan"
                ],
                job_description: [
                    "Infrastructure (Transportation, IT Operation Management (Security Control S/W), Banking Terminal, Infrastructure S/W, Integrated Authentification/Authority Management"
                ]

            }, {
                code: "IEJ",
                title: "IT Engineer Junior",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/IT-Engineer-Junior.jpeg",
                linkSourceText: "Detail",
                createdAt: "2022-03-29T10:22:43.819Z",
                expiredAt: "2022-10-03T10:22:43.819Z",
                enabled: true,
                vacancy: 20,
                requirements: [
                    "Experience in using at least one of these JAVA, C, Spring Framework, JPA, Oracle, MySQL",
                    "Experience developing Package Solution such as (Temenos Transact, Oracle Flexcube, Finastra Fusion, etc)",
                    "Experience in customer requirements analysis and project implementation",
                    "Experience in core banking and finance SI",
                    "Application Architecture and MSA design/develop"
                ],
                job_description: [
                    "Package Customizing Corebanking, Payment Gateway, Integrate Digital Sector, Banking Terminal",
                    "Work Specialization Customizing General Management (Purchase Management Only), IT Operation Management (ITSM Service), Credit Card System, Digital Contact Management (AML/FDS)",
                    "In-house (Information System, Credit Synthesis System, General Management, Core Banking (Swamitra))"
                ]
            }, {
                code: "IIJ",
                title: "IT Infrastructure Junior",
                text1: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                imgsrc: "Pictures/IT-Infrastructure-Junior.jpeg",
                linkSourceText: "Detail",
                createdAt: "2020-10-10T10:22:43.819Z",
                expiredAt: "2022-09-15T10:22:43.819Z",
                enabled: true,
                vacancy: 15,
                requirements: [
                    "New Server Configuration (I/O and file system design, environment configuration)",
                    "Storage allocation, network configuration, DB link, Security vulnerability",
                    "System AS-IS analaysis, construction plan, implementation plan, establishing test plan"
                ],
                job_description: [
                    "Infrastructure (Transportation, IT Operation Management (Security Control S/W), Banking Terminal, Infrastructure S/W, Integrated Authentification/Authority Management "
                ]
            }]
        }
    }

    changeLanguage = (val) => {
        this.props.changeLanguage(val);
    }
    componentWillUnmount() {

    }

    onLanguageClick = (value) => {
        this.setState({
            languageCode: value
        }, () => {
            this.changeLanguage(this.state.languageCode);
        });
    }

    componentDidUpdate(prevProps) {
        fetch("./careerData.json")
            .then(response => response.json())
            .then(result => {

                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];

                    if (obj.languageCode === this.props.languageCode) {

                        var cardsFinal = [];
                        for (var j = 0; j < obj.cards.length; j++) {

                            var cardObserved = obj.cards[j];

                            var dateCards = new Date(cardObserved.expiredAt);
                            var dateNow = Date.now();


                            if (dateCards[Symbol.toPrimitive]('number') > dateNow) {
                                cardsFinal.push(cardObserved);
                                console.log(cardsFinal);
                            }
                        }

                        this.setState({
                            languageCode: obj.languageCode,
                            title: obj.title,
                            cards: cardsFinal
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
                <div className="container" style={{ marginTop: 100 }}>
                    <div className="my-5" style={{ color: "rgb(255, 188, 0)" }} >
                        <h1 className="text-center">{this.state.title}</h1>
                    </div>
                    <div className="col-11 mx-auto">
                        <div className="row gy-4">
                            {this.state.cards.map((card =>
                                <Card code={card.code} key={card.code} title={card.title}
                                    imgsrc={card.imgsrc} text1={card.expiredAt} linkSourceText={card.linkSourceText}
                                    languageCode={this.state.languageCode} />
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Career;