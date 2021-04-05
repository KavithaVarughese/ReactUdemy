import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

// User Input and Output
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

const app = props => {

  //Module 4 states and handlers
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26},
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const [showPersons, setShowPersons] = useState(false);
  console.log(personsState, otherState, showPersons);

  const deletePersonHandler = (personIndex) => {
    // slice is used to copy the array otherwise is reference call
    //const persons = personsState.persons.slice();
    // or use spread operator (...)s
    const persons = [...personsState.persons];
    persons.splice(personIndex,1);
    setPersonsState({persons:persons});

  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };
    // or 
    // const person = Object.assign({}, personsState.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({persons:persons});
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    console.log(showPersons);
    setShowPersons(!doesShow);
  }

  //==================================================
   // Assignment 2 states and handlers

   const [usernameState, setUserNameState] = useState({
    username: "supermax"
  });

  const usernameChangedHandler = (event) => {
    setUserNameState({
      username: event.target.value
    });
  }

  //==================================================

  let persons = null;

  if (showPersons) {
    persons = (
      <div >
        {personsState.persons.map((person, index) => {
          return <Person 
            click={deletePersonHandler.bind(this, index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)}
            />
        })}
        {/* <Person 
          name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person 
          name = {personsState.persons[1].name} 
          age = {personsState.persons[1].age} 
          click={switchNameHandler.bind(this, 'Max!')}
          changed={nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
        name = {personsState.persons[2].name} age = {personsState.persons[2].age}/> */}
      </div>
    );
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
        onClick = {togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
