import React ,{useState ,useEffect} from 'react'
import {  Row,Col ,Button, ListGroup, Image,Card} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, useNavigate,  } from 'react-router-dom';
import Message from '../components/Message'
import CheckOutSteps from '../components/CheckOutSteps'


const PlaceOrderScreen = () => {
  const cart=useSelector(state => state.cart)
  return (
    <div>
      <CheckOutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <h2> Shipping</h2>
                <p>
                    <strong> Shipping: </strong>
                    {cart.shippingAddress.address},{cart.shippingAddress.city}
                    {'  '}
                    {cart.shippingAddress.postalCode}
                    {'  '}   
                    {cart.shippingAddress.country}
              </p>

            </ListGroup>
           
            <ListGroup variant='flush'>
                <h2> Payment Method</h2>
                <p>
                    <strong> Shipping: </strong>
                    {cart.shippingAddress.address},{cart.shippingAddress.city}
                    {'  '}
                    {cart.shippingAddress.postalCode}
                    {'  '}   
                    {cart.shippingAddress.country}
              </p>

            </ListGroup>
        </Col>
        <Col md={4}>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen