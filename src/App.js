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
function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <SingleBook book={Books[0]}/>
      {/* <CommentArea /> */}
      <FetchedComment /> 
      {/* <LatestRelease  />  */}
       
      <MyFooter />
    </div>
  );
}

export default App;
