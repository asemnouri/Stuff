import './App.css';
import React from "react"


import MultipleOptions from "./components/MultipleOptions/MultipeOptions.jsx"
import TicketSystem from "./components/ticketSystem/ticketSystem.jsx"


class  App extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){

    return (
      <div className="App">
       {/* <MultipleOptions/> */}
        <TicketSystem/>
      </div>
    );
  }
}



export default App;
