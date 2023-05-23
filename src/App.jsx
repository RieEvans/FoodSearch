import { useEffect, useState } from "react";
import React from "react";

import "./App.css";
import { foods } from "./components/foods";

function App() {
  const [food, setFood] = useState(""); // The value of the Search Field
  const [foundUsers, setFoundUsers] = React.useState(foods); // Search Results

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = foods.filter((user) => {
        return user.food.toLowerCase().includes(food);
        //use toLowerCase to make it case insensitive
      });
      console.log(results);
      setFoundUsers(results);
    } else {
      console.log(foods);
      setFoundUsers(foods);
    }

    setFood(keyword);
  };

  return (
    <>
      <div className="app bg-indigo-950 text-amber-300 rounded">
        <h1 className="text-3xl font-bold text-center ">Kalenderya</h1>
        <div className="m-auto w-9/12 flex flex-col items-center justify-start h-screen">
          <div className="search w-full">
            <input
              type="search"
              onChange={filter}
              value={food}
              placeholder="Choose food among the list"
              className="p-3 w-full border-solid border-2 border-sky-500 outline-none"
            />
          </div>

          <div className="foodList border-solid border-2 border-sky-500 w-full p-3 rounded-lg ">
            {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map((food) => (
                <li key={food.id} className="list-none font-bold leading-8 ">
                  <a href="#">{food.id}. </a>
                  <a href="#">{food.food} </a>
                  <a href="#">{food.price}</a>
                </li>
              ))
            ) : (
              <h1>No Results Found</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
