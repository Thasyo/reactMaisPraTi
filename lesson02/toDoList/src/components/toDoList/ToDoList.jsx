import { useState } from "react"
import styles from "../toDoList/ToDoList.module.css"
const ToDoList = () => {

    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const addToDo = () => {
        if(text !== ""){
            setList([...list, text])
        }
        setText("")
    }

    return (

        <>
            <div className={styles.container}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={addToDo}>Enviar</button>
            
                <ul>
                    {list.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </>

    )

}

export default ToDoList