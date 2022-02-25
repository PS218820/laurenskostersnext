import Link from 'next/link'

export const getStaticProps = async() => {

    const res = await fetch('http://api.laurenskosters.com/api/projects');
    const data = await res.json();

    return {
        props:  {projects: data}
    }
}

const Projects = ({projects}) => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='fw-bolder text-center mt-5 fs-1'>
                    My Projects
                </h1>
            </div>
            <p className='p-3 fs-4 text-center'>
                Here you can find all my projects that are finished.
            </p>
            <div className='list text-center'>
                <ul className="list-group list-group-flush">
                    {projects.map(projects => (
                        <>
                            <li className="list-group-item">
                                <h3>{projects.name}</h3>
                                <Link href={'/projects/' + projects.id} key={projects.id}>
                                    <a>
                                        <p>More Details</p>
                                    </a>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;