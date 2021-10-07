import { Component } from "react";

import { ListGroup } from "react-bootstrap";

class FetchedComment extends Component {
  state = {
    mybooks: [],
  };

  booksToDisplay = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          //you need toretrieve the book id from the comments to send the right request
          headers: {
            Authorization:
              " Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2MzMwMDkzMTcsImV4cCI6MTYzNDIxODkxN30.FNA1VnUqUQlxb4ulOq3HAIHdDStj43c4dUjlPIC0pM4 ",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log({data});

        this.setState({
          mybooks: data,
        });
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    console.log("im mounted");
    this.booksToDisplay();
  };

  render() {
    console.log('state', this.state)
    return (
      <>
        <h3>Comments Here!!!</h3>
        <ListGroup>
          {
             this.state.mybooks.map(com => (<ListGroup.Item key ={com._id}>{com.comment}</ListGroup.Item>))
            
          }
        </ListGroup>
      </>
    );
  }
}

export default FetchedComment;
