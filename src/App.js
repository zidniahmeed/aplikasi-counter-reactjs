import { useState } from "react";
import shoppingIcon from "./assets/shopping-icon.svg";
import "./App.css";
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import classnames from "classnames";


function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "susu", count: 1 },
    { title: "jus", count: 1 },
    { title: "kopi", count: 1 },
  ]);

  console.log(value);

  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shoping list</h1>
      </nav>

      <section className="container">
        <form action="" className="form">
          <input
            type="text"
            className="input"
            placeholder="List"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <button type="submit" className="add-button">
            add
          </button>
        </form>
        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo,index)=>{
              return(
                <div className="todo" key={index}>
                  {todo.title}
                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>

                    <button className="todo-action-button">
                      <img src={minusIcon} alt="minus icon" srcset="" />
                      
                    </button>

                    <button className="todo-action-button">
                      <img src={plusIcon} alt="minus icon" srcset="" />
                      
                    </button>
                  </div>
                </div>

              )
            })}
          </div>
        ): (
          <div>kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
