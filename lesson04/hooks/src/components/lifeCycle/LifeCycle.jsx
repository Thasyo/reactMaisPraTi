import { useEffect, useState } from "react"
import styles from "../lifeCycle/LifeCycle.module.css"

const LifeCycle = () => {

    const [timer, setTimer] = useState(0);

    useEffect(() => {

        const count = setInterval(() => {
            setTimer(prevCount => prevCount + 1)
        }, 1000)

        return () => {
            clearInterval(count)
            console.log("Timer limpo.")
        }
        
    }, [])

    return (

        <div>
            <h1>Contagem: <span>{timer}</span></h1>
        </div>

    )

}

export default LifeCycle