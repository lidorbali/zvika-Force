import React, { useState, useEffect } from "react";
import { Link, useLocation,Navigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails , updateUserProfile } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')




  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();


    const userDetails = useSelector(state => state.userDetails)
     const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
     const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
     const { success } = userUpdateProfile





  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user || !user.name || success || userInfo._id !== user._id) {
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user,success])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
     
      dispatch(updateUserProfile({
    'id':user._id,
    'name': name,
    'email': email,
    'password' : password
    }))
    setMessage('')
    }

  }


  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>set new Password</Form.Label>
            <Form.Control
                autoComplete="off"
                type="password"
                placeholder="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>confirm your Password</Form.Label>
            <Form.Control
              autoComplete="off"  
              type="password"
              placeholder="confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>


      <Col md={3}>
        <h2>User Profile</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen