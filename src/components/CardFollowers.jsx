import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFollowers({item}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.avatar_url} />
      <Card.Body>
        <Card.Title>{item.login}</Card.Title>

        <Button variant="primary">View Profil</Button>
      </Card.Body>
    </Card>
  );
}

export default CardFollowers;