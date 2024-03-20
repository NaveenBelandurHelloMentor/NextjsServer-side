'use client'

import React from 'react'
import {useState,FormEvent} from 'react'
import {useRouter} from 'next/navigation'

const Home = () =>{
    const [inputVal,setInputVal] = useState('');
    const Router = useRouter()
const handleSubmit = (event:FormEvent) =>{
    event.preventDefault()
    Router.push(`predication/${inputVal}`)
    
    }

    return (
        <section className='container'>
         
        <div className='d-flex flex-column justify-content-center mt-2'>
            <div>
                <h1>Enter Your Name</h1>
            </div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Type Your Name...' value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
            <div>
            <button className='btn btn-primary mt-2'  type='submit' >Submit</button>
            </div>
        </form>
        </div>
      </section>
    )
}





export default Home