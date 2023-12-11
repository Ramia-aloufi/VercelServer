import { useEffect, useState } from 'react'
import './App.css'

type Product = {
  name:string,
  price:number,
  description:string
}

function App() {
  const [product, setProduct] = useState<Product[]>([])
  useEffect(()=>{
    fetch('https://vercel-server-rose.vercel.app/api/product')
    .then(res => res.json())
    .then(data => setProduct(data.payload))
    
  },[])

  return (
    <>
    <h1>Our products</h1>
    <div className='cards' style={{display: 'grid', gap: '20px' }}>
    {product && product.map((product,index)=>{
      return(
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} >
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        </div>
      )
    })}
    </div>

    </>
  )
}

export default App
