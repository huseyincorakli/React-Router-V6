import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Main() {
  const [data, setData] = useState([]);
  const { query } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://dummyjson.com/products/category/${query}`)
      .then((res) => setData(res.data.products))
      .catch()
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="main">
      {loading && <div>Loading...</div>}
      {data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
}

export default Main;
