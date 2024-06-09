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








          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
