import React from 'react'



export const FetchData = async () =>{
    const UserData = await fetch('https://jsonplaceholder.typicode.com/users')
     if(UserData){
        return UserData.json()
     }
}


const ServerSidedata = async() =>{
    const Data = await FetchData()
    return (
        <>
        <p>Fetching Data Server Side</p>
        <p>Lisitng the Users - {Data?.length}</p>
        {Data?.map((data:any)=>{
            return (
                <ul key={data.id}>
                    <li>Name - {data.name}</li>
                    <li>Username - {data.username}</li>
                    <li>Email - {data.email}</li>
                </ul>
            )
        })}
        </>
    )
}




export default ServerSidedata