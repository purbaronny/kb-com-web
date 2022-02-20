import { Component } from "react";

class History extends Component {

    state = {
        languageCode: "en-US",
        title: "History",
        text1: "Indonesia is the biggest archipelago country in the world; With 17 thousand islands, it is difficult to carry out infrastructure development evenly. Sellers move to big cities for better markets, while consumers have limited access to what they need. This has led to high urbanization which has led to the accumulation of necessities in big cities."    
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
        
      }
    
      componentDidUpdate(prevProps) {
        fetch("./historyData.json")
          .then(response => response.json())
          .then(result => {        
            for (var i = 0; i < result.length; i++) {
              var obj = result[i];
              if(obj.languageCode == this.props.languageCode) {
                this.setState({
                  languageCode: obj.languageCode,
                  title: obj.title,
                  text1: obj.text1,
                 });
                 break;  
              }
            }
            // console.log(result);
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
                    {this.state.text1}
                </div>
            </>
        );
    }
}

export default History;