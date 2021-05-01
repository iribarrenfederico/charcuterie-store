import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  function handleShow() {
    setShow(!show);
  }

  const text = count === 1 ? "producto" : "productos";

  const Show = () => {
    return (
      <div className="alert alert-dismissible alert-secondary">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={handleShow}
        >
          &times;
        </button>
        <strong>Muy bien!</strong> Agregaste {count} {text} al{" "}
        <Link to="/cart" className="alert-link">
          carrito
        </Link>
        .
      </div>
    );
  };
  return (
    <>
      <div
        className="jumbotron"
        style={{
          display: "flex",
          width: 250,
          margin: 10,
          justifyContent: "center"
        }}
      >
        <button
          className="btn btn-danger"
          onClick={sub}
          style={{ margin: 10 }}
          disabled={show || count === 0}
        >
          -
        </button>
        <h5>{count}</h5>
        <button
          className="btn btn-success"
          onClick={add}
          style={{ margin: 10 }}
          disabled={show || count === 5}
        >
          +
        </button>
        <button
          className="btn btn-info"
          onClick={handleShow}
          style={{ margin: 10 }}
          disabled={show || count === 0}
        >
          Agregar
        </button>
      </div>
      {show && <Show />}
    </>
  );
};
export default Counter;
