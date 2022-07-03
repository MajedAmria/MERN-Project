import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import LoginForm from './views/LoginForm';
import About from './views/About';
import Dashbord from './views/Dashbord';
import NewCourse from './views/NewCourse';
import View from './views/View';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const updateLoggedInUser = (user) => {
    setLoggedInUser(user) 
  }


    useEffect(()=>{
      console.log(loggedInUser)
      if(Object.keys(loggedInUser).length == 0){
        setIsLoggedIn(false)
      }else{
        setIsLoggedIn(true)
      }

    }, [loggedInUser])

    let page;
    console.log(isLoggedIn);
    if(isLoggedIn){
      page = (
        <Switch>
        <Route exact path='/'>
          <Main loggedInUser={loggedInUser}/>
        </Route>
        <Route  path='/about'>
          <About/>
        </Route>
        <Route  path='/success'>
          <Dashbord updateLoggedInUser={updateLoggedInUser} loggedInUser={loggedInUser}/>
        </Route>
        <Route  path='/new'>
          <NewCourse loggedInUser={loggedInUser}/>
        </Route>
        <Route  path='/course/:id'>
          <View updateLoggedInUser={updateLoggedInUser} loggedInUser={loggedInUser} />
        </Route>
      </Switch>
      )
    }else{
      page=(
        <Switch>
          <Route exact path='/login'>
            <LoginForm updateLoggedInUser={updateLoggedInUser}/>
          </Route>
          <Route exact path='/'>
            <Main/>
          </Route>
        </Switch>
      )
    }
  return (
    
    <BrowserRouter >
    <div className="App">
    {page}
    </div>
    </BrowserRouter>
  );
}

export default App;