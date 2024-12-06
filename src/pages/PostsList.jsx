import posts from '../data/Posts.jsx'
// import Card from '../components/Card/Card.jsx'

export default function PostsList() {

    return (
        <section>
            <ul>
                {posts.map((post) =>
                    <li key={post.id}>{post.title}</li>)}
            </ul>
        </section>
    )
}