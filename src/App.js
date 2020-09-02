import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "John Doe"
  }

  highlightNameHandler = (newUsername) => {
      this.setState({
          username: newUsername
      });
  }

  initialPositionHandler = (newUsername) => {
      this.setState({
          username: newUsername
      });
  }

  changeNameHandler = (Event) => {
      this.setState({
          username: Event.target.value
      });
  }

  render() {
      const inlineStyleWrapper = {
          padding: "10px",
          margin: "auto"
      };

      return (
          <div className="App" style={inlineStyleWrapper}>
              <UserOutput
                  username={this.state.username}
                  enter={this.highlightNameHandler.bind(this, "JOHN DOE")}
                  leave={this.initialPositionHandler.bind(this, "John Doe")}
              />
              <UserInput
                  change={this.changeNameHandler}
              />
          </div>
      );
  }
}

export default App;
