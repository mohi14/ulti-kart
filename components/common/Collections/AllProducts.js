import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/api/products/show")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div className="row g-5">
      {allProducts &&
        allProducts.map((product, i) => (
          <div className="col-12 col-md-6 col-lg-3 " key={i}>
            <img className="img-fluid " src={product.image} alt="" />
            <p>{product.title}</p>
          </div>
        ))}
    </div>
  );
};

export default AllProducts;
