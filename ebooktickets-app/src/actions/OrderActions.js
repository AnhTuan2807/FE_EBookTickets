// import axios from 'axios'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'
import APIs, { endpoints } from '../configs/APIs'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,

} from '../constants/OrderConstants'

export const createOrder = (order) => async (dispatch) => {
    
    
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })

        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }
        }

        // const { data } = await APIs.post(endpoints["ticket"],order,config)
        const { data } = await APIs.post('/ticket/',order, config);
        // const data = await response.json();
        // axios.post('/ticket/',order, config)
        //     .then(response => response.json())
        //     .then(data => this.setState({ 'ticket_price': data.ticket_price, 'content': data.content }));
        
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await APIs.get(
            `/ticket/${id}/`,
            config
        )

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
export const payOrder = (id, paymentResult) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }
        
        const { data } = await APIs.put(
            `/ticket/${id}/pay/`,
            paymentResult,
            config
        )

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
