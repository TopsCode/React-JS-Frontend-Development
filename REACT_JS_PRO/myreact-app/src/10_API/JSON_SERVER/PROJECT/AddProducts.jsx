import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddProducts() 
{
    const [categories,setCategories] = useState([]);

    const [products,setProducts] = useState({
        name : "",
        description : "",
        price : "",
        categoryID : "",
        stock : "",
        rating : "",
    });

    const fetchCategories=async()=>{
        try {
            await axios.get("http://localhost:5000/categories")
            .then((response) => setCategories(response.data))    

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchCategories();
    },[])

    const handleChange=(e)=>{
        setProducts({...products,[e.target.name] : e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products",{
                ...products,
                // categoryID : parseInt(products.categoryID),  bcs in db.json our category id is string 
                stock : parseInt(products.stock),
                rating : parseFloat(products.rating)
            }) 
            alert("Product Added !")   
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{margin:"20px"}}>
            <form onSubmit={handleSubmit}>

                <select name='categoryID' value={products.categoryID} onChange={handleChange} required>
                    <option value="">Select Category</option>
                        {
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                </select>
                
                <input type="text" name="name" placeholder="Product Name" value={products.name} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={products.description} onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" value={products.price} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" value={products.image} onChange={handleChange} />
                <input type="number" name="stock" placeholder="Stock Quantity" value={products.stock} onChange={handleChange} />
                <input type="number" name="rating" placeholder="Rating" step="0.1" value={products.rating} onChange={handleChange} />

                <button type='submit'>Add Product</button>
            </form>
        </div>
    )
}
