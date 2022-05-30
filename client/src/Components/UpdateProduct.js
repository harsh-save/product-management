import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

export const UpdateProduct = () => {
  //STATES
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");

  //Notofication states
  const[error,setError]= useState('');
  const[submitted,setSubmitted]= useState(false);

  const { id } = useParams();

  //FETCH DATA
  useEffect(() => {
    const fetchProduct = async () => {
      axios.get(`http://localhost:3001/products/${id}`).then((result) => {
        result.data.map((product) => {
          setName(product.name);
          setYear(product.year);
          setReview(product.review);
        });
        //console.log(result.data);
      });
    };
    fetchProduct();
  }, []);

  //UPDATE DETAILS
  const handleClick = async (e) => {
    e.preventDefault();
    if (name === "" || year===""||review === ""){
      setError("The Form is missing required information")
    }
    else{
    await axios
      .patch(`http://localhost:3001/products/update/${id}`, {
        name: name,
        year: year,
        review: review,
      })
      .then((result) => {
        console.log(result);
        setSubmitted(true);
      });
    }
  };

  return (
    <div>
      <br />
      {error ? <div class="alert alert-danger" role="alert">{error}</div> : null}
      {submitted ?<div class="alert alert-success" role="alert">Product registered successfully</div> : null}
      <br />
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name of the product
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Year of launch
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Review
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleClick}>
          Update information
        </button>
      </form>
    </div>
  );
};
