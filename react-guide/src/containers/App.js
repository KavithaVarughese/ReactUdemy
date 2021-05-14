import React, { Component } from 'react';
import classes from './App.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[Apps.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26},
    ],
    otherState:'some other value',
    showPersons:false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  deletePersonHandler = (personIndex) => {
    // slice is used to copy the array otherwise is reference call
    //const persons = personsState.persons.slice();
    // or use spread operator (...)s
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  componentWillMount(){
    console.log("Component will mount");
  }

  componentDidMount(){
    console.log('Component Did Mount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // or 
    // const person = Object.assign({}, personsState.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    console.log(this.state.showPersons);
    this.setState({showPersons:!doesShow});
  }

  render(){
    console.log('[App.js] rendered');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
        </div>
      );
      }

    return (
      <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
      </div>
    );
  }
  //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'Hi, I am a React App'));
}


export default App;
