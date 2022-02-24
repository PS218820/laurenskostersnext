import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-5 border-dark">
            <div className="container-fluid">
                <Link href='/'>
                    <a className="navbar-brand">Laurens Kosters</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href='/portfolio'>
                                <a className="nav-link" aria-current="page" href="#">Portfolio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/projects'>
                                <a className="nav-link" href="#">Projects</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/opensourceapi'>
                                <a className="nav-link" href="#">API</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;