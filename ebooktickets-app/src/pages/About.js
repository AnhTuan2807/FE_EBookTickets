import React , {Component} from "react";
import { Link } from "react-router-dom";

class About extends React.Component{
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
                        <li className="breadcrumb-item active" aria-current="page">Giới Thiệu</li>
                    </ol>
                </div>
                {/* <!-- //page details -->
                    <!--about-mid --> */}
                    <section className="banner-bottom py-5" id="exp">
                        <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Thông Tin</h3>
                            <div className="row mid-grids mt-lg-5 mt-3">
                                <div className="col-md-5 content-w3pvt-img">
                                    <img src="assets/Home/images/TuanAnh.jpg" alt="" className="img-fluid"/>
                                </div>
                                <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                                    <h5 className="mt-1">CHÚNG TÔI CUNG CẤP NHỮNG GÌ? </h5>
                                    <h4>điểm đến
                                        <br/>nơi đến</h4>
                                    <p className="mt-2 text-left">Chúng tôi giúp bạn tiết kiệm chi phí đến quầy vé để mua vé ngoài ra còn tránh được hàng giờ chờ đợi lâu tại nhà ga hoặc nhà ga vì chuyến khởi hành tiếp theo sẽ diễn ra trong 3 giờ tới! Chúng tôi có hơn 200 nhà khai thác và hơn 8.000+ tuyến đường trong Việt Nam và Hàn cho bạn lựa chọn.</p>

                                </div>


                            </div>
                            <div className="row mid-grids mt-lg-5 mt-3 py-3">

                                <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                                    <h5 className="mt-1">LÀM THẾ NÀO ĐỂ CHÚNG TÔI LÀM CHO NÓ DỄ DÀNG CHO BẠN? </h5>
                                    <h4>kiểm tra lịch trình 
                                        <br/>so sánh trực tiếp</h4>
                                    <p className="mt-2 text-left">Bạn có thể dễ dàng kiểm tra lịch trình, tình trạng còn vé và so sánh giá trực tuyến trên trang web của chúng tôi. Hơn nữa, bạn có thể chọn chỗ ngồi ưa thích của mình và thanh toán bằng nhiều phương thức thanh toán trực tuyến bảo đảm khác nhau như thẻ tín dụng / thẻ ghi nợ, ngân hàng trực tuyến, eWallet và nhiều phương thức khác! Với hàng triệu vé đã được bán trong nhiều năm, BusOnlineTicket là công ty luôn cố gắng cải thiện để chúng tôi có thể cung cấp nền tảng đặt vé trực tuyến tốt nhất với khả năng sử dụng tuyệt vời nhằm mang lại sự dễ dàng và lợi ích cho khách hàng.</p>

                                </div>
                                <div className="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                                    <img src="assets/Home/images/tinhyeu.jpg
                                    " alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- //about-mid -->
                <!-- states --> */}
                <section className="stats-count">
                <div className="overlay py-5">
                    <div className="container py-md-5">
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
                        <h5>700</h5>
                        <h6 className="pt-2">Khách Hàng</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                        <h5>250 +</h5>
                        <h6 className="pt-2">Theo Dõi</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                        <h5>150</h5>
                        <h6 className="pt-2">Điểm Đến</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                        <h5>125</h5>
                        <h6 className="pt-2">Nhân Viên</h6>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
  {/* <!--//states -->

 <!--//team --> */}
    <section className="banner-bottom  py-5">
        <div className="container py-md-5">
			<h3 className="heading text-center mb-3 mb-sm-5">Nhóm Của Chúng Tôi</h3>
            <div className="row mt-lg-5 mt-4">
                <div className="col-md-4 team-gd text-center">
                    <div className="team-img mb-4">
                        <img src="assets/Home/images/AnhTuan.jpg" className="img-fluid" alt="user-image"/>
                    </div>
                    <div className="team-info">
                        <h3 className="mt-md-4 mt-3">Anh Tuấn</h3>
                        <p>Sinh viên IT khóa 18 Khoa CNTT - Trường Đại Học Mở TP.HCM</p>
                        <ul className="list-unstyled team-icons mt-4">
                            <li>
                                <a href="https://www.facebook.com/NguyennTuannAnhhh/" className="t-icon">
                                    <span className="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="t-icon">
                                    <span className="fa fa-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="t-icon">
                                    <span className="fa fa-dribbble"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="col-md-4 team-gd second text-center my-md-0 my-5">
                    <div className="team-img mb-4">
                        <img src="assets/Home/images/tinhyeu.jpg" className="img-fluid" alt="user-image"/>
                    </div>
                    <div className="team-info">
                        <h3 className="mt-md-4 mt-3">Trần Thùy Dung</h3>
                        <p>Sinh viên IT khóa 18 Khoa CNTT - Trường Đại Học Mở TP.HCM</p>
                        <ul className="list-unstyled team-icons mt-4">
                            <li>
                                <a href="https://www.facebook.com/kiet.tonkhac" className="t-icon">
                                    <span className="fa fa-facebook-f"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="t-icon">
                                    <span className="fa fa-twitter"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="t-icon">
                                    <span className="fa fa-dribbble"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
            </div>
        )
    }
}
export default About