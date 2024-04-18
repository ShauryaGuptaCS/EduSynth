import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'
import WorkInProgress from './components/WorkInProgress';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className='app'>   
      <BrowserRouter>
      <Routes>
        <Route path="/workInProgress" element={<WorkInProgress/>}></Route>
        <Route path="/*" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
