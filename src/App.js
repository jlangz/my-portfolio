import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
    <NavBar />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/about" component={About} />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </HashRouter>
  )
}

export default App;
