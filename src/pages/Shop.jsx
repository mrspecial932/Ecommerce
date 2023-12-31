import React from 'react';
import CommonSection from '../components/UI/commonsection';
//import Helmet from '../components/Helmet/Helmet';
import '../../src/style/common.css'
import { Container, Row,Col } from 'reactstrap';
import '../style/shop.css'
import Products from '../assets/data/products'
import { useState } from 'react';
import ProductList from '../components/UI/productsList';

const Shop = () => {
    const [productData , setProducts]=useState(Products)
    const handleFilter=(e)=>{
        const filterVaule= e.target.value
        if(filterVaule==='sofa'){
            const filteredProducts=Products.filter(
                (item)=>item.category==="sofa"
            );
            setProducts(filteredProducts)
            }
            
            if(filterVaule==='mobile'){
                const filteredProducts=Products.filter(
                    (item)=>item.category==="mobile"
                );
                setProducts(filteredProducts)
                }
                if(filterVaule==='chair'){
                    const filteredProducts=Products.filter(
                        (item)=>item.category==="chair"
                    );
                    setProducts(filteredProducts)
                    }
                    if(filterVaule==='watch'){
                        const filteredProducts=Products.filter(
                            (item)=>item.category==="watch"
                        );
                        setProducts(filteredProducts)
                        }
                        if(filterVaule==='wireless'){
                            const filteredProducts=Products.filter(
                                (item)=>item.category==="wireless"
                            );
                            setProducts(filteredProducts)
                            }
                        
};
    const handleSearch=e=>{
        const searchTerm=e.target.value
       
        const searchedProducts=Products.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProducts(searchedProducts)
    }
    
    return (
    <>
    <CommonSection title='Products'/>
            <section>
                <Container>
             <Row>
            <Col lg="3" md="6">
                <div className='filter__widget'>
                <select onChange={handleFilter}>
                <option>filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">wireless</option>
                </select>
                </div>
                </Col>
                <Col lg="3" md="6" className='text-end'>
                <div className='filter__widget'>
                <select>
                <option>Sort By </option>
                <option value="ascending">Acending</option>
                <option value="descending">descending</option>
                </select>
                </div>
                </Col>

                <Col lg="6" md="12">
                    <div className='search__box'>
                        <input type='text' placeholder='Search...' onChange={handleSearch}/>
                        <span>
                            <i className='ri-search-line'></i>
                        </span>
                    </div>

                </Col>
                </Row>
                </Container>   
                        </section>
            <section className='pt-0'>
            <Container>
                <Row>
                    {productData.length===0? (<h1>No products are found</h1>):(
                        <ProductList data={productData}/>
                    )

                    }
                </Row>
            </Container>
            </section>
            </>  
    )
};
export default Shop;