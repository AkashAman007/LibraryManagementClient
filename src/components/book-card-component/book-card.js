import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const BookCard = (props) => {
  console.log(props);
  const { book, userListing, onBorrowBook, onReturnBook  } = props;
  const { author, imageLink, title, availableQty, description}  = book;

    return <Card border="primary" className="book-card">
    <Card.Img variant="top" src={imageLink} />
    <Card.Body>
      <div className="mb-4 h3">{title}
      </div>
      <Card.Subtitle className="mb-4">
        <span className="text-muted">{author}</span>
        {
          !userListing && (
            <span className="float-right h5">
              Available Qty. <Badge variant="info">{availableQty}</Badge>
            </span>
          )
        }
      </Card.Subtitle>
      <Card.Text className="mb-4">
            {description}
      </Card.Text>
      {
        !userListing &&
        <Button variant="primary" size="lg" block onClick={() => {
            onBorrowBook(book);
        }}>Borrow</Button>
      }
      {
        userListing &&
        <Button variant="primary" size="lg" block onClick={() => {
            onReturnBook(book);
        }}>Return</Button>
      }
    </Card.Body>
  </Card>
}