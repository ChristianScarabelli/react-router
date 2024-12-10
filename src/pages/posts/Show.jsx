import axios from "axios"
import { useState, useEffect } from "react"
import { BASE_URI } from "../../config"
import { useNavigate, useParams } from "react-router-dom"
import placeHolderImage from '../../assets/600x400_placeholder.jpg'
import Tags from "../../components/Tags/Tags"


export default function Show() {

    // variabile di state per il post con id (??)
    const [post, setPost] = useState(null) // null perchè ancora non esiste

    const { id } = useParams() // destrutturo con la funzione di react per ricavare l'id

    // fetch del post per ID
    useEffect(() => {
        axios.get(`${BASE_URI}/posts/${id}`)
            .then(res => {
                setPost(res.data) // inizializzo il setter con i dati della response 
            })
            .catch(err => {
                console.error(err)
            })
    }, [id]) // aggiorno la variabile ad ogni cambio dell'id

    const navigate = useNavigate() // inizializzo variabile per spostarsi tra le pagine

    return (
        <main>
            <div className="container my-3">
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <button className="btn btn-dark" onClick={() => navigate(-1)}>Prev</button>
                    <button className="btn btn-dark" onClick={() => navigate(+1)}>Next</button>
                </div>
            </div>
            {post ?
                <>
                    <div className="container">
                        <figure>
                            <img className="img-fluid card-img-top" src={post.image ? `${BASE_URI}/${post.image}` : placeHolderImage} alt={post.title} />
                        </figure>
                        <h2>{post.title}</h2>

                        <h4 className="mt-2">{`Autore: ${post.author}`}</h4>
                        <h5 className=" mb-3 mt-2">{`Categoria: ${post.category}`}</h5>
                        <Tags tags={post.tags} />
                        <p className="card-text mt-4 mb-4">{post.content}</p>
                    </div>
                </> :
                <>
                    <div className="container py-3">
                        <figure>
                            <img className="img-fluid card-top-img" src={placeHolderImage} />
                        </figure>
                        <div className="placeholder-glow d-flex flex-column">
                            <h2 className="placeholder bg-primary col-4"></h2>
                            <h4 className="mt-2 placeholder bg-primary col-6"></h4>
                            <h5 className=" mb-3 mt-2 placeholder bg-primary col-6"></h5>
                            <Tags className='placeholder bg-primary col-10' />
                            <p className=" mt-2 mb-1 placeholder bg-primary col-12"></p>
                            <p className="mt-1 mb-1 placeholder bg-primary col-12"></p>
                            <p className="mt-1 mb-1 placeholder bg-primary col-12"></p>
                            <p className=" mt-1 mb-1 placeholder bg-primary col-12"></p>
                        </div>

                    </div>
                </>
            }
        </main>
    )
}