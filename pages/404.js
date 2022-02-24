import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push('/');
        }, 3000)
    },)
    return (
        <>
        <div className='notfound'>
            <h1>Page not found</h1>
            <p>Sending back to home!</p>
        </div>
        </>
    );
}

export default NotFound;