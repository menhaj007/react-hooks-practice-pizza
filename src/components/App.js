import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
const API = "http://localhost:3000/pizzas";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [currentPizza, setCurrent] = useState(null); //start with a false value then change it to truthy.

  useEffect(() => {
    async function fetchPizzas() {
      const res = await fetch(API);
      const pizzaData = await res.json();
      setPizzas(pizzaData);
    }
    fetchPizzas();
  }, []);

  const selectPizza = id => {
    const newCurrent = pizzas.find(pizzaObj => pizzaObj.id === id);
    // console.log(newCurrent)
    setCurrent(newCurrent)

  }
  const onEdit = (name, value) => {
    setCurrent({...currentPizza, [name]:value})
  }
  const setUpdatedPizza = (updatedPizza) => {
    const newPizzas = pizzas.map( p => p.id === updatedPizza.id ? updatedPizza: p);
    setPizzas(newPizzas);
    setCurrent(null);
  }

  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} onEdit={onEdit} setUpdatedPizza={setUpdatedPizza}/>
      <PizzaList pizzas={pizzas} selectPizza={selectPizza}/>
    </>
  );
}

export default App;
