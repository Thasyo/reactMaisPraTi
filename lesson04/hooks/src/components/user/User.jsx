import { useState, useEffect } from "react"

const User = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
    
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
            const userData = await data.json()
            setUser(userData)
        
        }

        fetchData()

    }, [user])

    return (
        <>
            {user !== null ? (
                <div>
                    <p>Nome: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <div>
                    <p>Não existe usuário!</p>
                </div>
            )}   
        </>
    )

}

export default User