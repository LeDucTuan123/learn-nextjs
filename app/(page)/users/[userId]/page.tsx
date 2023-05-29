import React, { Suspense } from "react"
import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPost"
import UserPosts from "./Components/UserPost"
import { log } from "console"

type Params = {
    params: {
        userId: string
    }
    
}

const UserPage = async ( {params: {userId}}: Params) => {
    {/* @ts-expect-error Async Server Component */}
    const userData: Promise<User> = getUser(userId)
    {/* @ts-expect-error Async Server Component */}
    const userPostData: Promise<Post[]> = getUserPosts(userId)
    
    // const [user, userPosts] = await Promise.all([userData, userPostData])
    
    const user = await userData
    console.log(userPostData);
    
    
    return (
        <>
            <h2>{user.name}</h2>
            <h2>{user.company}</h2>
            <br />
           
        </>
    )
}

export default UserPage