import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

export const UpdateProduct = () => {
  //STATES
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [review, setReview] = useState("");

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
  const handleClick = async () => {
    await axios
      .patch(`http://localhost:3001/products/update/${id}`, {
        name: name,
        year: year,
        review: review,
      })
      .then((result) => {
        console.log(result);
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
