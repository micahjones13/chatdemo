import React, { Component } from "react";
import "./App.css";
import Form from "./components/form/Form.js"
import firebase from "firebase";
import firebaseApp from "./firebase.js";
firebase.initializeApp(firebaseApp);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
          
          <h2>SIMPLE APP WITH REACT</h2>{" "}
          {!this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            <button
              className="app__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          )}
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default App;

// import React from 'react';
// import ChatRoom from './components/ChatRoom.js';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
