import React,{useState,useEffect} from 'react'
import {Row ,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'



const HomeScreen = () => {
      const [Products, setProducts] = useState([])
      
      useEffect(()  => {

           const  FetchProducts = async()=>{
          
          const {data} = await axios.get('/api/products/')
          setProducts(data);
        }
        FetchProducts();
      
          
      }, [])
      

  return (
    <div>
      <h1>Latest Products</h1>
    <Row>
        {Products.map(product =>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <h3>{product.name}</h3>
                    <Product product={product} ></Product>
            </Col>
        ))}
    </Row>
    </div>
  )
}

export default HomeScreen
