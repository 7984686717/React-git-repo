
import { useState } from 'react';
import './App.css';
import Navbar from './Compornetns/Navbar';
import TextBar from './Compornetns/TextBar';

function App() {

  const [mode, setmode] = useState('light');

  const [btntext, setbtntext] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background="black";
      document.body.style.color="white";

      setbtntext('Enable Light Mode');
    } else {
      setmode('light');
      document.body.style.background="white";
      document.body.style.color="black";

      setbtntext("Enable Dark mode");
    }
  }
  return (
    <>
    <Navbar heading='SIT' about='About Ud' mode={mode} btntext={btntext} toggleMode={toggleMode}/>
    <TextBar title="Inter Your Text" mode={mode} toggleMode={toggleMode}></TextBar>
    </>
  );
}

export default App;
