import { useRouter } from 'next/dist/client/router';
import react from 'react';

export interface AboutPageProps{}


const AboutPage = (props: AboutPageProps) => {
    const router = useRouter()
    console.log('About query: ', router.query);
    
    return(
        <div>About page</div>
    )
}

export {AboutPage}