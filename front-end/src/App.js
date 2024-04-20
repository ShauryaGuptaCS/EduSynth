import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import Login from './components/Login';
import Signup from './components/Signup'
import WorkInProgress from './components/WorkInProgress';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';
import IncorrectRoute from './components/IncorrectRoute';
import GenerateTest from './components/GenerateTest';




function App(){
  return(
    <div className="app">
      <BrowserRouter>
          <AppContent/>
      </BrowserRouter>
    </div> 
  )
}

function AppContent() {
  const location = useLocation(); // Move useLocation inside AppContent
  const hideNav = location.pathname === '/generateTest';

  return (
    <>
      {!hideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workInProgress" element={<WorkInProgress />} />
        <Route path="/videoConferencing" element={<WorkInProgress />} />
        <Route path="/courses" element={<WorkInProgress />} />
        <Route path="/notes" element={<WorkInProgress />} />
        <Route path="/checkYourProgress" element={<WorkInProgress />} />
        <Route path="/interviewQuestion" element={<WorkInProgress />} />
        <Route path="/test" element={<Test />} />
        <Route path="/generateTest" element={<GenerateTest />} />
        <Route path="/*" element={<IncorrectRoute />} />
      </Routes>
    </>
  );
}

export default App;
