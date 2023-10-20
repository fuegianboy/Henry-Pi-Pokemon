import {Route} from "react-router-dom"
import './App.css';
import Landing from './views/Landing';
import Home from "./views/Home"
import Detail from "./views/Detail"
import Create from "./views/Create"
import About from "./views/About"

function App() {
  return (
    <div className="App">
        <Route exact path = "/" component = {Landing}/>
        <Route exact path = "/home" component = {Home}/>
        <Route path = "/detail/:id" component = {Detail}/>
        <Route path = "/create" component = {Create}/>
        <Route path = "/about" component = {About}/>
    </div>
  );
}

export default App;
