import './App.css';
import React from "react"


import MultipleOptions from "./components/MultipleOptions/MultipeOptions.jsx"
import Phone from "./components/phone/phone.jsx"
import TicketSystem from "./components/ticketSystem/ticketSystem.jsx"
import { Route, Switch } from 'react-router-dom';
import Home from "./components/home/home"
class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/multipleoptions' render={(props) => <MultipleOptions {...props} />} />
          <Route exact path='/phone' render={(props) => <Phone {...props} />} />
          <Route exact path='/:id' render={(props) => <TicketSystem {...props} />} />
          <Route exact path='/' render={(props) => <Home {...props} />} />
        </Switch>
      </div>
    );
  }
}
//task two is done using react-redux
//also using redux-persist to store the wanted data in local-storage so that when refreshing the data will remain
//redux-logger for oreviewing the state of redux before and after the action
//material-ui for styling purposes




export default App;
