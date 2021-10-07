import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import LatestRelease from "./Components/LatestRelease";
import MyFooter from "./Components/MyFooter";
import FetchedComment from "./Components/FetchedComment";
import SingleBook from "./Components/SingleBook";
import Books from "./Data/Books.json"
import CommentArea from "./Components/CommentArea";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter,Route } from "react-router-dom"
import Registration from "./Components/Registration"
import { useState } from "react";
function App() {

  const [form, setForm] = useState({name: "", surname:"", email:"",password:"",confirmPassword:""})
 
  return (
    <div>
      <BrowserRouter>
      <MyNav />
      <Welcome />
      <Row className="justify-content-center col col-md-4">
        <Col >
        <Route path="/registration" exact  render={(routerProps) => <Registration {...routerProps} form={form} />}/>
        <SingleBook book={Books[0]}/>
         <CommentArea /> 
      <FetchedComment /> 
      </Col>
      </Row>
      <LatestRelease  />  
      <MyFooter />
    </BrowserRouter>
    </div>
  );
}

export default App;
