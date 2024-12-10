import posts from '../data/posts.js'
// import Card from '../components/Card/Card.jsx'

export default function PostsList() {

    return (
        <section className='container'>
            <div className='row'>
                <div className='col-12'>
                    <ul className='list-group list-group-flush py-4'>
                        {posts.map((post) =>
                            <li key={post.id} className='list-group-item'>{post.title}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}