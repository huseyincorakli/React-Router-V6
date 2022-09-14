import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch()
      .finally(() => setLoading(false))
  }, []);
  return (
    <div className="home" >
      <nav className="homeNavbar">
        <ul>
        <h3>Categories</h3>
        {loading && <div>Loading...</div>}
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`${category}`}>{category} </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
