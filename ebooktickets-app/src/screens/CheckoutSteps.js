import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function CheckoutSteps({step1,step2,step3}) {
    return (
        <div className="relative pb-10 min-h-screen">
            {/* <!-- banner --> */}
            <section className="inner-page-banner" id="home">
            </section>
            {/* <!-- //banner -->

            <!-- page details --> */}
            <div className="container py-md-5">
                <Nav className='justify-content-center mb-4'>
                    <Nav.Item>
                        {step1 ? (
                            <Link to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </Link>
                        ) : (
                            <Nav.Link disabled>Login</Nav.Link>
                        )}
                    </Nav.Item>
                    <Nav.Item>
                        {step2 ? (
                            <Link to='/payment'>
                                <Nav.Link>Payment</Nav.Link>
                            </Link>
                        ) : (
                            <Nav.Link disabled>Payment</Nav.Link>
                        )}
                    </Nav.Item>
                    <Nav.Item>
                        {step3 ? (
                            <Link to='/paid'>
                                <Nav.Link>Payment</Nav.Link>
                            </Link>
                        ) : (
                            <Nav.Link disabled>Payment</Nav.Link>
                        )}
                    </Nav.Item>
                </Nav>
            </div>
        </div>
        
        // <FormContainer>
        //     shipping
        // </FormContainer>
    )
}

export default CheckoutSteps
