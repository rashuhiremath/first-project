import { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import books from '../Data/Books.json'
import { Card } from "react-bootstrap"


class LatestRelease extends Component {
    render(){

        return(
            <Container>
                <Row>
                  <Col md={4} lg={3}> 
                  {
                      books.map(book => (
                        <Card style={{ width: '18rem' }} key={book.id}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text>
                          {book.category}
                          </Card.Text>
                          
                        </Card.Body>
                      </Card>

                      ))
        }
      
      </Col> 
      </Row>
      </Container>
      
    )}
}
export default LatestRelease