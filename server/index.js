import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ProductModel } from "./Models/Products.js";

//PORT
const PORT = 3001;
//APP
const app = express();

//MIDDLEWAREs
app.use(express.json());
app.use(cors());

//DATABASE CONNECTION
mongoose.connect("mongodb://localhost:27017/crud", { useNewUrlParser: true });

//ROUTES

//1. INSERT OPERATION
app.post("/add", async (req, res) => {
  const name = req.body.name;
  const year = req.body.year;
  const review = req.body.review;
  const product = new ProductModel({ name: name, year: year, review: review });
  await product.save();
  res.send("Data inserted successfully to the database");
});

//2.RETREIVE OPERATION
app.get("/products", async (req, res) => {
  ProductModel.find({}, (err, result) => {
    if (err) {
      res.send("Products could not be fetched");
    }
    if (result) {
      res.send(result);
    }
  });
});

//3. RETRIEVE BY ID
app.get("/products/:id", (req, res) => {
  const id = req.params["id"];
  ProductModel.find({ _id: id }, (err, result) => {
    if (err) {
      res.send("Product not found");
    } else {
      res.send(result);
    }
  });
});

//4. UPDATE
app.patch("/products/update/:id", async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(updatedProduct);
  } catch (err) {
    res.send("Product could not be updated");
  }
});

//5.DELETE
app.delete("/products/delete/:id", async (req, res) => {
  try {
    const deleteproduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.send(deleteproduct);
  } catch (err) {
    res.send("Product could not be deleted");
  }
});

//SERVER
app.listen(PORT, () => {
  console.log("Server is running");
});
