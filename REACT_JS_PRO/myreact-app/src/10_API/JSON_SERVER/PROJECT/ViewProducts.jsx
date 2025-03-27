import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewProducts() 
{
    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);

    const fetchProducts=async()=>{
        try {
            await axios.get("http://localhost:5000/products")
            .then((response) => setProducts(response.data))    
        } catch (error) {
            console.log(error);
        }
    }

    const fetchCategories=async()=>{
        try {
            await axios.get("http://localhost:5000/categories")
            .then((response) => setCategories(response.data))    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProducts();
        fetchCategories();
    },[])

    const getCategoryName=(cid)=>{
        const category = categories.find(category => category.id === cid );
        return category.name;
    }
    return (
        <div style={{margin:"20px"}}>
            {
                products.map((product)=>(
                    <div style={{border:"2px solid black"}}>
                        <img src={product.image} height={80} width={60}/>
                        <button style={{color:"blue"}}>{getCategoryName(product.categoryID)}</button>
                        <h3>{product.name}</h3>
                        <h3>Rs. {product.price}</h3>
                        <h6>Rattings : {product.rating}</h6>

                        
                    </div>
                ))
            }
        </div>
    )
}
