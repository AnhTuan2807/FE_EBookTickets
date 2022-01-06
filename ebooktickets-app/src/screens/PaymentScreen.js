import React from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'


function PaymentScreen() {
    return (
        <div className="relative pb-10 min-h-screen">
            {/* <!-- banner --> */}
            <section className="inner-page-banner" id="home">
            </section>
            {/* <!-- //banner -->

            <!-- page details --> */}
            <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">PaymentScreen</h3>
                <Row>
                    <Col md={8}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Dia diem khoi hanh</h4>
                                <p>
                                    <strong>Dia diem: </strong>
                                    Ben xe Mien Dong, Binh Thanh, TP.HCM
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Phuong thuc thanh toan</h4>
                                <p>
                                    <strong>Thanh toan: </strong>
                                    PayPal
                                </p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Chuyen xe di chuyen</h4>
                                
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup></ListGroup>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PaymentScreen
