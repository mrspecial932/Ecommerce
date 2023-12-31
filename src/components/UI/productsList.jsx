import React from "react";
import ProductCart from "./productCart";


const ProductList = ({data}) => {
    return (
    <> 
        {
            data?.map((item , index) =>(
            <ProductCart item={item} key={index}/>
            ))
        }
       
         </>
    
)}
export default ProductList