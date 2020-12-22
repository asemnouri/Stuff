import './App.css';
import React from "react"


import MultipleOptions from "./components/MultipleOptions/MultipeOptions.jsx"
import TicketSystem from "./components/ticketSystem/ticketSystem.jsx"
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <div className="App">
        {/* <MultipleOptions/> */}
        <Switch>
          <Route exact path='/:id' render={(props) => <TicketSystem {...props} />} />
          <Route exact path='/' render={(props) => <TicketSystem {...props} />} />
        </Switch>
      </div>
    );
  }
}



export default App;
