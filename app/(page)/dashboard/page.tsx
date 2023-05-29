
import { resolve } from "path";
import { rejects } from "assert";
import Link from "next/link";

const wait = ()=>{
    return new Promise ((resolve: any, rejects: any)=>{
        
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}

const Page = async () => {
    await wait();
    // throw new Error('Not today')
    return (
        <>
            <h1>Header</h1>
            
               <Link href='/' >Go to Home</Link>
            <h1>Footer</h1>
        </>
    )
}

export default Page