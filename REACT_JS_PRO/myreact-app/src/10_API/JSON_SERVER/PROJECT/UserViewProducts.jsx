import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UserViewProducts(props) {

    const [products,setProducts] = useState([]);
    const [categories,setCategories] = useState([]);

    
    
    const fetchProducts=async(cid="")=>{
        try {
            let url = "http://localhost:5000/products";

            if (cid)
            {
                url += `?categoryID=${cid}`;
            }
            console.log(url);
            
            await axios.get(url)
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
        
        return category ? category.name : "Unknown Category";
    }

    const handleChange=(e)=>{
        console.log(e.target.value);
        fetchProducts(e.target.value);
    }


    const handleAddtoCart=async(product)=>{
        try {
            await axios.post("http://localhost:5000/cart",{
                "userID" : props.users.id,
                "productID" : product.id,
                "qty" : 1,
                "price" : product.price
            })
            alert("Product Added in cart !!!")    
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div style={{margin:"20px"}}>
            Category Wise
            <br></br>
            <hr></hr>
            <select name='category' style={{margin:"20px"}} onChange={handleChange}>
                {
                    categories.map((category)=>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>
            <hr></hr>

                <h3> {props.users.name} ------ Cart</h3>
            <hr></hr>
        
            {
                products.map((product)=>(
                    <div style={{border:"2px solid black"}} key={product.id}>
                        <img src={product.image} height={80} width={60}/>
                        <button style={{color:"blue"}}>{getCategoryName(product.categoryID)}</button>
                        <h3>{product.name}</h3>
                        <h3>Rs. {product.price}</h3>
                        <h6>Rattings : {product.rating}</h6>
                        <br></br>
                        <button style={{border:"2px solid black"}} onClick={()=>handleAddtoCart(product)}>Add To Cart</button>
                        <br></br>
                    </div>
                ))
            }
        </div>
    )
}
