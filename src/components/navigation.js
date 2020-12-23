import React, {Component} from 'react';
import './navigation.css'

class Navigation extends Component{
    render(){
        return <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top ">
                    <a href="#" className="navbar-brand"><img src="./images/curriculum.svg" width="40" height="40"></img></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsetarget">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    <div className="collapse navbar-collapse" id="collapsetarget">

                    <ul className="navbar-nav ml-auto">
                        <li className= "nav-item">
                            <a className="nav-link" href="#whoami">¿Who am I?</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#skillCard">Skills</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#laboral">Work Experience</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#academic">Academic  Experience</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                    
                </nav>
                




            </div>
    }
}

export default Navigation;