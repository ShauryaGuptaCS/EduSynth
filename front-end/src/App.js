import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import Login from './components/Login';
import Signup from './components/Signup'
import WorkInProgress from './components/WorkInProgress';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import IncorrectRoute from './components/IncorrectRoute';


function App() {
  return (
    <div className='app'> 
       
      <BrowserRouter>
      <Nav/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/*" element={<IncorrectRoute/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="/workInProgress" element={<WorkInProgress/>}></Route>
        <Route path="/videoConferencing" element={<WorkInProgress/>}></Route>
        <Route path="/courses" element={<WorkInProgress/>}></Route>
        <Route path="/notes" element={<WorkInProgress/>}></Route>
        <Route path="/checkYourProgress" element={<WorkInProgress/>}></Route>
        <Route path="/interviewQuestion" element={<WorkInProgress/>}></Route>
        <Route path="/test" element={<Test/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
