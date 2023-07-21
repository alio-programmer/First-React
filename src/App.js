import { Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from "./pages/home";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Profile } from './pages/Profile';
import { Certificates } from './pages/Certificates';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/certificates' element={<Certificates/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
