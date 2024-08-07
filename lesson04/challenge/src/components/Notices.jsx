import { useState, useEffect } from "react"

const Notices = () => {

    const [news, setNews] = useState()
    const [postId, setPostId] = useState(1)

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const newsData = await data.json()
            setNews(newsData)
        }

        fetchData()

        const timer = setInterval(() => {
            setPostId(postId + 1)   
        }, 3000)

        return () => {
            clearInterval(timer)
        }

    }, [postId])

    return (

        <>
            {news !== undefined ? (
                    <div>
                        <h1>{news.title}</h1>
                        <h3>{news.body}</h3>
                        <h4>{news.id}° Notícia.</h4>
                    </div>
                ) : (
                    <div>
                        <p>Carregando notícias . . .</p>
                    </div>
                )
            }
        </>

    )

}

export default Notices