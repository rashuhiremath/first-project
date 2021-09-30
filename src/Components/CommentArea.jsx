import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    commentOfBook: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  handleInput = (propertyName, value) => {
    this.setState({
      commentOfBook: {
        ...this.state.commentOfBook,
        [propertyName]: value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // now how can we access the form input value?
   console.log(this.state.commentOfBook)
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentOfBook),
          headers: {
            "Content-type": "application/json",
            Authorization:
              " Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzMwMDkzMTcsImV4cCI6MTYzNDIxODkxN30.FNA1VnUqUQlxb4ulOq3HAIHdDStj43c4dUjlPIC0pM4 ",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Comment saved successfully!");
        this.setState({
          // this is the initial state of my form!
          commentOfBook: {
            comment: "",
            rate: "",
            elementId: "",
          },
        });
      } else {
        alert("Something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Any comments?</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              onChange={(e) => this.handleInput("comment", e.target.value)}
              value={this.state.commentOfBook.comment}
              type="text"
              placeholder="Enter your special requests here"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>rate</Form.Label>
            <Form.Control
              as="select"
              value={this.state.commentOfBook.rate}
              onChange={(e) => this.handleInput("rate", e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>elementID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone here"
              value={this.state.commentOfBook.elementId}
              onChange={(e) => this.handleInput("elementId", e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default CommentArea;
