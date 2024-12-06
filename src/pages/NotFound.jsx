import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main>
            <section>
                <h1>404</h1>
                <span>Page Not Found!</span>
                <Link to='/'>Go back to homepage</Link>
            </section>
        </main>
    )
}