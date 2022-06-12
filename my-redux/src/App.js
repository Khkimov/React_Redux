import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<ProductListing/>} />
      <Route path="/product/:productId" exact element={<ProductDetail/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
