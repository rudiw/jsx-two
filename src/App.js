import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {

  state = {
    userInput: '',
    userInputList: [],
    visible: false
  }

  onChangeUserInput = (event) => {
    const split = event.target.value.split('');
    // console.log('split: ' + split);
    const curUserInputList = split.map( (char, idx) => {
      return {
        value: char,
        id: idx
      };
    });
    // console.log('curUserNameList: ' + curUserInputList);

    this.setState({
      userInput: event.target.value,
      userInputList: curUserInputList
    });
  }

  removeCharComponent = (rowIdx) => {
    const curUserInputList = [
      ...this.state.userInputList
    ]
    curUserInputList.splice(rowIdx, 1);

    //1. 
    // const curArrayCharUserInput = this.state.userInput.split('');
    // curArrayCharUserInput.slice(rowIdx, 1);
    // const curUserInput = curArrayCharUserInput.join('');
    //2.
    // console.log('rowIdx: ' + rowIdx);
    const curUserInput = this.state.userInput.split('');
    // console.log('curUserInput: ' + curUserInput);
    curUserInput.splice(rowIdx, 1);
    const newUserInput = curUserInput.join('');
    // console.log('newUserInput: ' + newUserInput);

    this.setState({
      userInputList: curUserInputList,
      userInput: newUserInput
    });
    // console.log('onRemove at ' + rowIdx);
  }

  render() {

    let charComponentList = null;

    charComponentList = (
      <div>
        {
          this.state.userInputList.map( (userInput, index) => {
            return <CharComponent
                userInput={userInput.value}
                key={userInput.id}
                onRemove={() => this.removeCharComponent(index)}
             />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <input
          type="text"
          onChange={(event) => this.onChangeUserInput(event)}
          value={this.state.userInput}
        />

        <p>User Input: {this.state.userInput}</p>

        <ValidationComponent
          length={this.state.userInput.length}
        />

        {charComponentList}

      </div>
    );
  }
}

export default App;
