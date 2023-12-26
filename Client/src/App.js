import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Background from './Components/Background';



function App() {
  return (
    <>
    <div className="App">
       <Router>
        <Routes>
        <Route exact path="/login" element={ <Login />}>
          </Route>
          <Route exact path="/" element={ <Home />}>
          </Route>
          <Route exact path="/register" element={ <Register/>}>
          </Route>
          <Route exact path="/background" element={ <Background/>}>
          </Route>
          </Routes>
          </Router>
    </div>
    </>
  );
}

export default App;
