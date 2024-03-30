import './App.css';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Login_page from './components/Login_page';
function App() {
  return (
    <>
   
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/login_page' element={<Login_page/>}/>
 </Routes>
 </>
  );
}

export default App;
