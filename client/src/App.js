import './App.css';
// Importar las herramientas de Routing: 
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Details from './Views/Detail/Details';
import Create from './Views/Create/Create';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import About from './Views/About/About';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Route path={"*"} component={NavBar}/>
      <Switch>
        <Route exact path= {"/"} component={Landing}/>
        <Route path= {"/home"} component= {Home}/>
        <Route path= {"/details/:id"} component= {Details}/>
        <Route path= {"/create"} component={Create}/>
        <Route path={'/about'} component={About} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
