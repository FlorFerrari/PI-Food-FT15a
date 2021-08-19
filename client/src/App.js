
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from './components/LandingPage';
import Home from './components/Home'; 
import Detail from "./components/Detail"
import RecipeCreate from "./components/RecipeCreate"
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path= "/" component={LandingPage}></Route>
    <Route exact path= "/home" component={Home}></Route>
    <Route exact path= "/recipes" component={RecipeCreate}></Route>
    <Route exact path= "/home/:id" component={Detail}></Route>
    <Route exact path= "*" component={NotFound}></Route>

    </Switch>
    
  </div></BrowserRouter>
    
  );
}

export default App;
