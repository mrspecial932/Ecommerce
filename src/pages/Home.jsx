import React, {useState, useEffect} from 'react';
import Helmet from '../../src/components/Helmet/Helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products from "../assets/data/products"
import "../style/home.css";
import Clock from '../components/UI/Clock';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'    
import Service from '../services/service';
import ProductList from '../components/UI/productsList';
import counterImg from '../assets/images/counter-timer-img.png'

const Home = () =>{
    const [trendingProduct, SetTrendingProducts ]=useState([]);
    const [BestsalesProduct, SetBestsalesProduct ]=useState([]);
    const [mobileProducts, setMobleProducts]= useState([]);
    const [wirelessProducts, setWirelessProducts]= useState([]);
    const [popularProducts, setPopularProducts]=useState([])
    const year = new Date().getFullYear();
    
    useEffect(()=>{
        const FilteredTrendingProducts= products.filter((item) => item.category === "chair");
        SetTrendingProducts(FilteredTrendingProducts);

        const FilteredBestProducts= products.filter((item) => item.category === "sofa");
        SetBestsalesProduct (FilteredBestProducts);

        const FilteredMobileTrendingProducts= products.filter((item) => item.category === "mobile");
        setMobleProducts(FilteredMobileTrendingProducts);

        const FilteredWireProducts= products.filter((item) => item.category === "wireless");
        setWirelessProducts(FilteredWireProducts);
        const FilteredPopProducts= products.filter((item) => item.category === "watch");
        setPopularProducts(FilteredPopProducts);
    }, [])
   
   
    return( 
    <>    
    <section className="hero__section">

        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className='hero__content'>
                        <p className='hero__subtitle'> Trending Product in {year}  </p>
                        <h2>Make your Interior more Minimalistic & Modern</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reiciendis nulla pariatur, in ratione quae eveniet perferendis quos et, atque magnam ipsum, voluptates ea unde veritatis. Repellendus accusamus quam reprehenderit? </p>
                        <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop' ></Link>Shop Now</motion.button>
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className="hero__img">
                        <img src={heroImg} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
       
    </section>
   
    <Service/>
    <section className="trending__product">
        <Container>
            <Row>
                <Col lg="12" className='text-center'>
                    <h2 className="section__title">
                        Trending Product
                    </h2>
                </Col>
                <ProductList data={trendingProduct}/>
            </Row>
        </Container>
    </section>
        <section className='best-sales'>
            <Container>
                <Row>
                    <Col lg="12" className='text-center'>
                        <h2 className='section'>Best sales </h2>
                    </Col>
                    <ProductList data={BestsalesProduct}/>
                </Row>
            </Container>
        </section>

        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg="6" md="12" className='count__down-col'>
                        <div className="clock__top-content">
                            <h4 className='text-white fs-6 mb-2'>limited Offers</h4>
                            <h3 className='text-white fs-5 mb-3'> Qualilty Armchair </h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                            <Link to="/shop">Visit Store</Link>
                        </motion.button>
                    </Col>
                    <Col lg="6" md="12" className='text-end counter__img'>
                        <img src={counterImg} alt=""/>
                    </Col>
                </Row> 
            </Container>
        </section>
        <section className='new__arrivals'>
        <Container>
            <Row>
                <Col lg="12" className='text-center'>
                    <h2 className='section__title'>New Arrivals</h2>
                </Col>
                <ProductList data={mobileProducts}/>
                <ProductList data={wirelessProducts}/>
            </Row>
        </Container>
        </section>
        <section className='popular__category'>
            <Container>
                <Row>
                    <Col lg="12" className='text-center mb-5'>
                        <h2 className='section__title'>
                            Popular in Categories
                        </h2>
                        
                    </Col>
                    <ProductList data={popularProducts}/>
                </Row>
                
            </Container>
        </section>
    </> 
    
)}; 
export default Home;
 