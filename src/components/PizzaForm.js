import React from "react";

function PizzaForm({currentPizza, onEdit, setUpdatedPizza}) {
  if (!currentPizza)return null;
  
  const {id, topping, size, vegetarian} = currentPizza;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqObj = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(currentPizza)
    }
    const res = await fetch("http://localhost:3000/pizzas/"+id ,reqObj)
    const updatedPizza = await res.json()
    setUpdatedPizza(updatedPizza);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={topping}
            placeholder="Pizza Topping"
            onChange={(e) => onEdit(e.target.name, e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={(e) => onEdit(e.target.name, e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={(e) => onEdit(e.target.name, e.target.value ==="Vegetarian")}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={(e) => onEdit(e.target.name, e.target.value ==="Vegetarian")}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
