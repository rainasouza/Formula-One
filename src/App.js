import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Circuits from './components/Circuits/Circuits';
import Schedule from './components/Schedule/Schedule';
import Constructor from './components/Constructors/Constructor';
import NavBar from './components/NavBar/NavBar';
import Drivers from './components/Drivers/Drivers';
import LapTime from './components/LapTime/LapTime';
import Winners from './components/Winners/Winners';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="circuits" element={<Circuits/>} />
            <Route path="schedule" element={<Schedule/>} />
            <Route path="constructors" element={<Constructor/>} />
            <Route path="drivers" element={<Drivers/>} />
            <Route path="winners" element={<Winners/>} />
            <Route path="laps" element={<LapTime/>} />
            <Route path="about" element={<About/>} />


          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
