import React , {Component} from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component{
    render(){
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
		<li className="breadcrumb-item active" aria-current="page">Liên Hệ</li>
	</ol>
</div>
{/* <!-- //page details -->
<!-- //banner-botttom --> */}
    <section className="content-info py-5">
        <div className="container py-md-5">
            <div className="text-center px-lg-5">
                <h3 className="heading text-center mb-3 mb-sm-5">Liên Hệ</h3>
                <div className="title-desc text-center px-lg-5">
                    <p className="px-lg-5 sub-wthree">Chúng tôi ở đây để giúp đỡ Có một câu hỏi hoặc nhận xét? <br/>Gọi cho chúng tôi một cuộc gọi</p>
                </div>
            </div>
            <div className="contact-w3pvt-form mt-5">
                <form action="#" className="w3layouts-contact-fm" method="post">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Tên đầy đủ</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required=""/>
                            </div>
                            <div className="form-group">
                                <label>Họ đầy đủ</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required=""/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" name="Email" placeholder="" required=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Viết tin nhắn</label>
                                <textarea className="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div className="form-group mx-auto mt-3">
                            <button type="submit" className="btn submit">Gửi</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
    {/* <!-- //banner-botttom --> */}

    <div className="map-w3layouts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.46045380377!2d106.41503196962296!3d10.754666397185357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1633371543950!5m2!1svi!2s" allowfullscreen=""></iframe>
    </div>
            </div>
        )
    }
}
export default Contact