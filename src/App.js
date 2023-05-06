import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/> 
        <Route path="/projects" component={Projects}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
