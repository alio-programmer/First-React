import { Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from "./pages/home";
import { Login } from "./pages/Login";
function App() {
  return (
    <div className="App">
        <Routes >
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
