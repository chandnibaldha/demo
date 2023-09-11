import "./App.css";
import { useState } from "react";

function App() {
  const [Data, setData] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [EditIndex, setEditIndex] = useState(-1);

  const handalchange = (e) => {
    setNewTask(e.target.value);
  };

 
  const AddTask = () => {
    if (newTask.trim() !== "") {
      if (EditIndex === -1) {
        setData([...Data, newTask]);
      } else {
        const updateTodo = [...Data];
        updateTodo[EditIndex] = newTask;
        setData(updateTodo);
        setEditIndex(-1);
      }
      setNewTask("");
    }
  };

  const handalEdit = (index) => {
    setNewTask(Data[index]);
    setEditIndex(index);
  };

  const handalDlt = (index) => {
    const updateTodo = Data.filter((_, i) => i !== index);
    setData(updateTodo);
  };

  return (
    <>
      <div>
        <h1>ToDo-App</h1>
        <div>
          <input
            type="text"
            placeholder="Add New Task"
            value={newTask}
            onChange={handalchange}
            className="w-1/2 border "
          />
          <button
            onClick={AddTask}
            className="flex flex-col box-content p-2 mx-2"
          >
            {EditIndex === -1 ? "Add Todo" : "update"}
          </button>
        </div>
        <ul>
          {Data.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="" onClick={() => handalEdit(index)}>
                Edit
              </button>
              <button onClick={() => handalDlt(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
