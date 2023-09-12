import './app.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';



function App() {

    return (
      <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a su Whiskería" color="blue" /> 
      </>
  );
};

export default App

