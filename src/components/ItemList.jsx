import React, { useEffect, useState } from "react";
import productsJson from "./productos.json";
import Item from "./Item"; 


function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsJson);
    }, 2000);
  });
}

export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
