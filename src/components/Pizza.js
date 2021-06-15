import React from "react";

function Pizza( {id, size, topping, vegetarian, selectPizza} ) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => selectPizza(id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
