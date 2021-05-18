import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter";
import { useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducst] = useState([]);
  const { category = undefined } = useParams();

  useEffect(() => {
    db();
  }, []);

  async function db() {
    try {
      const call = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=launchpad"
      );
      const result = await call.json();
      setProducst(result.results);
    } catch (err) {
      console.log("Ocurrió un problema", err);
    }
  }

  return (
    <>
      <h1>Electro Music</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((p, index) => (
          <div key={index}>
            <h4>{p.title}</h4>
            <p>{p.price}</p>
            <Link to={`/item/${p.title}`}>
              <img src={p.thumbnail} alt="foto" style={{ width: 200 }} />
            </Link>
            <Counter />
          </div>
        )) 
      )}
    </>
  );
};

export default Home;
