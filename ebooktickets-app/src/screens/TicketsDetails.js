import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Spinner, ListGroup, Button, Card, Form, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import APIs, { endpoints } from '../configs/APIs'
import { createOrder, payOrder } from '../actions/OrderActions'
import Loader from '../components/Loader'
import { PayPalButton } from 'react-paypal-button-v2'
import cookie from 'react-cookies'


export default function TicketsDetails() {

    const [lines, setLines] = useState({id:"",User: ""})
    const { id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const [change , setChange] = useState(1)
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [sdkReady, setSdkReady] = useState(false)
    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const [cmt_content , setCmt_content] = useState([])
    const [user,setUser] = useState([])
     // eslint-disable-next-line react-hooks/exhaustive-deps
     useEffect(async () => {
        try {
            let res = await APIs.get(endpoints["detail-bus"](id))
            if (!(res.data.User == undefined))
            setLines({...res.data})
        } catch (error) {
            console.error(error)
        }
       

        if (!window.paypal) {
            addPayPalScript()
        } else {
            setSdkReady(true)
        }

       

        //12/14
        let res_user = await APIs.get(endpoints['current_user'],{
            headers :{
                'Authorization' : `Bearer ${cookie.load('access_token')}`
            }
        })
        setUser(res_user.data)
    },[])

   

    const fetchTicket = async ()=>{
        try{
         
            let res = await fetch('/ticket/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'username' : name,
                    'phone' : phone,
                    'payments_method': 1,
                    'payments_status': 1,
                    'ticket_status': 1,
                    'ticket_quantity': 1,
                    'BusArrangement_id': 1,
                    'ticket_price' : lines.ticket_price,
                    'isPaid' : 1,
                    'content' : 'X???n v?? ta'
                })
            })
            .then(response => response.json())
            .then(data => {
                setLines({...lines,id:data.id})
            })
            
            
        }catch(er){
            console.log(er)
        }
       
    }
    


    //12/14/2021
    let add_cmt = async(event)=>{
        event.preventDefault()
        
        try{
            let res_cmt = await APIs.post(endpoints['tickets-details'],{
                'content': cmt_content,
                'busarrangement_detail': 1,
            })
            console.log(res_cmt.data)
            
           
        }catch(er){
            console.error(er)
        }
      
    }
    const placeOrder = () => {
        dispatch(createOrder({
            ticket_price: lines.ticket_price,
            content: "BUS",
            name, phone,
            ticket_quantity: 1,
            paymentMethod: "PayPal",
        }))
    }

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(id ,paymentResult))
    }

    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AZSI0PvFkU4b4zCTGhyghtLUnKRsYvi1qgukf4x8LhVFKSt-PCiM8eTD_JFnkbjnRAdZlmCJMMJ42bHE&disable-funding=credit'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
        
    }
 

    if(lines === null){
        return <Spinner animation="border" />
    }

    
    return (
        <>
            {/* <!-- banner --> */}
            <section className="inner-page-banner" id="home">
            </section>
            {/* <!-- //banner -->
            <!-- page details --> */}
            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Trang Ch???</Link> 
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Chi Ti???t Chuy???n Xe</li>
                </ol>
            </div>
            {/* <!-- //page details -->*/}
            <h1 className="text-center text-danger py-5">Chi Ti???t Chuy???n Xe</h1>
            <Row key={lines.id}>
                {/* <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col> */}

                <Col md={8} xs={12}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <h5><strong>M?? s??? xe: {lines.User}</strong></h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>{lines.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p><strong>??i???m kh???i h??nh: </strong> {lines.departure}</p>
                            <p><strong>??i???m t???i: </strong> {lines.destination}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Gi?? v??: ${lines.ticket_price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>M?? t???: {lines.description}</p>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <div className="col-md-12 py-5">
                                <h4>Post a comment</h4>
                                <div className="col-md-12 row">
                                    <div className="col-md-2">
                                        <div className="ava_wrapper">
                                            <img src={user.avatar} className="my_avatar" alt="" style={{width : '100%'}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <form onSubmit={add_cmt} className="form_cmt">
                                            <textarea className="p-3"type="text" cols={30} rows={2} value={cmt_content} onChange={(e)=> setCmt_content(e.target.value)} />
                                            <button type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                    </ListGroup>       
                </Col>
                <Col md={4}>
                    <Card>
                    <ListGroup>
                        <ListGroup.Item><h1>Personal</h1></ListGroup.Item>
                        <ListGroup.Item>
                        <Form>
                            <Form.Group controlId='address'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Enter name'
                                    value={name ? name : ''}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='city'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Enter phone'
                                    value={phone ? phone : ''}
                                    onChange={(e) => setPhone(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        </ListGroup.Item>
                        
                    </ListGroup>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Th??ng Tin V??</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Gi?? Xe: 
                                    </Col>
                                    <Col>
                                        <strong>${lines.ticket_price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Tr???ng th??i: 
                                    </Col>
                                    <Col>
                                        {lines.active === true ? '??ang ho???t ?????ng' : 'Ng???ng ho???t ?????ng'}                               
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            
                            <ListGroup.Item>
                                <h3>Ph????ng th???c thanh to??n</h3>
                                <p>
                                    <strong>Ph????ng th???c: Paypal</strong>
                                </p>
                            </ListGroup.Item>   
                            <ListGroup.Item>
                                {/* <Button type='button' onClick={fetchTicket} className='form-control' value="send">Thanh To??n</Button> */}
                                <Button
                                    type='button'
                                    className='btn-block'
                                    onClick={placeOrder}
            
                                >
                                    Place Order
                                </Button> <br/>
                                {loadingPay && <Loader />}
                                {!sdkReady ? (
                                    <Loader />
                                ) : (
                                        <PayPalButton
                                            type='button'
                                            className='btn-block'
                                            onClick={placeOrder}
                                            amount={lines.ticket_price}
                                            onSuccess={successPaymentHandler}
                                        />
                                    )} 
                            </ListGroup.Item>  
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <hr/>
            
                        {/* <div className="col-md-12 py-4">
                            <h4>Please give us your rating</h4>
                            <form onSubmit={rating_action} className="form_rating py-3">
                                <Rating
                                    name="text-feedback"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value) }
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <button type="submit">Send</button>
                            </form>
                           

                        </div> */}

        </>
    )
}