import React from 'react';
import './App.css';
import Layout from './components/Layout'
import { HashRouter , Route} from 'react-router-dom'
import About from './pages/about/About'
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Home from './pages/Home/Home';
import Home2 from './pages/Home/Home2';
import NavBar from './components/navbar/NavBar';
import GoHome from './pages/gohome/GoHome';
import Navbar2 from './components/navbar2/Navbar2';
import Blogs from './pages/blogs/Blogs';
import Footer from './components/Footer';

const App = ()  =>{
  return (
    <div className="App">
    <HashRouter>
     <div>
       <Navbar2 />
       <Route path = "/"  exact component = {Home2} />
       <Route path = "/about"  component = {About} />
       <Route path = "/projects"  component = {Projects} />
       <Route path = "/blogs"  component = {Blogs} />
       <Route path = "/links"  component = {Skills} />
       <Route path = "/contact"  component = {Contact} />
     </div>
     {/* <Footer /> */}
     </HashRouter>

    </div>
  );
}

export default App;