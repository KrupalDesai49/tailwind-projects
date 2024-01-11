import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Mini1 from './components/mini1/Mini1';
import Home from './Home';
import Mini2 from './components/mini2/Mini2';
import Mini3 from './components/mini3/Mini3';
import Mini4 from './components/mini4/Mini4';
import Mini5 from './components/mini5/Mini5';
import P1 from './components/p1/P1';
import P2 from './components/p2/P2';
// import P3 from './components/p3/P3';
// import P4 from './components/p4/P4';
// import P5 from './components/p5/P5';

function App() {


   
  return (
    <>
      <Router>
      <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route exact path="/mini1" element={<Mini1/>} />
      <Route exact path="/mini2" element={<Mini2/>} />
      <Route exact path="/mini3" element={<Mini3/>} />
      <Route exact path="/mini4" element={<Mini4/>} />
      <Route exact path="/mini5" element={<Mini5/>} />
      <Route exact path="/pr1" element={<P1/>} />
      <Route exact path="/pr2" element={<P2/>} />
      {/* <Route exact path="/pr3" element={<P3/>} /> */}
      {/* <Route exact path="/pr4" element={<P4/>} /> */}
      {/* <Route exact path="/pr5" element={<P5/>} /> */}
</Routes>
    </Router>

    </>
  );
}

export default App;
