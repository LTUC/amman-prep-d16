import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <h1>App Component</h1>
      {/* <Home />
      <About /> */}
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
