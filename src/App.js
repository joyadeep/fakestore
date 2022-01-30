import './App.css';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { ProductList } from './components/ProductList';
import {Route,Routes,Navigate} from 'react-router-dom';
import {Cart} from "./components/Cart";

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={<Navigate replace to="/fakestore" />} />
       <Route path="/fakestore" element={<ProductList/>} />
      <Route path="/product/:id" element={ <Product/> } />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Navigate replace to="/fakestore" />} />
     </Routes>
    </div>
  );
}

export default App;
