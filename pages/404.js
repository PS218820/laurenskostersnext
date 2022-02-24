import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push('/');
        }, 3000)
    },[])
    return (
        <>
        <div>
            <h1>not found.......</h1>
        </div>
        </>
    );
}

export default NotFound;