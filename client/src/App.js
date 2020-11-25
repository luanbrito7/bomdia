import './App.css';
import api from './api'
import Header from './Header'
import BomDia from './BomDia'
import Oqueeh from './Oqueeh'
import Exemplos from './Exemplos'

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
  // requestAPI()
  return (
    <div >
      <Header/>
      <BomDia/>
      <Oqueeh/>
      <Exemplos/>
    </div>
  );
}

export default App;
