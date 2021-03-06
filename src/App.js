import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import LatestNotices from './components/LatestNotices/LatestNotices';
import Notices from './components/Notices/Notices';
import Profile from './components/Profile/Profile';

function App() {

const [covidList, setcovidList] = useState([])
const [token, settoken] = useState("")
 

const login =async()=>{
  verifyLogin()
  window.location.href= '/App/'
}
const verifyLogin =async()=>{
 
   localStorage.setItem('token','1234')
   if(localStorage.getItem('token')==='1234'){
    
   }
  

}

  return (
    <div className="app">
    <Router basename={process.env.REACT_APP_URL_GLOBAL} >
    <Route  path= '/App'>
      <Navigation/>
      </Route>
      <Route  path='/App/Home'>
      <Header/>
      </Route>
      <Route exact path='/App/worldInfo'>
      <Home list={covidList} token={token}/>
      </Route>
      <Route exact path='/'>
      <Login  login={login}/>
      </Route>

      <Route path="/App/home">
        <LatestNotices/>
      </Route>
      <Route path="/App/notices">
        <Notices/>
      </Route>
      <Route path="/App/profile">
        <Profile/>
      </Route>
    </Router>
    </div>
  );
}

export default App;
