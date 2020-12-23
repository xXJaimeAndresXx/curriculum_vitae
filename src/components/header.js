import React, {Component} from 'react';
import Typical from 'react-typical';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


const linkedin= <FontAwesomeIcon icon={faLinkedin} size="2x"/>
const github= <FontAwesomeIcon icon={faGithub} size="2x"/>
const facebook= <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>

class Header extends Component{
    render(){
        return <div>
                
                <header id="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                    <div className="col-12 text-center text-white">
                        
                            <img  className="rounded-circle col-lg-3 col-md-3 col-sm-3 col-xs-3 pb-3" alt="100x100" src="./images/linkedin2.jpg"
          data-holder-rendered="true"/>
                        
                    
                        <h1 className="font-weight-light">Jaime Andres De La Cruz Cortés</h1>
                        <p className="career"  > I'm a {' '}
                        <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps= {[
                            'Computer Systems Engineer',1000,
                            'Melómano',1000,
                            'Web Developer',1000,
                        ]}
                        />
                        </p>
                        
                        <div >
                        <a href="https://www.linkedin.com/in/xxjaimeandresxx/"><i className="px-3">{linkedin}</i></a>
                        <a href="https://github.com/xXJaimeAndresXx"><i className="px-3">{github}</i> </a>
                        <a href="https://www.facebook.com/profile.php?id=100015560291587"><i className="px-3">{facebook}</i></a> 
                        </div>
                        

                    </div>
                    
                    </div>
                </div>
                </header>




            </div>
    }
}

export default Header;