import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ProductApi() 
{
    const [products,setProducts] = useState([]);

    const api = "https://fakestoreapi.com/products"

    useEffect(()=>{
        axios.get(api)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error))
    },[])

  return (
    <>
        {
            products 
            ? 
                
                    products.map((product,index)=>{
                        return <div style={{margin:"20px",border:"2px solid black",padding:"20px"}}>
                                    <img src={product.image} height={50} width={50} />

                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>
                                    <button>{product.category} </button>
                                    <button>Rs. {product.price} </button>

                                    <button>Ratting : {product.rating.rate} Counts : {product.rating.count}</button>
                            </div>
                    })
            :    
            <h3>Loading....</h3>
        }
    </>
  )
}
