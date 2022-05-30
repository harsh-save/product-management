import './App.css';
import { AddProduct } from './Components/AddProduct';
import { ProductList } from './Components/ProductList';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {UpdateProduct} from './Components/UpdateProduct'

function App() {

  const [toogle, setToogle] = useState(false)

  return (
    <div className="App">
      
      <div className="container">
        <br/>
      <h1>Products CRUD Application</h1>
      <br />
      <button className="btn btn-success" onClick={()=>setToogle(!toogle)}>Add Product</button>
      {toogle && <AddProduct/>}
      <br />
      <Router>
      {/* <ProductList/> */}
        <Routes>
          <Route exact path='/' element={<ProductList/>}/>
          <Route  path="/products/:id"  element={<UpdateProduct />} />
        </Routes>
      </Router>
      
      </div>
    </div>
  );
}

export default App;
