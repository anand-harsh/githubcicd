import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {

    const [username, setUsername]=useState('')

    useEffect(()=>{
      getName()
    }, [])

    const getName=async ()=>{
      const response=await axios.get('http://localhost:5000/names', { mode: 'cors' })
      console.log(response)
      setUsername(response.data)


    }

    return(
      <>
      <h1>My Website</h1>
      <h1>My name is {username}</h1>
      </>
    )
}

export default App;
