import run from './image_run.gif';
import './app2.css';
import Button from './components/button/button.js'

function App2() {
    return (
      <>
        <div className="content-container">
          <img src={run} alt="running-man" />
          <p>Is it a Jif or a Gif?</p>
          <Button/>
        </div>
      </>
    );
  }
  
  export default App2;