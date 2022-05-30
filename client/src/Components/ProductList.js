import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProductList = () => {
  //STATES
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get("http://localhost:3001/products").then((results) => {
        //console.log(results.data);
        setProducts(results.data);
      });
    };
    fetchProducts();
  }, [products]);

  const deleteProduct = async (id) => {
    console.log("delete");
    await axios
      .delete(`http://localhost:3001/products/delete/${id}`)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/products/:id" exact element={<UpdateProduct />} />
        </Routes>
      </Router> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Year of Launch</th>
            <th scope="col">Review</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <th scope="row">{index}</th>
              <td>{product.name}</td>
              <td>{product.year}</td>
              <td>{product.review}</td>
              <td>
                <span>
                  <Link to={`/products/${product._id}`}>update</Link>
                  <button
                    onClick={() => {
                      deleteProduct(product._id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
