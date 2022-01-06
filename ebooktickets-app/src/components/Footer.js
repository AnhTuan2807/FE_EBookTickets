import React, {Component} from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- footer -->  */}
    <footer className="footer-content">
        <div className="layer footer">
            <div className="container-fluid">
                <div className="row footer-top-inner-w3ls">
                    <div className="col-lg-4 col-md-6 footer-top ">
                        <h2>
                            <Link to="/"><span className="fa fa-bus" aria-hidden="true"></span> BOOK TICKERS <span className="fa fa-user-secret" aria-hidden="true" ></span></Link>
                        </h2>
                        <p className="my-3">Website được thực hiện bởi sinh viên OU, nếu có sai sót xin hãy liên hệ với chúng tôi.</p>
                        <p>
                        Cảm ơn mọi người đã xem.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title">Thời Gian</h3>
                            <hr/>
                            <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                <li>
                                    <p> Thứ 2 - Thứ 6 08.00 am - 12.00 pm</p>

                                </li>
                                <li className="my-2">
                                    <p>Thứ 7 - 09.00 am - 11.00 pm</p>

                                </li>
                                <li className="my-2">
                                    <p>Chủ Nhật 08.00 am - 15.00 am</p>

                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                        <div className="footer-w3pvt">
                            <h3 className="mb-3 w3pvt_title">Liên Hệ</h3>
                            <hr/>
                            <div className="last-w3ls-contact">
                                <p>
                                    <a href="mailto:example@email.com">1851050169tuan@ou.edu.vn</a><br/>
                                    <a href="mailto:example@email.com">18510500016dung@ou.edu.vn</a>
                                </p>
                            </div>
                            <div className="last-w3ls-contact my-2">
                                <p>+ 84 356818998</p>
                            </div>
                            <div className="last-w3ls-contact">
                                <p>+ 371 Nguyễn Kiệm , Phường 3, Gò Vấp
                                    <br/>Trường Đại Học Mở TP.HCM</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2021 BookTickets. All Rights Reserved | Design by [Tuấn - Dung]
                    {/* <a href="http://w3layouts.com/"> W3layouts </a> */}
                </p>
                <div className="w3ls-footer text-center mt-4">
                    <ul className="list-unstyled w3ls-icons">
                        <li>
                            <a href="#">
							<span className="fa fa-facebook-f"></span>
						</a>
                        </li>
                        <li>
                            <a href="#">
							<span className="fa fa-twitter"></span>
						</a>
                        </li>
                        <li>
                            <a href="#">
							<span className="fa fa-dribbble"></span>
						</a>
                        </li>
                        <li>
                            <a href="#">
							<span className="fa fa-vk"></span>
						</a>
                        </li>
                    </ul>
                </div>
                <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
            </div>
            {/* <!-- //footer bottom --> */}
        </div>
    </footer>
    {/* <!-- //footer --> */}
            </div>
        )
    }
}
export default Footer;