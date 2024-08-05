import { useState } from "react"
import styles from "../tabbedBrowsing/TabbedBrowsing.module.css"

const listContent = [
    ["Antes, era um sonho !"],
    ["Agora, o sonho se tornou real!"],
    ["Depois, o sonho foi renovado e realizaremos juntos!"]
]

const TabbedBrowsing = () => {

    const [positionContent, setPositionContent] = useState();

    return (

        <>
            <div className={styles.btns}>
                <button onClick={() => setPositionContent(0)} className={styles.btn}>Antes</button>
                <button onClick={() => setPositionContent(1)} className={styles.btn}>Agora</button>
                <button onClick={() => setPositionContent(2)} className={styles.btn}>Depois</button>
            </div>
            <div className={styles.content}>
                {positionContent === undefined ? <p>Clique em algum "button"!</p> : listContent[positionContent].map((content, index) => (

                    <p key={index}>{content}</p>

                ))}
            </div>
        </>

    )

}

export default TabbedBrowsing