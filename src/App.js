import './App.css';
import React from "react"
import { connect } from "react-redux"

import MultipleOptions from "./components/MultipleOptions/MultipeOptions.jsx"

import { setUserName } from "./Redux/User/userActions"

class  App extends React.Component {
  constructor(props) {
    super(props)

  }
  render(){

    return (
      <div className="App">
       <MultipleOptions/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.currentuser
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUserName: user => dispatch(setUserName(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
