import './App.css';
// Importar las herramientas de Routing: 
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Details from './Views/Detail/Details';
import Create from './Views/Create/Create';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import About from './Views/About/About';
import SearchBar from './Views/SearchBar/SearchBar';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path= {"/"} component={Landing}/>
        
        <Route path= {"/home"} component= {Home}/>
        <Route path= {"/searchBar/:name"} component = {SearchBar} />
        <Route path= {"/details/:id"} component= {Details}/>
        <Route path= {"/create"} component={Create}/>
        <Route path={'/about'} component={About} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
