import React from "react";
import "./footer.css";
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const Footer = () =>{
    const YEar = new Date().getFullYear()
    return (<footer className="footer">
        <Container>
            <Row>
                <Col lg="4" className="mb-4">
                        <div className="logo">
                            <div>
                        <h1 className="text-white">MultiMart</h1>
                        </div>
                        </div>
                        <p className="footer__text mt-4">
                         this is an ecoomerce where will sell goods  which is affordable. we are nation wide deliver compaines. we care about our customer,
                         and gurrante is asure on each product you purchase
                        </p>
                       
                    
                </Col>
                <Col lg="3" className="mb-4">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">
                        Top Category
                        </h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0"> 
                                 <Link to ="#">Mobile Phones</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to ="#">  Moderm Sofa </Link>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0">
                                <Link to ="#"> Arm Chair </Link>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0">
                                <Link to ="#">Smart Watches </Link>
                            </ListGroupItem>

                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2" className="mb-4">
                        <div className="footer__quick-links">
                        <h4 className="quick__links-title">
                            Useful link
                        </h4>
                        <ListGroup className="mb-3">
                            <ListGroupItem className="ps-0 border-0"> 
                                 <Link to ="/shop">Shop</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to ="/cart">  Cart </Link>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0">
                                <Link to ="/login">Login </Link>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0">
                                <Link to ="#">Privacy Policy</Link>
                            </ListGroupItem>

                        </ListGroup>
                        </div>
                </Col>
                <Col lg="3" className="mb-4">
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">
                            Contact Us
                        </h4>
                        <ListGroup className="footer__contact mb-3">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2"> 
                                <span>
                                    <i className="ri-map-pin-line">

                                    </i>
                                </span>
                                <p> 123 Ikeja Lagos Nigeria </p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                            <span>
                                    <i className="ri-phone-line">

                                    </i>
                                </span>
                                <p> 07035900710 </p>

                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-2">
                                
                            <span>
                                    <i className="ri-map-pin-line">

                                    </i>
                                </span>
                                <p> 123 Ikeja Lagos Nigeria </p>
                            </ListGroupItem>
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-2">
                            <span>
                                    <i className="ri-map-pin-line">

                                    </i>
                                </span>
                                <p> Mrspecial932@gmail.com </p>
                            </ListGroupItem>

                        </ListGroup>
                        </div>
                </Col>
                <Col lg='12'>
                    <p className="footer__copyright">CopyRight {YEar} developed by Mrpsecial . All rights reserved </p>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}
export default Footer;