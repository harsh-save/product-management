import { useState } from "react";
import React from "react";
import axios from "axios";

export const AddProduct = () => {
  //STATES
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");

  const handleButton = () => {
    axios.post("http://localhost:3001/add", {
      name: name,
      year: year,
      review: review,
    });
  };

  return (
    <div>
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
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
