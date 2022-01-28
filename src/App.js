import './App.css';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { ProductList } from './components/ProductList';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path="/" element={<ProductList/>} />
      <Route path="/product/:id" element={ <Product/> } />
     </Routes>
    </div>
  );
}

export default App;
