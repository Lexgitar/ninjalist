
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();
useEffect(()=>{
    setTimeout(()=>{
        //router.go(-1)
        router.push('/');
    }, 3000)

},[])

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>Page Can't be found.</h2>
            <p>Going back to the <Link href='/' >Homepage</Link> in 3 seconds...</p>
        </div>
     );
}
 
export default NotFound;