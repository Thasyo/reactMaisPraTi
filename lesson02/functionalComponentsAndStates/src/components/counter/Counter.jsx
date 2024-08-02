import { useState } from "react"
import styles from '../counter/Counter.module.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (

        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Contando: {count}</h2>
                <button onClick={() => setCount(count - 1)} className={styles.btns}>Diminuir</button>
                <button onClick={() => setCount(count + 1)} className={styles.btns}>Aumentar</button>
            </div>
        </>

    )

}

export default Counter