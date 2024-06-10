
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const [btnText, newbtnText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black'
      document.body.style.color = 'white'

      newbtnText('Enable dark mode')
    } else {
      setMode('light')
      document.body.style.background = 'white'
      document.body.style.color = 'black'

      newbtnText('Enable light mode')
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Parth" mode={mode} toggleMode={toggleMode} btntext={btnText}></Navbar>
      <TextForm heading="Intexr Text to Analyse Below" mode={mode} toggleMode={toggleMode}></TextForm>
    </>
  );
}

export default App;