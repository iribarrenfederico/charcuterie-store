import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    db();
  }, [title]);

  async function db() {
    try {
      const call = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=launchpad"
      );
      const result = await call.json();
      console.log(result.results[0]);
      setItem(result.results.find(i => i.title === title));
    } catch (err) {
      console.log("Paso algo feo", err);
    }
  }

  return (
    <>
      <h2>Detalle</h2>
      {item.length === 0 ? (
        <p>Loading..</p>
      ) : (
        <div>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <img src={item.thumbnail} alt="foto" style={{ width: 200 }} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;