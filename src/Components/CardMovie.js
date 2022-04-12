import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardMovie({movie}) {
  return (
    <div>
      <Card style={{width:'18rem',height:"550px"}}>
  <Card.Img variant="top" src={movie.posterUrl} style={{ height: "40%" }} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text style={{ textAlign: 'justify' }}>
    Interstellar, ou Interstellaire  Michael Caine, Casey Affleck et Matt Damon.

      </Card.Text>
    <Card.Title style={{ margin: '20px  0 20px 0' }}>rating:{movie.rate}</Card.Title>
    <Button variant="primary" >Trailer </Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default CardMovie