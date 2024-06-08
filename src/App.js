
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black'
    } else {
      setMode('light')
      document.body.style.background = 'white'
    }
  }
  return (
    <>
      <Navbar title="SIT" aboutText="Parth" mode={mode} toggleMode={toggleMode}></Navbar>
      <TextForm heading="Intexr Text to Analyse Below"></TextForm>
    </>
  );
}

export default App;