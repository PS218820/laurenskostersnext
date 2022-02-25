import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch('http://api.laurenskosters.com/api/projects')
    const data = await res.json();

    const paths = data.map(projects => {
        return{
            params: {id: projects.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://api.laurenskosters.com/api/projects/' + id)
    const data = await res.json();

    return{
        props: {projects: data}
    }
}


const Details = ({projects}) => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='fw-bolder text-center mt-5 fs-1'>
                    {projects.name}
                </h1>
            </div>
            <p className='p-3 fs-4 text-center'>
                {projects.description}
            </p>
            <div className="container">
                <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link href={projects.link} passHref>
                            <button className="btn btn-primary" type="button">Link to project</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;