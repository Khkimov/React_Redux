import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { Row, Card, Button, } from "react-bootstrap";

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { image, title, price, category, description } = product;
  const {productId} = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err => console.log("ERROR ", err));

    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);

  return (
    <Row>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div 
        style={{ 
        width: '600px', 
        margin: '50px auto', 
        display: 'flex',
      }}
        >
        <Card.Img 
        style={{
          maxHeight: "250px",
          marginRight: '20px'
        }}
        variant="" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button variant="outline-danger">Add to Cart</Button>
        </Card.Body>
      </div>
      )}
      </Row>
  )
}

export default ProductDetail;
