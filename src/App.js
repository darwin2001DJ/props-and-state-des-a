import React from "react";
import "./App.css";
// import CSK form './images/CSK.png';
// import MI form './images/MI.png';
import Header from "./Header.js";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "180",
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="team1">CHENNAI SUPER KINGS</div>
        {/* <img id="image1" src={CSk}/> */}
        <div id="team2">MUMBAI INDIANS</div>
        {/* <img id="image2" src={MI}/> */}
        <h4>MI has to score {this.state.msg} against CSK to win this T20</h4>
      </React.Fragment>
    );
  }
}
export default App;
