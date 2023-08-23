import './app.css'
import Saludo from './components/ItemListContainer';
import Navbar from './components/NavBar';



function App() {

    return (
      <>
      <Navbar />
      <Saludo texto="Bienvenido a su Whiskería" color="blue" /> 
      </>
  );
};

export default App

