import { Col, Container, Row } from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import Product from "./Product";
import axios from 'axios';
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((err) => console.log(err));
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Product/>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductListing;
