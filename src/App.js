
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar title="SIT" aboutText="Parth"></Navbar>
      {/* <TextForm heading="Intexr Text to Analyse Below"></TextForm> */}
      <AboutUs heading="About Us"></AboutUs>
    </>
  );
}

export default App;
