import { useState } from "react";
import React from "react";
import axios from "axios";

export const AddProduct = () => {
  //STATES
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");

  //Notofication STATES
  const[error, setError] = useState(false)
  const[submitted, setSubmitted] = useState(false)

  const handleButton = (e) => {
    e.preventDefault();
    if (name === "" || year===""||review === ""){
      setError("The Form is missing required information")
    }
    else{
    axios.post("http://localhost:3001/add", {
      name: name,
      year: year,
      review: review,
    });
    setSubmitted(true);
  }
  };

  return (
    <div>
      <br />
      {error ? <div class="alert alert-danger" role="alert">{error}</div> : null}
      {submitted ?<div class="alert alert-success" role="alert">Product registered successfully</div> : null}
      <form>
        <div className="row">
          <div className="col-6">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name of the product
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        </div>
        <div className="col-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Year of launch
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
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
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>
        </div>
        <br />
        <button type="submit" class="btn btn-primary" onClick={handleButton}>
          Submit
        </button>
        
      </form>
    </div>
  );
};
