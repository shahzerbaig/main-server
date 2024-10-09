'use client'
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () =>{
      const response = await fetch('http://localhost:4000/')
      const result = await response.json()
      setData(result)
      setLoading(false)

    }

    fetchData()
  },[])
  return (
            
            <div className="bg-slate-50 text-black rounded-xl flex align-middle justify-center w-80">Hello, from Next server,
            {loading?<div>Loading...</div>:
            <div>{data.message}</div>}</div>
  );
}
