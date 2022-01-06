import { div } from 'prelude-ls';
import React,{ useState, useEffect} from 'react';
import { Row, Form, FormControl, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useHistory, useLocation} from 'react-router'
import APIs, { endpoints } from '../configs/APIs'
import BusArrangements from '../components/BusArrangements';

import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/ProductActions';
import {useDispatch, useSelector} from 'react-redux'


export default function Home(){
	const [busarrangements, setBusArrangement] = useState([])
	const location = useLocation()
	
	useEffect(() => {
		
		let loadBusArrangement = async () => {
			try {
				let res = await APIs.get(`${endpoints['busarrangements']}${location.search}`)
				// console.log("DATA",res.data)
				// let res = await APIs.get(endpoints['busarrangements'])
				setBusArrangement(res.data)

				// console.info(res.data)
			} catch (err) {
				console.error(err)
			}
		}
		loadBusArrangement()
	}, [location.search])
	
	//Product
		const dispatch = useDispatch()
    	const productList = useSelector(state => state.productList)
    	const {error, loading, products} = productList || {}

		useEffect(() => {
			dispatch(listProducts())
		}, [dispatch])

	//Tìm kiếm chuyến xe & xem thêm danh sách
		const [q, setQ] = useState("")
		const history = useHistory()
		const search = (event) => {
			console.info("Test");
    		console.info(Math.random());
			event.preventDefault()
			history.push(`/?q=${q}`)
		}  
		//Update 12/28/2021
		const [active, setActive] = useState(false)
		const handleClick = () => {
			setActive(active => !active)
		} 
        return(
            <div>
              
{/* <!-- banner --> */}
<div className="banner_w3lspvt" id="home">
	<div className="csslider infinity" id="slider1">
		<input type="radio" name="slides" checked="checked" id="slides_1"/>
		<input type="radio" name="slides" id="slides_2"/>
		<input type="radio" name="slides" id="slides_3"/>
		<input type="radio" name="slides" id="slides_4"/>

		<ul className="banner_slide_bg">
			<li>
				<div className="slider-info bg1">
					<div className="bs-slider-overlay">
						<div className="banner-text">
							<div className="container">
							<h2 className="movetxt agile-title text-capitalize">Tiện lợi và Thoải mái trên những chuyến đi</h2>
                                    <p>Chúng tôi luôn vinh hạnh có thể phục vụ các dịch vụ tiện ích cho mọi nhà.</p>
                                    <Link to="/service">Khám phá</Link> 
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		{/* <div className="navigation"> 
			<div>
			  <label htmlFor="slides_1"></label>
			  <label htmlFor="slides_2"></label>
			  <label htmlFor="slides_3"></label>
			  <label htmlFor="slides_4"></label>
			</div>
		</div> */}
	</div>
</div>
{/* <!-- //banner -->
 <!-- banner bottom grids --> */}
    <section className="content-info py-5" id="about">
        <div className="container py-md-5">
		<h3 className="heading text-center mb-3 mb-sm-5">Tìm kiếm chuyến xe</h3>

            <div className="info-w3pvt-mid text-center px-lg-5">
			<Form className="md-form mr-auto m-0" onSubmit={search}>
                <FormControl 
					type="search"
					placeholder="Tim chuyen xe"
					className="form-control mr-sm-2"
					aria-label="Search"
					value={q}
					onChange={(event) => setQ(event.target.value)} />
					<br/>
					<Button
						type="submit" variant="primary" size="lg">Search</Button>
                	</Form>
            </div><br/>
			<div className="md-form mr-auto m-0 text-center px-lg-5 ">
				<h1 class="text-center text-danger"> DANH SÁCH CHUYẾN XE</h1><br/>
				{loading ? <Loader/>
                        : error ? <Message variant='danger'>{error}</Message>
						:<Row>
							{/* {busarrangements.map(c => <BusArrangements obj={c} type="detail" />)} */}
							{	
								
								busarrangements.map((c,index) => {
									if(index >= 3)
										return <BusArrangements obj={c} type="detail" />
									else 
										return <BusArrangements obj={c} type="detail" active={active?'': 'active'}/>
								}
								)
								
							}

						</Row>
				}	
				<hr/><button type="button" class="btn btn-outline-dark" onClick={() => handleClick()}>{active?"Ẩn Bớt": "Xem Thêm"}</button>
            </div>
        </div>
    </section>
    {/* <!-- //banner bottom grids -->

 <!-- /services --> */}
 <section className="services py-5" id="services">
        <div className="container py-md-5">
		<h3 className="heading text-center mb-3 mb-sm-2">Dịch Vụ</h3>
            <div className="row ab-info second mt-lg-4">
                <div className="md-form mr-auto m-0 text-center px-lg-5 ">
                    {/* {contentPro} */}
                    {loading ? <Loader/>
                        : error ? <Message variant='danger'>{error}</Message>
						:<Row>
							{products.map((product =>
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
							))}
						</Row>
                    }
                </div>
            </div>
        </div>
    </section>
	<section className="ab-content-inner">
        <img src="images/h1.jpg" alt="Popup image" className="img-fluid mt-4" />
    </section>
    {/* <section className="services py-5" id="services">
        <div className="container py-md-5">
		<h3 className="heading text-center mb-3 mb-sm-5">Services</h3>
            <div className="row ab-info">
                <div className="col-md-6 ab-content ab-content1">
                    <div className="ab-content-inner">
					<Link to="/single"><img src="assets/Home/images/services2.jpg" alt="news image" className="img-fluid"/></Link>
                        <div className="ab-info-con">
                            <h4> Trim your Hair</h4>
                            <Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ab-content ab-content1">
                    <div className="ab-content-inner">
					<Link to="/single"><img src="assets/Home/images/services1.jpg" alt="news image" className="img-fluid"/></Link>
                        <div className="ab-info-con">
                            <h4>Trim your Beard</h4>
                            <Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ab-info second mt-lg-4">
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/single"><img src="assets/Home/images/ser3.jpg" alt="news image" className="img-fluid"/></Link>
                        <div className="ab-info-con">
                            <h4>colouring</h4>
                            <Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/single"><img src="assets/Home/images/ser4.jpg" alt="news image" className="img-fluid"/></Link>
                        <div className="ab-info-con">
                            <h4>Bathing</h4>
                            <Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/single"><img src="assets/Home/images/ser5.jpg" alt="news image" className="img-fluid"/></Link>
                        <div className="ab-info-con">
                            <h4>drying</h4>
                            <Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ab-content">
                    <div className="ab-content-inner">
					<Link to="/single"><img src="assets/Home/images/ser6.jpg" alt="news image" className="img-fluid"/></Link>
                        <div className="ab-info-con">
                            <h4>Creams</h4>
                            <Link to="/single" className="read-more two btn m-0 px-3" role="button"><span className="fa fa-arrow-circle-o-right"> </span></Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- /services -->
 
	<!-- pricing --> */}
{/* <section className="pricing py-5">	
	<div className="container py-md-5">
		<h3 className="heading text-capitalize text-center mb-3 mb-sm-5"> Our Pricing</h3>
		<div className="row pricing-grids">
			<div className="col-lg-6  mb-lg-0 mb-5">
				<div className="padding">
					 <h3>PRICES FOR MUSTACHE TRIMMING</h3> */}
					{/* <!-- Item starts --> */}
					{/* <div className="menu-item">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Trim your Mustaches style 1</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$7</h6>
							</div>
						</div>
						
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item my-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Trim your Mustaches style 2</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$10</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Trim your Mustaches style 3</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$15</h6>
							</div>
						</div>
						
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item mt-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Trim your Mustaches style 4</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$15</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item mt-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Trim your Mustaches style 5</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$20</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item mt-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Trim your Mustaches style 6</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$25</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends --> */}
				{/* </div> */}
			{/* </div> */}
			{/* <div className="col-lg-6  mb-lg-0 mb-5">
				<div className="padding">
					<h3>HAIR AND BEARD CUT PRICES</h3> */}
					{/* <!-- Item starts --> */}
					{/* <div className="menu-item">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Dye your hair and beard 1</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$27</h6>
							</div>
						</div>
						
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item my-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Dye your hair and beard 2</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$21</h6>
							</div>
						</div>
						
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Dye your hair and beard 3</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$25</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item mt-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Dye your hair and beard 4</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$28</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item mt-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Dye your hair and beard 5</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$30</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends -->
					<!-- Item starts --> */}
					{/* <div className="menu-item mt-4">
						<div className="row border-dot no-gutters">
							<div className="col-8 menu-item-name">
								<h6>Dye your hair and beard 6</h6>
							</div>
							<div className="col-4 menu-item-price text-right">
								<h6>$35</h6>
							</div>
						</div>
					</div> */}
					{/* <!-- Item ends --> */}
				{/* </div>		
			</div>
					
		</div>		
	</div>		
</section> */}
{/* <!-- //pricing -->
  <!--/order-now--> */}
    <section className="order-sec py-5">
        <div className="container py-md-5">
            <div className="test-info text-center">
                <h3 className="tittle order">
                    <span>HÃY GỌI CHO CHÚNG TÔI NẾ CÓ BẤT CỨ THẮC MẮC GÌ</span>Đội ngũ nhân viên của chúng tôi sẽ gọi lại ngay lập tức để nhận lại sự phản hồi từ phía khách hàng</h3>
                <h4 className="tittle my-2">0356818998</h4>

                <div className="read-more mx-auto m-0 text-center">
					<Link to="/contact"className="read-more scroll btn">BẤM VÀO ĐÂY</Link></div>
            </div>
        </div>
    </section>
    {/* <!--//order-now-->

 <!--/testimonials--> */}
    <section className="testimonials py-5" id="testimonials">
        <div className="container py-md-5">
               <h3 className="heading text-center mb-3 mb-sm-5">ĐÁNH GIÁ KHÁCH HÀNG</h3>
            <div className="row mt-3">

                <div className="col-md-4 test-grid text-left px-lg-3">
                    <div className="test-info">

                        <p>Đại Nam được biết đến là khu du lịch có quy mô rộng lớn nhất Việt Nam, với diện tích lên đến 711ha, còn được gọi là khu du lịch Đại Nam hay là Lạc cảnh Đại nam Văn Hiến.</p>
                        <h3 className="mt-md-4 mt-3"> Nguyễn Hữu Hoàng Kiệt</h3>

                        <div className="test-img text-center mb-3">
                            <img src="assets/Home/images/test1.jpg" className="img-fluid" alt="user-image"/>
                        </div>
                        <div className="mobl-footer test-soc text-center">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">
							<span className="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li className="mx-1">
                                    <a href="#">
							<span className="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                    <div className="test-info">

                        <p>Mình và gia đình qua Đại Nam 2 lần rồi, mấy bé nhà mình rất thích vô Đại Nam, có vườn thú, hồ bơi, vui lắm, có xe trung chuyển nữa, mà nhà mình thích đi bộ khám phá, phải nói là rộng đi mỏi chân luôn. Nhưng mà vui.</p>
                        <h3 className="mt-md-4 mt-3"> Trần Thùy Dung</h3>
                        <div className="test-img text-center mb-3">
                            <img src="assets/Home/images/test2.jpg" className="img-fluid" alt="user-image"/>
                        </div>
                        <div className="mobl-footer test-soc text-center">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">
							<span className="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li className="mx-1">
                                    <a href="#">
							<span className="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 test-grid text-left px-lg-3">
                    <div className="test-info">

                        <p>Tuy lâu lắm rồi không đi, khá cũ cũng có nhiều công trình mới thú vị. Nên đi cùng bạn bè, gia đình có thêm nhiều trải nghiệm hơn, có khuôn viên khá rộng nên đi mệt xĩu nha mn 😅.</p>
                        <h3 className="mt-md-4 mt-3">Nguyễn Tuấn Anh</h3>

                        <div className="test-img text-center mb-3">
                            <img src="assets/Home/images/test3.jpg" className="img-fluid" alt="user-image"/>
                        </div>
                        <div className="mobl-footer test-soc text-center">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">
							<span className="fa fa-facebook-f"></span>
						</a>
                                </li>
                                <li className="mx-1">
                                    <a href="#">
							<span className="fa fa-twitter"></span>
						</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>

{/* <!--//testimonials-->
<!-- subscribe --> */}
<section className="subscribe" id="subscribe">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
				<div className="news-icon mr-3">
					<span className="fa fa-paper-plane" aria-hidden="true"></span>
				</div>
				<div className="text">
					<h3><span className="fa fa-user-secret" aria-hidden="true"></span> THEO DÕI CHÚNG THÔI TẠI ĐÂY <span className="fa fa-envelope"></span></h3>
				</div>
			</div>
			<div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
				<form action="#" method="post">
					<input type="email" name="email" placeholder="Vui lòng ghi địa chỉ email của bạn ở đây: " required=""/>
					<button className="btn1"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
				</form><br/>
				<p>Chúng tôi không bao giờ chia sẻ email của bạn với bất kỳ ai khác!</p>
			</div>
		</div>
	</div>
</section>


      	  </div>
  	  )
	}

