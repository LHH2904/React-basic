import {Button, TextField} from "@mui/material";
import {Todo} from "./components/Todo";
import {useState} from "react";

type Todo = {id: string ;name:string}

function App() {
    const [todoList,setTodoList] = useState<Todo[]>([]); // [state, setState]
    const [newTodoString,setNewTodoString] = useState("");

    const onNewTodoChange = (e) => {
        console.log({e});
        setNewTodoString(e.target.value);
    }
  return (
    <>
        <p>This is Todo App</p>
        <div>
            <TextField size="small" value={newTodoString} onChange={onNewTodoChange}></TextField>
            <Button variant="contained">Thêm</Button>
        </div>
        <div>
            {todoList.map((todo) => {
                    return <Todo name={todo.name}/>;
            })}
        </div>
    </>
  )
}

export default App
