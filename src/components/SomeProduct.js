import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SomeProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then(function (response) {
        // handle success
        console.log(response);
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center p-4">Products</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 col-lg-3 col-sm-12 mb-3" key={product.id}>
              <Card style={{ width: "18rem", height: "100%", padding: "15px" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "60%", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.description}
                  </Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
