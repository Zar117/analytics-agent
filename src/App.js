import './App.css';
import { Joke } from './Components/Joke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Joke/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a Test App
        </a>
      </header>
    </div>
  );
}

export default App;
