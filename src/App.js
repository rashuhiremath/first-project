
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav'
import Welcome from './Components/Welcome'
import LatestRelease from './Components/LatestRelease'
import MyFooter from './Components/MyFooter'

function App() {
  return (
    <div>
    <MyNav />
    <Welcome />
    <LatestRelease />
    <MyFooter />
    </div>
  )
}

export default App;
