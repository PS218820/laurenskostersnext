import Link from 'next/link'


export default function Home() {
    return (
        <>
            <div className='text-center'>
                <h1 className='fw-bolder text-center mt-5 fs-1'>
                    Laurens Kosters
                </h1>
                <p className="">
                    Student in <cite title="Source Title">Software Development</cite>
                </p>
            </div>

            <p className='p-3 fs-4 text-center'>Im Laurens Kosters, 17 years old and I study Software Developer in Eindhoven. I want to grow in my
                programming skills and want to learn new stuff. After this study I want to study further into
                programming with the study: Game Development.
            </p>
            <div className="">

            </div>
            <div className="container">
                <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link href='#learnmore' passHref>
                            <button className="btn btn-primary" type="button">Learn More</button>
                        </Link>
                        <Link href='/projects' passHref>
                            <button className="btn btn-light btn-outline-dark" type="button">My Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
            <section className='listsection'>
                <h2 id='learnmore' className='fw-bolder text-center mt-5 mb-5 fs-1'>Skills</h2>
                <div className='list'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Laravel</li>
                        <li className="list-group-item">Next.js</li>
                        <li className="list-group-item">WPF</li>
                        <li className="list-group-item">C#</li>
                        <li className="list-group-item">PHP</li>
                        <li className="list-group-item">JavaScript</li>
                    </ul>
                </div>
                <p className='p-5 fs-5 text-center'>
                    Im still learning so my skills in programming will improve further and the list of languages I know will grow.
                </p>
            </section>



        </>
    )
}
