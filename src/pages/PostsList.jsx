import posts from '../data/Posts.jsx'
// import Card from '../components/Card/Card.jsx'

export default function PostsList() {

    return (
        <section className='container'>
            <div className='row'>
                <div className='col-12'>
                    <ul>
                        {posts.map((post) =>
                            <li key={post.id}>{post.title}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}