import React, { useEffect, useState } from "react";

const DiscountedProducts = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/api/products/discount")
      .then((res) => res.json())
      .then((data) => setDiscountProducts(data));
  }, []);
  return (
    <div className="row g-5">
      {discountProducts &&
        discountProducts.map((product, i) => (
          <div className="col-12 col-md-6 col-lg-3 " key={i}>
            <img className="img-fluid " src={product.image} alt="" />
            <p>{product.title}</p>
          </div>
        ))}
    </div>
  );
};

export default DiscountedProducts;
