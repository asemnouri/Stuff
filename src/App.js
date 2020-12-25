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
//TASK ONE PART ONE(multipleoptions)
//search is not case-sensitive 
//you can also scroll throw it when the items are increased


//TASK ONE PART TWO(phone)
//when clicking on the number input the seach bar and the country will appear
//when clicking on the search bar all the countries will appear
//search is not case-sensitive 
//you can also scroll throw it when the items are increased


//TASK TWO
//all properities concerning task two are done using react-redux
//also using redux-persist to store the wanted data in local-storage so that when refreshing the data will remain
//redux-logger for oreviewing the state of redux before and after the action
//material-ui for styling purposes
//for the first bar(tickets)
//all of tickects are (not-seen messages) except the one you are on (purpile),when clicking on one it will remove the marker
//when clicking on snooze it will drop it to the snoozed bar
//you have to select a goal and a title (title letters must be less than 25 letters) in-order to click proceed
//button then it will put the goal in new task place and the timer (in-minutes) will start
//if you click on the inbox icon it will hide it and redirect you to the next ticket 
//and clicked on the inbox for all of them it will redirct ot home page 
//there is also the chat that will be enabled when proceed botton is clicked it will be scrollable
//when the messages are increased 



export default App;
