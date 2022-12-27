import './App.css';
import ResolutionEntry from '../ResolutionEntry/ResolutionEntry.jsx'
import Countdown from '../Countdown/Countdown.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Countdown />
      <ResolutionEntry />
      </header>
    </div>
  );
}

export default App;
