import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './Demo/DemoOutput';
import Button from './UI/Button';

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParaHandler = useCallback(() => {
    if(allowToggle){
      setShowPara((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle </Button>
      <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
