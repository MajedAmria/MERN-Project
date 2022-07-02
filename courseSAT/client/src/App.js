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
      <Route  path='/success'>
        <Dashbord/>
      </Route>
      <Route  path='/new'>
        <NewCourse/>
      </Route>
      <Route  path='/course'>
        <View/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;