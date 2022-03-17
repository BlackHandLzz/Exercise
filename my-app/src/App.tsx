import React from 'react';
import Hello from './components/Hello';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
function App() {
  return (
    <div className="App">
      <Hello />
      <Button> Hello </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com">  Baidu Link  </Button>
    </div>
  );
}

export default App;
