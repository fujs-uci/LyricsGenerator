import './app.css';
import Header from './components/Header.js';
import Settings from './components/Settings.js';

function App() {
  return (
    <div className="app">
      {/** header */}
      <Header/>
      {/** settings */}
      <Settings/>
    </div>
  );
}

export default App;
