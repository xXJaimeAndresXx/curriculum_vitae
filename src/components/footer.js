import React, { Component } from "react";
import "./footer.css";
import JojoFunction from './jojoFunction'



class Footer extends Component {
    
  render() {
    return (
      <div>
        <footer id="contact" class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>Contact Me</h6>
                <p class="text-justify">
                  <h8>EMAIL:</h8>
                  <h9> jaimeandres2998@gmail.com</h9>
                  <br/>
                  <h8>PHONE:</h8>
                  <h9> (+52) 6183202921</h9>
                  <br/>
                  <h8>LOCATION:</h8>
                  <h9>Durango, Durango, Mexico.</h9>
                  <br/>
                  <h6></h6>
                </p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Notes:</h6>
                <p>
                    *To view all certificates or
Accrediting diplomas can
consult them through my
Linkedin or request them through
 the email I provided.
All the courses I took
are available
only on linkedin.
                </p>
                
              </div>
              <div class="col-xs-6 col-md-3">
            <h6>Look My Puppy</h6>
            <p>pet him</p>
            <JojoFunction/>
            
          </div>
        

              
            </div>
            <hr />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">
                  Copyright &copy; 2020 Created with love by 
                  <a href="#"> Jaime</a>.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                
              </div>
            </div>
          </div>
          
        </footer>
      </div>
    );
  }
}

export default Footer;
