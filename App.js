import logo from './logo.svg';
import './App.css';
import MarketActivity from './pages/MarketActivity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MarketActivity></MarketActivity>
      </header>
    </div>
  );
}

export default App;
