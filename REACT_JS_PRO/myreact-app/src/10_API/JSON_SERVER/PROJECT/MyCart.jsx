import React, { useEffect, useState } from "react";
import "./style.css"; 
import axios from "axios";

export default function MyCart() {

    const [details,setDetails] = useState({email : "",password:""});
    const [userId,setUserId] = useState(null);

    const [cart,setCart] = useState([]);
    const [products,setProducts] = useState([]);


    const handleLogin=async(e)=>{
        e.preventDefault();
        const {email,password} = details;
        try {
            const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`)
            // setUsers(response.data);
            setUserId(response.data[0].id)
            // console.log("---->>> users",response.data);
            console.log("---->>> users",response.data[0].id);

        } catch (error) {
            console.log(error);
        }
    }

    const fetchCartData=async()=>{
        try {
            let response = await axios.get(`http://localhost:5000/cart?userID=${userId}`)
            setCart(response.data)
            console.log("---->>>>",userId);
            console.log("===> cart data :: ",response.data);
        } catch (error) {
            console.log(error);
        }
    }
   

    const fetchProductDetails =async()=>{
        try {
            let response = await axios.get(`http://localhost:5000/products`);
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchCartData();
        fetchProductDetails();
    },[userId])
    
    // Merging cart items with Product Details 
    const mergedCart = cart.map((item)=>{
        const product = products.find((product) => product.id === item.productID);
        return {
            ...item,
            name : product.name,
            image : product.image,
        }
    })

    return (
        <div style={{margin:"20px"}}>
            <form onSubmit={handleLogin}>
                
                <label>email : </label>

                <input 
                value={details.email}
                onChange={(e)=>setDetails({...details,email:e?.target?.value})}
                required
                />
                <label>password : </label>

                <input 
                value={details.password}
                onChange={(e)=>setDetails({...details,password:e?.target?.value})}
                required
                />
                <button type='submit'>Submit</button>
            </form>
        
            <div className="cart-container">
                <h2>Shopping Cart</h2>

                {
                    mergedCart.length > 0 ? 
                    (
                        mergedCart.map((product)=>(
                            <div className="cart-item" key={product.id}>
                                <img src={product.image} alt="Product" className="cart-image" />
                                <div className="cart-details">
                                    <h3>{product.name}</h3>
                                    <p>Price: {product.price}</p>
                                    <div className="quantity-control">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                                <button className="remove-btn">Remove</button>
                            </div>
                        ))
                    )   
                    :
                    <p>No products in cart</p>
                }
  
                
                <div className="cart-footer">
                    {/* accumulator which store previous result */}
                    <h3>Total: Rs. {mergedCart.reduce((accumulator,item) => accumulator + item.qty * item.price,0)}</h3>
                    <button className="checkout-btn">Checkout</button>
                </div>
               

            </div>
        </div>
    );
}
