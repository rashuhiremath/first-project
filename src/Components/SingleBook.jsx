import React from "react";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
// import the commentsArea (FetchedComments)
import FetchedComment from "./FetchedComment";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
// We want to display the comments after we click on the book img
// We need state to tell me if the book isClicked or not

  state={
      isClicked:false
  }

  toggleCommentsArea = ()=>{
    this.setState({
        isClicked: !this.state.isClicked //this will toggle is Clicked if is true will turn into false and vice-verse
    })
  }

// now we need to display the comments if the isCliked is true
//inside of the comments you need to request the comments and display the comments

// you need to import the component and then create a logic to display it 
  render() {
    return (
      <div>
          <Row>
              <Col md={4}>
        <Card style={{ width: "18rem" }}>
            
          <Card.Img variant="top" src={this.props.book.img} onClick={this.toggleCommentsArea} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
            <Button variant="primary">{this.props.book.price}</Button>
          </Card.Body>
        </Card>
        </Col>
        
        <Col className="px-5 mr-auto">
        {/* {create a logic to display the comments , probably you also need to pass the book.asin or _id to the fetchedComment} */
        // this.state.isClicked &&
    <CommentArea />
        }
        </Col>
        </Row>
      </div>
    );
  }
}

// const SingleBook = ({book}) => (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={book.img} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>{book.category}</Card.Text>
//         <Button variant="primary">{book.price}</Button>
//       </Card.Body>
//     </Card>
//   )

export default SingleBook;
