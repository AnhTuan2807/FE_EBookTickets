import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { loginUser } from "../ActionCreators/UserCreators";
import APIs, { endpoints } from "../configs/APIs";
import cookies from 'react-cookies';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.info("Test");
    console.info(Math.random());
  });
  const login = async (event) => {
    event.preventDefault();
    try {
      let info = await APIs.get(endpoints["oauth2-info"]);
      // console.info(info)
      let res = await APIs.post(endpoints["login"], {
        client_id: info.data.client_id,
        client_secret: info.data.client_secret,
        username: username,
        password: password,
        grant_type: "password",
      });

      
      cookies.save("access_token", res.data.access_token);

      let user = await APIs.get(endpoints["current-user"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });
      console.info(user);

      cookies.save("user", user.data);

      dispatch(loginUser(user.data));
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <section onSubmit={login} className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">ĐĂNG NHẬP</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <h2>Chào Mừng Bạn Đăng Nhập</h2>
                    <p>Bạn Chưa Có Tài Khoản?</p>

                    <Link className="btn btn-white btn-outline-white" to="/register">
                        Đăng Kí
                    </Link>
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Đăng Nhập</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                      <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-google"></span>
                        </a>
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook"></span>
                        </a>
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">
                          Remember Me
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => {
                              setRememberMe(e.target.checked);
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="w-50 text-md-right">
                        <a href="#">Quên Mật Khẩu?</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
