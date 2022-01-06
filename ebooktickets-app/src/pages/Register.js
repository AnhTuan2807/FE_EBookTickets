import React , {Component, useState, useRef} from "react";
import {Button, Form} from "react-bootstrap";
import { useHistory } from "react-router";
import APIs, { endpoints } from "../configs/APIs";

function RegisterForm(props) {
    return(
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type}
                            value={props.value}
                            onChange={props.onChange}/>
        </Form.Group>
    )
}

export default function Register(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const avatar = useRef();
    const history = useHistory()
    

    const register = (event) => {
        // console.log({firstName,lastName})
        event.preventDefault()

        let registerUser = async () => {
            const formData = new FormData()
            formData.append("first_name", firstName)
            formData.append("last_name", lastName)
            formData.append("email", email)
            formData.append("username", username)
            formData.append("password", password)
            formData.append("avatar", avatar.current.files[0])

            try {
                let res = await APIs.post(endpoints['register'], formData, {
                    header: {
                        "Content-Type": "multipart/form-data"
                    }
                })
    
                console.info(res.data)
                history.push("/login")
            } catch(err) {
                console.error(err)
            }
        }
        if (password !== null && password === confirmPassword) {
            registerUser()
        }
    }

    

    return(
        <>
            <div class="page-content" >
                <div class="form-v4-content">
                    <div class="form-left">
                        <h2>Thông Tin</h2>
                        <p class="text-1">Chào mừng bạn đến với website đăng kí dành riêng cho người dùng mới của EBookTickets! Trên trang web này, bạn có thể đăng kí tài khoản với chúng tôi để truy cập vào trang web phục vụ cho nhu cầu của người dùng.</p>
                        <p class="text-2"><span>BookTickets:</span> Nhanh tay đăng kí tài khoản và đăng nhập để sử dụng dịch vụ.</p>
                        <div class="form-left-last">
                            {/* <input type="submit" name="account" class="account" value="Have An Account"/> */}
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
                    </div>
                    <form class="form-detail" action="#" method="post" id="myform" onSubmit={register}>
                        <h2>ĐĂNG KÍ</h2>
                        <div class="form-group">
                            <div class="form-row form-row-1">
                                {/* <label for="first_name">First Name</label>
                                <input type="text" name="first_name" id="first_name" class="input-text"/> */}
                                <RegisterForm id="firstName" label="First Name"
                                    type="text" value={firstName}
                                    onChange={(event) => {
                                        // console.log('event',event)
                                        setFirstName(event.target.value)}} />
                
                            </div>
                            <div class="form-row form-row-1">
                                {/* <label for="last_name">Last Name</label>
                                <input type="text" name="last_name" id="last_name" class="input-text"/> */}
                                <RegisterForm id="lastName" label="Last Name"
                                    type="text" value={lastName}
                                    onChange={(event) => setLastName(event.target.value)} />                     
                
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row form-row-1">
                                <RegisterForm id="username" label="UserName"
                                        type="text" value={username}
                                        onChange={(event) => setUsername(event.target.value)} />
                            </div>
                            <div class="form-row form-row-1">
                                {/* <label for="your_email">Your Email</label>
                                <input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/> */}
                                <RegisterForm id="email" label="Email"
                                        type="email" value={email}
                                        onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <div class="form-row form-row-1 ">
                                {/* <label for="password">Password</label>
                                <input type="password" name="password" id="password" class="input-text" required/> */}
                                <RegisterForm id="password" label="Password"
                                    type="password" value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                
                            </div>
                            <div class="form-row form-row-1">
                                {/* <label for="comfirm-password">Comfirm Password</label>
                                <input type="password" name="comfirm_password" id="comfirm_password" class="input-text" required/> */}
                                <RegisterForm id="confirm" label="Confirm Password"
                                    type="password" value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)} />
                               
                            </div>
                        </div>
                        <div class="form-row">
                            <Form.Group className="mb-3" controlId="avatar">
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control type="file"
                                    ref={avatar} className="form-control"/>
                            </Form.Group>
                        </div>
                        <div class="form-checkbox">
                            <label class="container"><p>Bạn đồng ý với các<a href="#" class="text"> chính sách và điều khoản?</a></p>
                                <input type="checkbox" name="checkbox"/>
                                <span class="checkmark"></span>
                            </label>
                        </div><br/>
                        <div class="form-row-last">
                            {/* <input type="submit" name="register" class="register" value="Register"/> */}
                            <Button variant="primary" type="submit">
                                Đăng Kí
                            </Button> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
    
}

        