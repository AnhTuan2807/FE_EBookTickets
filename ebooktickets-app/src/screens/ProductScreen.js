import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { useDispatch, useSelector} from 'react-redux'
import { listProductsDetails } from '../actions/ProductActions'

function ProductScreen({match}) {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, products } = productDetails

    useEffect(() =>{
        console.log('PPP')
        dispatch(listProductsDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div className="relative pb-10 min-h-screen">
            {/* <!-- banner --> */}
            <section className="inner-page-banner" id="home"></section>
            {/* <!-- //banner -->

            <!-- page details --> */}
            <Link to='/service' className='btn btn-light my-3'>Quay Lại</Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : products ?  (
                        <Row>
                            <Col md={6}>
                                <Image src={products.image} alt={products.name} fluid />
                            </Col>

                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{products.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Rating value={products.rating} text={`${products.numReviews} reviews`} color={'#f8e825'} />
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <b>Giá: </b> ${products.price}
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <b>Mô tả: </b> {products.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Price: 
                                                </Col>
                                                <Col>
                                                    <strong>${products.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Status: 
                                                </Col>
                                                <Col>
                                                    <strong>In Stock</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Button className='btn-block' type='button'>Booking</Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    ) : null
                    
            }
            <br />
        </div>
    )
}

export default ProductScreen

