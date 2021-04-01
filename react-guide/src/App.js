import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

// User Input and Output
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

const app = props => {

  //Module 3 states and handlers
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26},
    ]
  });

  const [otherState, setOtherState] = useState('some other value')
  console.log(personsState, otherState);

  const switchNameHandler = (newName) =>{
    // console.log('Was clicked');
    // this.state.persons[0].name = "Maximillian";
    setPersonsState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27},
      ]
    });
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27},
      ]
    });
  }

   // Assignment 1 states and handlers

   const [usernameState, setUserNameState] = useState({
    username: "supermax"
  });

  const usernameChangedHandler = (event) => {
    setUserNameState({
      username: event.target.value
    });
  }


  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding:'8px',
    cursor: 'pointer'  
  };

  return (
    <div className="App">
      <div className="Module_3">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick = { () => switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person 
          name = {personsState.persons[1].name} 
          age = {personsState.persons[1].age} 
          click={switchNameHandler.bind(this, 'Max!')}
          changed={nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
          name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div>

      <div className="Assignment_1">
      <p>Assignment 1</p>
      <UserInput 
        newUsername={usernameChangedHandler}
        username={usernameState.username}
      />
      <UserOutput username= {usernameState.username}/>
      <UserOutput username= {usernameState.username}/>
      <UserOutput username= {usernameState.username}/>
      </div>
    </div>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi, I am a React App'));
}


export default app;
