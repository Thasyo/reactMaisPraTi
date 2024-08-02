import { useState } from "react"
import styles from '../text/Text.module.css'
const Text = () => {

    const [textCopy, setTextCopy] = useState("")

    return (

        <>
            <div className={styles.title}>
                <input 
                    type="text" 
                    placeholder="escreva aqui" 
                    value={textCopy} 
                    onChange={(e) => setTextCopy(e.target.value)} 
                    className={styles.input}
                />
                
                <div className={styles.divText}>
                    <p>{textCopy}</p>
                </div>
            </div>
        </>

    )

}

export default Text