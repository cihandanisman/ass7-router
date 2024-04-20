
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFollowers({item}) {
  
  const handleClick = () => {
    window.location.href = item.html_url
  }
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.avatar_url} />
      <Card.Body>
        <Card.Title>{item.login}</Card.Title>

        <Button onClick={handleClick} variant="primary">View Profil</Button>
      </Card.Body>
    </Card>
  );
}

export default CardFollowers;