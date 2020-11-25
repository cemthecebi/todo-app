import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //this code fires when app.js loads
  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data().todo));

      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // will stop refreshing
    setTodos([...todos, input]);
    setInput(""); // clear input
  };

  return (
    <div className="App">
      <h1>Hello World! </h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          {" "}
          ADD TODO
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
