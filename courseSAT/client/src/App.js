import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './views/Main';
import LoginForm from './views/LoginForm';
import About from './views/About';
function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path='/'>
        <Main/>
      </Route>
      <Route  path='/login'>
        <LoginForm/>
      </Route>
      <Route  path='/about'>
        <About/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
