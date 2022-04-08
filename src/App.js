import logo from './logo.svg';
import './App.css';

const text = "HelloWorld!";

function App() {
  // ez a jsx kód, nem kell backtick (html-t js-be közvetlen betudjuk írni) --> ez nem HTML kód, csak úgy néz ki. React kiegészítő libary-k átformázzák js objektummá, majd átalakítha html kóddá --> ezt hívjuk virtualDOM-nak...a JS objektum alapján rendelődik újra 
  return (
    // class helyett className, és a selfclose-ing tag-nek a végén van a / jel
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* nem kell ${}, hanem csak {} és betudjuk íratni a változót */}
        <p>{text}</p>
        <p>Other text</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}
// az exportnak egyeznie kell a funkciónevével (ha default szó van akkor csak 1 dolgot lehet exportálni)
export default App;
