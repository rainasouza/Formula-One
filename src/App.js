import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Circuits from './components/Circuits/Circuits';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="circuits" element={<Circuits/>} />






          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
