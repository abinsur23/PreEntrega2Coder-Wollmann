import './app.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import Item from './components/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos a su Whiskeria"} />} />
        <Route exact path="/Item" element={<Whisky/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
