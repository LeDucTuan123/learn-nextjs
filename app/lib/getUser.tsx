

const getUser = async (userId: string) => {
    
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    
    if(!res.ok) throw new Error('failed to fetch data')
    
    return res.json
}

export default getUser