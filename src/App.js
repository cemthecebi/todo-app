import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "Read a book"]);
  const [input, setInput] = useState("");

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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
