import React from "react";
import { Link } from "react-router-dom";

class Single extends React.Component{
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
		<li className="breadcrumb-item active" aria-current="page">Single page</li>
	</ol>
</div>
{/* <!-- //page details -->

<!-- /single-page --> */}
    <section className="banner-bottom py-5">
        <div className="container py-md-5">
	<h3 className="heading text-center mb-3 mb-sm-5">Saloon Info</h3>
            <div className="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
                <div className="content-sing-w3ls px-lg-5">
                    <img className="img-fluid" src="images/ban3.jpg" alt=""/>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna .Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Sed diam nonummy nibh euismod magna .Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.</p>
                    <p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                    <ul className="w3ls_social_list list-unstyled mt-4">
                        <li className="lead">
                            Catch On Social :
                        </li>
                        <li>
                            <a href="#" className="w3pvt_facebook">
                                <span className="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="#" className="w3pvt_twitter">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="w3pvt_dribble">
                                <span className="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li className="ml-2">
                            <a href="#" className="w3pvt_google">
                                <span className="fa fa-google-plus"></span>
                            </a>
                        </li>
                    </ul>



                </div>
                <div className="row my-lg-5 mt-3 mx-0">
                    <div className="col-lg-6 text-info pl-0">
                        <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor elementum id enim volutpat...</p>
                    </div>
                    <div className="col-lg-6 mt-3 team-img">
                        <div className="row">
                            <div className="col-6">
                                <img src="assets/Home/images/s1.jpg" className="img-fluid" alt="user-image"/>
                            </div>
                            <div className="col-6">
                                <img src="assets/Home/images/s2.jpg" className="img-fluid" alt="user-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-sec-w3ls">
                    <h4 className="leave-w3ls mb-5">3 Comments</h4>
                    <ul className="list-unstyled">
                        <li className="media">
                            <img className="mr-3 img-fluid" src="assets/Home/images/HoangBuu.jpg" alt=""/>

                            <div className="media-body">
                                <h5 className="mt-0 mb-1">Hoàng Bửu</h5>
                                <p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            </div>
                        </li>
                        <li className="media my-5 ml-3">
                            <img className="mr-3 img-fluid" src="assets/Home/images/VanTrung.jpg" alt=""/>
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">Văn Trung</h5>
                                <p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            </div>
                        </li>
                        <li className="media ml-5">
                            <img className="mr-3 img-fluid" src="assets/Home/images/ThienPhuc.jpg" alt=""/>
                            <div className="media-body">
                                <h5 className="mt-0 mb-1">Thiên Phúc</h5>
                                <p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="comment-bottom w3pvt_mail_grid_right p-0 my-lg-5 my-4">
                    <h4 className="leave-w3ls mb-5">Leave a Reply</h4>
                    <form action="#" className="w3ls-contact-fm" method="post">


                        <div className="form-group">
                            <label>Write Message</label>
                            <textarea className="form-control" name="Message" placeholder="" required=""></textarea>
                        </div>
                        <div className="row leave-comment">
                            <div className="col-lg-6 form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" name="Name" placeholder="" required=""/>
                            </div>
                            <div className="col-lg-6 form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" name="Email" placeholder="" required=""/>
                            </div>
                        </div>

                        <button type="submit" className="btn read mt-3">Submit</button>
                    </form>
                </div>

            </div>


        </div>
    </section>
            </div>
        )
    }
}
export default Single