import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function App() {

  const getdata=async()=>{
    const res= await axios.post("http://localhost:8000/postdata",)
    console.log(res)
  }
  const [count, setCount] = useState(0)

  return (
    <>
<div className="text-xl w-xs cursor-pointer bg-blue-200 text-black flex justify-center " onClick={getdata}>
  hello 
</div>
    </>
  )
}

export default App
