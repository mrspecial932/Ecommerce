import React, {useState, useRef, useEffect} from 'react';
import {Container,Row,Col, } from 'reactstrap';
import {useParams} from "react-router-dom";
import products from '../assets/data/products'
import CommonSection from '../components/UI/commonsection';
import '../style/product-detail.css';
import { motion } from 'framer-motion';
import ProductList from '../components/UI/productsList';
import { useDispatch } from 'react-redux';
import {cartActions} from '../redux/slice/cartSlice';
import { toast } from 'react-toastify';

const Productdetail = () =>{
    
    const [tab, setTab]=useState('desc');
    const reviewUser= useRef('')
    const reviewMsg=useRef('')
    const dispatch=useDispatch()
    const {id}=useParams()
    const [rating, setRating]=useState(null)
    
    const product=products.find(item=>item.id===id)
    const  {imgUrl,productName,price,avgRating,shortDesc,category, reviews, description} =product;
 
    const relatedProducts=products.filter(item=>item.category===category)
    
    const sumbitHandler=(e)=>{
        e.preventDefault()
        const reviewUserName=reviewUser.current.value;
        const reviewUserMsg=reviewMsg.current.value;

        const reviewObj ={
            userName:reviewUserName,
            text:reviewUserMsg,
            rating:rating
        };
        toast.success("Review Sumbitted")
    }
    const addtoChart =()=>{
        dispatch(cartActions.addItem({
            id,
            image:imgUrl,
            productName,
            price,
        }));
        toast.success("Product Added sucessfully")
    };
    useEffect(()=>{
        window.scrollTo(0,0,)
    },[product])
    
    return( <div>
        <CommonSection title={productName}/>
        <section className='pt-0'>
        <Container>
            <Row>
                <Col lg="6" >
                    <img src={imgUrl} alt=""/>
                </Col>
                <Col lg="6" className='mt-4'>
                    <div className='product_details'>
                        <h2>{productName}</h2>
                        <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                            <div>
                            <span>
                                <i className='ri-star-s-fill'></i>
                            </span>
                            <span onClick={()=>setRating(2)}>
                                <i className='ri-star-s-fill'></i>
                            </span>
                            <span onClick={()=>setRating(3)}> 
                                <i className='ri-star-s-fill'></i>
                            </span>
                            <span onClick={()=>setRating(4)}> 
                                <i className='ri-star-s-fill'></i>
                            </span>
                            <span onClick={()=>setRating(5)}>
                                <i className='ri-star-s-fill'></i>
                            </span>
                        </div>
                        <p>(<span>{avgRating}</span>ratings)</p>
                    </div>
                    <div className='d-flex align-items-center gap-5'>
                        <span className='product_price'>${price}</span>
                        <span>Category :{category.toUpperCase()}</span>
                    </div>
                    <p className='mt-3'>{shortDesc}</p>
                    <motion.button whileTap={{scale:1.2}}   className='buy__btn' onClick={addtoChart}>Add to Cart</motion.button>
                    </div>
                </Col>          
            </Row>
        </Container>
        </section>        

        <section>
            <Container>
              <Row>
             <Col lg='12'>
             <div className='tab_wrapper d-flex align-items-center gap-5'> 
            <h6 className={`${tab==='desc' ? 'active__tab' :"" }`} onClick={()=>setTab('desc')}>Description </h6>
          <h6  className={`${tab==='desc' ? 'active__tab' :"" }`} onClick={()=>setTab('rev')} > Reviews ({reviews.length}) </h6>  
        </div> 

          { 
           tab==='desc' ? (<div className='tab__content mt-5'>
           <p> {description}</p>     
        </div>)   :(
             <div className='product__review mt-5' >
                    <div className="review__wrapper">
                      <ul>{
                        reviews.map((item,index)=>(
                            <li kew={index} className='mb-4'>
                                <h6>Jhon Doe</h6>
                            <span>{item.rating} (rating)</span>
                            <p> {item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='review__form'>
                        <h4> Leave your experience</h4>
                        <form action='' onSumbit={sumbitHandler}>
                        <div className='form__group'>
                        <input type="text" placeholder="Enter name" ref={reviewUser} required/>
                         </div>
                         <div className='form__group d-flex align-items-center gap-5 rating_group'>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(1)}
                        >1<i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(2)}>2<i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(3)}>3<i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(4)}>4<i className='ri-star-s-fill'></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(5)}>5<i className='ri-star-s-fill'></i></motion.span>
                         </div>
                        <div className='form__group'>
                        <textarea ref={reviewMsg} rows={4} type="text" placeholder="Review Message" required/>
                         </div>
                       
                       <motion.button whileTap={{scale:1.2}} type="submit" className='buy__btn'>Sumbit</motion.button>
                        </form>
                         
                    </div>
                    </div>
            </div> )}

                                      
                    </Col>

                    <Col lg='12'>
                        <h2 className='related__title'>you might also like</h2>
                    </Col>
                    <ProductList data={relatedProducts}/>
                </Row>
            </Container>
        </section>

    </div>
    )
};
export default Productdetail;
