import {useSelector} from 'react-redux';
import { Card, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Row>
        <Card style={{ width: '18rem', margin: '20px' }}
        key={id}
        >
          <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
        </Link>
      </Card>
      </Row>
    );
  });
  return (
    <div 
    className={"d-flex flex-wrap"}
    >
    {renderList}
    </div>
  )
}

export default Product;
