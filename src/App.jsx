import React from 'react';
import './App.css';
import { HashRouter , Route} from 'react-router-dom'
import About from './pages/about/About'
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Home from './pages/Home/Home';
import NavBar from './components/navbar/NavBar';
import GoHome from './pages/gohome/GoHome';

const App = ()  =>{
  return (
    <div className="App">
    
    <HashRouter>
     <div> 
       <NavBar />
       <Route path = "/"  exact component = {Home} />
       <Route path = "/about"  component = {About} />
       <Route path = "/projects"  component = {Projects} />
       <Route path = "/skills"  component = {Skills} />
       <Route path = "/contact"  component = {Contact} />
       {/* <GoHome /> */}
     </div>
     
     </HashRouter>

    </div>
  );
}

export default App;
            