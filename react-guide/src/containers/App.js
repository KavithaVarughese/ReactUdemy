import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

  let persons = null;
  if (showPersons) {
    persons = (
      <div >
        <Persons 
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
          />
      </div>
    );
    }

  return (
    <div className="App">
        <Cockpit 
          showPersons={showPersons}
          persons={personsState.persons}
          clicked={togglePersonsHandler}
        />
        {persons}
    </div>
  );
  //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi, I am a React App'));
}


export default app;
