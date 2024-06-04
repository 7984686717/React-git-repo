
import './App.css';
import img1 from './Image/01.jpg';

function App() {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Context Us</li>
        </ul>
      </nav>

      <p className="lorem-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique doloribus corrupti laborum voluptate qui iure libero et, voluptatibus eligendi tempore culpa illo consequatur repudiandae magnam reprehenderit voluptas dignissimos neque.
      </p>

      <img src={img1} alt="img1" width="100%"/>
    </header>
    </>
  );
}

export default App;
