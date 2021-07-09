import React, { Component } from 'react'
import  {withRouter} from 'react-router-dom'
import  homeiconwhite from '../../assets/images/home_white.png'
import  homeiconblack from '../../assets/images/home_black.png'
import './GoHome.css'
//this component is only there to teach programmatic navigation 

 class GoHome extends Component {

    navigateToHome = () => {
        const {history} = this.props
         history.push('/')
        console.log("history ", history);
    }
    render() {
        const {location} = this.props;
        const whiteBtn = location.pathname === '/';
        return (
            <div>
                <button onClick = {this.navigateToHome}>
                 <img 
                    className ={`go-home-btn ${
                      whiteBtn ? 'white-bkg' :  'gradient-bkg'
                    }`} 
                    src = {whiteBtn ? homeiconblack : homeiconwhite}
                    alt = "home-icon"
                />
               </button> 
            </div>
        )
    }
}
export default withRouter(GoHome)

