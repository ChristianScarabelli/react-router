import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URI } from '../../config.js'
import { Link } from "react-router-dom"
import Card from '../../components/Card/Card.jsx'

export default function Index() {

    // variabile di stato per i posts
    const [posts, setPosts] = useState([])

    // funzione per il fetch dei dati dal server
    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => {
                setPosts(res.data) // riempio variabile di stato con i dati dal server
            })
            .catch(err => {
                console.error(err)
            })
    }

    // faccio il fetch solo al primo montaggio del componente
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <main>
            <section>
                <div className="container">
                    <h2>Blog Posts</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-2">
                        {posts.map((post) =>
                            <div key={post.id}>
                                <Card post={post} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}