import React, { Component, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cookies from 'react-cookies';
import { logoutUser } from "../ActionCreators/UserCreators";


export default function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  const logout = (event) => {
	event.preventDefault()
	cookies.remove("access_token")
	cookies.remove("user")
	dispatch(logoutUser())
  }
  
  return (
    <div>
      <header>
        <div className="container">
          <div className="header d-lg-flex justify-content-between align-items-center">
            <div className="header-agile">
              <h1>
                <Link to="/" className="navbar-brand logo">
                  <span className="fa fa-bus" aria-hidden="true"></span> BOOK
                  TICKETS{" "}
                  <span className="fa fa-user-secret" aria-hidden="true"></span>
                </Link>
              </h1>
            </div>
            <div className="nav_w3ls">
              <nav>
                <label htmlFor="drop" className="toggle mt-lg-0 mt-1">
                  <span className="fa fa-bars" aria-hidden="true"></span>
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li className="mr-lg-3 mr-2 active">
                    <Link to="/">Trang Chủ</Link>        
                  </li>
                  <li className="mr-lg-3 mr-2">
                    <Link to="/about">Giới Thiệu</Link>
                  </li>
                  {/* <li className="mr-lg-3 mr-2 p-0"> */}
                    {/* <!-- First Tier Drop Down --> */}
                    {/* <label htmlFor="drop-2" className="toggle">
                      Dropdown{" "}
                      <span className="fa fa-angle-down" aria-hidden="true"></span>{" "}
                    </label>
                    <a href="#">
                      Dropdown{" "}
                      <span className="fa fa-angle-down" aria-hidden="true"></span>
                    </a>
                    <input type="checkbox" id="drop-2" />
                    <ul className="inner-dropdown">
                      <li>
                        <Link to="/service">What We Do</Link>
                      </li>
                      <li>
                        <Link to="/single">See more</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="mr-lg-3 mr-2">
                      <Link to="/service">Dịch vụ</Link>
                    </li>
                  <li className="mr-lg-3 mr-2">
                    <Link to="/gallery">Thư Viện</Link>
                  </li>
                  <li className="mr-lg-3 mr-2">
                    <Link to="/contact">Liên Hệ</Link>
                  </li>
                  {user ? <>
                    <li className="mr-lg-3 mr-2">
						<Link to="/">{user.username}</Link>
					</li>
					<li className="mr-lg-3 mr-2">
						<Link onClick={logout}>Thoát</Link>
					</li>
                  </> : (
                    <>
                      <li className="mr-lg-3 mr-2">
                        <Link to="/login">Đăng Nhập</Link>
                      </li>
                      <li className="mr-lg-3 mr-2">
                        <Link to="/register">Đăng Kí</Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
