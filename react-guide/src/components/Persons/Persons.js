import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {

    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] get derived state from props');
        return state;
    }

    shouldComponentUpdate(nextProps, upcomingState){
        console.log('[Perons.js] should component update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render(){
        console.log('[Persons.js] rendering');
        return(
            this.props.persons.map((person, index) => {
                return <Person
                    click={this.props.clicked.bind(null, index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    />
            })
        );
    }
}

export default Persons;