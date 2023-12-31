import React from 'react';
import Helmet from "../components/Helmet/Helmet"
import CommonSection from '../components/UI/commonsection';
import {Container, Row, Col} from "reactstrap";
import tdImg  from '../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion';
import "../style/cart.css"
import { cartActions } from '../redux/slice/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () =>{
    const cartItems= useSelector((state)=>state.cart.cartItems);

    const totalamount=useSelector(state=>state.cart.totalAmount);
    return (
        <>
            <CommonSection title="Shopping Cart"/>
                <section className='mytab'>
                    <Container>
                        <Row>
                            <Col lg='9'>
                                {
                                    cartItems.length===0? <h2 className='fs-4 text-center  '>item added to cart</h2>:
                                    <table className='table bordered'>
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        cartItems.map((item,index)=>(
                                        <Tr item={item} key={index}/>                                            
                                        ))
                                       }
                                    </tbody>
                                </table>
                                }
                               
                            </Col>
                            <Col lg="3">
                                <div lg="3"> 
                                <h6 className='d-flex align-items-center justify-content-between'> Subtotal  <span className='fs-4 fw-bold'>${totalamount}</span></h6>
                               
                                </div>
                                <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                                <div>
                                    

                                    <button className="buy__btn w-100 mt-4" >
                                        <Link to='checkout'>Checkout</Link>
                                    </button>

                                    <button className='buy__btn w-100'><Link to='./shop'></Link> Continue Shoping</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

        </>
    )
};

const Tr =({item})=>{
    const dispatch=useDispatch()
        const deleteProduct=()=>{
            dispatch(cartActions.deleteItem(item.id))
        }
    return (
       
        <tr>
          <td><img src={item.imgUrl} alt=""/></td>
          <td>{item.productName}</td>
         <td>{item.price}</td>
         <td>{item.quantity}</td>
         <td><motion.i whileTap={{scale:1.2}} className='ri-delete-bin-line' onClick={deleteProduct}></motion.i></td>
         </tr>
    )
}
export default Cart;
