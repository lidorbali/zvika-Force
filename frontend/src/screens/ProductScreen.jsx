import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../Products";
import axios from "axios";

const ProductScreen = ({match}) => {
  const product_id =useParams()
  const [product, setProduct] = useState([])
      
  useEffect(()  => {

       const  FetchProduct = async()=>{
      
      const {data} = await axios.get(`/api/product/${product_id.id}`)
      setProduct(data);
    }
    FetchProduct();
  
      
  }, [])


  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image width={400} src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews `}
                color={`#f8e825`}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              price : ₪{product.price}</ListGroup.Item>

        
            
            <ListGroup.Item>
              description : {product.description}
              </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
              <ListGroup>
                <ListGroup.Item>
                    <Row>

                          <Col>Price:</Col>
                          <Col>
                          <h4>₪ {product.price}</h4>
                            </Col>

                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>

                          <Col>Status:</Col>
                          <Col>
                            {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                            </Col>

                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button className=" btn-block" disabled={product.countInStock === 0 } type="button"> Add to Cart</Button>
                </ListGroup.Item>

              </ListGroup>            
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
