import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red'
    };
    return <input 
        onChange={props.newUsername} 
        type="text" 
        style={style}
        value={props.username} 
    />
};

export default userInput;