import placeHolderImage from '../../assets/600x400_placeholder.jpg'
import Tags from '../Tags/Tags.jsx'
import DeleteButton from '../ui/Button/DeleteButton/DeleteButton.jsx'
import { BASE_URI } from '../../config.js'
import { Link } from 'react-router-dom'


export default function Card({ onDelete = () => { }, post = {} }) {
    const { id, title = '', image, content = '', tags = [], author = '', category = '' } = post
    return (
        <>
            <div className="container">
                <div className=''>
                    <figure className=''>
                        <img className='' src={image ? `${BASE_URI}/${image}` : placeHolderImage} alt={title} />
                    </figure>
                    <div className=''>
                        <h3 className=''>{title}</h3>
                        <h4 className=''>{`Autore: ${author}`}</h4>
                        <h5 className=''>{`Categoria: ${category}`}</h5>
                        < Tags tags={tags} />
                        <p className=''>{content}</p>
                        <div className=''>
                            <Link to={`/post/${id}`}>Vai al post</Link>  {/* rotta show con ID dinamico */}
                            <DeleteButton onDelete={onDelete} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}