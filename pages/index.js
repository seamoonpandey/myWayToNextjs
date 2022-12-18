import Link from 'next/link'

export default function HomePage() {
    return <div>
        <h1>The Home page</h1>
        <ul>
            <li>
                {/* <a href="/portfolio">Portfolio</a> */}{/* this is not good for the react because it sends a new http request and refresh the page which we donot want since it takes the primary data and spoils the user experience */}

                <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link href="clients">Clients</Link>
            </li>

        </ul>
    </div>
}