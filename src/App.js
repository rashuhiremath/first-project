import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import Welcome from "./Components/Welcome";
import LatestRelease from "./Components/LatestRelease";
import MyFooter from "./Components/MyFooter";
import FetchedComment from "./Components/FetchedComment";
import SingleBook from "./Components/SingleBook";
import Books from "./Data/Books.json";
import CommentArea from "./Components/CommentArea";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import { useState } from "react";

const BookDetailsPage = () => {
  return (
    <>
      {" "}
      <SingleBook book={Books[0]} />
      <CommentArea />
      <FetchedComment />
      <LatestRelease />{" "}
    </>
  );
};

function App() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <Route path="/home" component={Welcome} />

        {/* the component registration will ONLY render when your URL is /registration */}
        <Route
          path="/registration"
          exact
          render={(routerProps) => (
            <Registration {...routerProps} form={form} />
          )}
        />
        {/* Everything that is outside of the route will ALWAYS RENDER */}
        {/* So the goal is to create another route like /home that will render the components that Only must be rendered 
        in the home
        */}
        <Route path="/books/:bookId" component={BookDetailsPage} /> 

        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
