import './App.css';
import About from './component/About';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
   <div>
      <h1>App Component</h1>
      <Header/>
       {/* <About/>
      <Home/>  */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
