import logo from './logo.svg';
import './App.css';
import api from './api'

function App() {
  const requestAPI = async function () {
    const { data } = await api.post({
      type: "dia",
      season: "verao",
      theme: "natal",
      color: "vermelho"
    })
    console.log(data)
  }
  requestAPI()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
