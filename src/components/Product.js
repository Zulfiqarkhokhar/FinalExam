import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`, {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              className="img-fluid rounded border"
              alt={product.title}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <div className="product-details">
              <h2>{product.title}</h2>
              <p className="text-muted">{product.description}</p>
              <h3 className="text-success">${product.price}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
