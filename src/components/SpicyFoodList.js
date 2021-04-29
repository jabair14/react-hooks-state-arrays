import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];

    setFoods(newFoodArray);
    console.log(newFood);
  }
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleLiClick(id){
    // const newFoodArray = foods.filter((food) => food.id !==id);
    // setFoods(newFoodArray);
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food, 
          heatLevel: food.heatlevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const[filterBy, setFilterBy] = useState('All');

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  <select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>;
  
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
