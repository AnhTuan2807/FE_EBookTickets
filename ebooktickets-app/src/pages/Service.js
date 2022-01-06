import React , { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

export default function Service(){
    const url = `http://127.0.0.1:8000/product/`
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error:false,
    })

    useEffect(() =>{
        setProducts({
            loading:true,
            data:null,
            error:false,
        })
        
        axios.get(url)
        .then(response => {
            
            setProducts({
                loading:false,
                data:response.data,
                error:false,
            })
        }).then((data)=>{
            console.log(data)
          })
        .catch(() =>{
            setProducts({
                loading:false,
                data:null,
                error:true,
            })
        })
    }, [url])

    let content = null

    if(products.data){
        content =
        <Row>
            {products.data.map((product =>
                <Col key={product._id}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>

    }

    // if(products.loading){
    //     content=<Loader></Loader>
    // }

    if(products.error){
        content = <p>Lỗi xuất dữ liễu, hãy khởi động lại trang.</p>
    }
        return(
            <div>
                {/* <!-- banner --> */}
<section className="inner-page-banner" id="home">
</section>
{/* <!-- //banner -->

<!-- page details --> */}
<div className="breadcrumb-agile">
	<ol className="breadcrumb mb-0">
		<li className="breadcrumb-item">
            <Link to="/">Trang Chủ</Link> 
		</li>
		<li className="breadcrumb-item active" aria-current="page">Dịch Vụ</li>
	</ol>
</div>
{/* <!-- //page details -->
<!-- what we do --> */}
<section className="what-we-do py-5">
	<div className="container py-md-5">
	<h3 className="heading text-center mb-3 mb-sm-5">Dịch Vụ</h3>
        {content}
	</div>
</section>
{/* <!-- //what we do -->

  <!--/testimonials--> */}
    <section className="testimonials py-5" id="testimonials">
        <div className="container py-md-5">
               <h3 className="heading text-center mb-3 mb-sm-5">Đánh Giá Khách Hàng</h3>
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

                        <p>Mình và gia đình qua Đại Nam 2 lần rồi, mấy bé nhà mình rất thích vô Đại Nam , có vườn thú , hồ bơi , vui lắm , có xe trung chuyển nữa , mà nhà mình thích đi bộ khám phá , phải nói là rộng đi mỏi chân luôn. Nhưng mà vui.</p>
                        <h3 className="mt-md-4 mt-3"> Nguyễn Tuấn Anh</h3>
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

                        <p>Tuy lâu lắm rồi không đi, khá cũ cũng có nhiều công trình mới thú vị. Nên đi cùng bạn bè, gia đình có thêm nhiều trải nghiệm hơn, có khuôn viên khá rộng nên đi mệt xĩu nha mọi người 😅.</p>
                        <h3 className="mt-md-4 mt-3">Trần Thùy Dung</h3>

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

            </div>
        )
}

