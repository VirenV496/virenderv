import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
// import './NavBar.css'
import '../../assets/scss/style.scss'
import  {Link, withRouter} from 'react-router-dom'

 class NavBar extends React.Component {
    render() {
    const {location} = this.props;
     console.log(location);
        const homeclass = location.pathname ==='/' ? 'active-item': '';
        const aboutclass = location.pathname ==='/about' ? 'active-item': '';
        const projectsclass = location.pathname ==='/projects' ? 'active-item': '';
        const skillsclass = location.pathname ==='/skills' ? 'active-item': '';
        const contactclass = location.pathname ==='/contact' ? 'active-item': '';
        return (
            <Menu>
              <Link  to = '/' className = {`menu-item ${homeclass}`}> Home</Link>
              <Link  to = '/about' className ={`menu-item ${aboutclass}`}> About</Link>
              <Link  to = '/projects' className = {`menu-item ${projectsclass}`}> Work</Link>
              <Link  to = '/skills' className = {`menu-item ${skillsclass}`}> Links</Link>
              <Link  to = '/contact' className = {`menu-item ${contactclass}`}> Contact</Link>
            </Menu>
          );
    }
}
export default withRouter(NavBar)