import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from "../components/Home";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Registers from '../pages/Register';
import Footer from "./Footer";
import Header from "./Header";
import BusesArrScreen from '../screens/BusesArrScreen';

// import API, { AuthAPI, endpoints } from "./components/API";
// import cookies from 'react-cookies'


export default function Body(){
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path = "/" component ={Home}/>
            <Route exact path = "/login" component={Login}></Route>
            <Route exact path = "/register" component={Register}></Route>
            <Route exact path="/busarrangements​/:BusArrId/" component={BusesArrScreen} />
        </Switch>
        <Footer/>
        </BrowserRouter>
    )
}