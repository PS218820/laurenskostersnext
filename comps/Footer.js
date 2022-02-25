import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href='mailto: info@laurenskosters.com' rel="noopener noreferrer" target='_blank' className="nav-link px-2 text-muted">Email</a></li>
                    <li className="nav-item"><a href='https://www.instagram.com/laurenskosters/' rel="noopener noreferrer" target='_blank' className="nav-link px-2 text-muted">Instagram</a></li>
                {/*<Link href=''>*/}
                {/*    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Twitter</a></li>*/}
                {/*</Link>*/}
            </ul>
            <p className="text-center text-muted">© 2022 Laurens Kosters</p>
        </footer>
    );
}

export default Footer;