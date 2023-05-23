import Titulos from "./components/Titulos"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  //aqui es donde podemos escribir logica

  return (
    // aqui puedo escribir un poquito de logica
    //<> es un Fragmento
    <>
      {/* aqui va el maquetado del componente */}
      {/* <Titulos aqui va los props></Titulos> */}
      <Titulos nuevoTitulo="Titulo hecho con Props"/>
    </>
  );
}

export default App;