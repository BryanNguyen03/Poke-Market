import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Store = () => {
  // list of products on sale
  const [productList, setProductList] = useState([]);
  // Filter products by price
  const [priceFilter, setPriceFilter] = useState(0);
  // Search bar
  const [searchFilter, setSearchFilter] = useState("");

  return <div className="App">Store Page</div>;
};

export default Store;
