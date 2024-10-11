'use client'
import { useEffect, useState } from "react";

interface DataType {
  message: string; // Define the structure of your data
}


export default function Home() {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);
  
  const domain = "https://159.89.173.118/api/" 
  useEffect(()=>{
    const fetchData = async () =>{
      const response = await fetch(domain)
      const result = await response.json()
      setData(result)
      setLoading(false)

    }

    fetchData()
  },[])
  return (
            
            <div className="bg-slate-50 text-black rounded-xl flex align-middle justify-center w-80">Hello, from Next server,
            {loading?<div>Loading...</div>:
            <div>{data?.message}</div>}</div>
  );
}
