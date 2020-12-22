import React, {Component} from 'react';
import './navigation.css'

class Navigation extends Component{
    render(){
        return <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top ">
                    <a className="navbar-brand"><img src="/images/curriculum.svg" width="40" height="40"></img></a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsetarget">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    <div className="collapse navbar-collapse" id="collapsetarget">

                    <ul className="navbar-nav ml-auto">
                        <li className= "nav-item">
                            <a className="nav-link" href="#whoami">¿Who am I?</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#collapse_target">Skills</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#collapse_target">Work Experience</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#collapse_target">Academic  Experience</a>
                        </li>
                        <li className= "nav-item">
                            <a className="nav-link" href="#collapse_target">Contact</a>
                        </li>
                    </ul>
                    </div>
                    
                </nav>
                




            </div>
    }
}

export default Navigation;