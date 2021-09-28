import { Component } from "react"
import { Jumbotron } from "react-bootstrap"
import { Container } from "react-bootstrap"



class Welcome extends Component {
    render(){
        return(<Jumbotron fluid>
            <Container >
              <h1>World Book Stall</h1>
              <p>
                All subject and hobbies related books are available here and also horror stories books.
              </p>
            </Container>
          </Jumbotron> )
    }

}
export default Welcome