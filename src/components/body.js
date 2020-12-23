import React, { Component } from "react";
import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const circle = <FontAwesomeIcon icon={faCircle} size="1x" />;
const circle2 = <FontAwesomeIcon icon={faCircleNotch} />;

class Body extends Component {
  render() {
    return (
      <div>
        {/* <div class="container">

<div class="row">
  <div class="col-md-8 mb-5">
    <h2>What We Do</h2>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
    <a class="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
  </div>
  <div class="col-md-4 mb-5">
    <h2>Contact Us</h2>
    <hr/>
    <address>
      <strong>Start Bootstrap</strong>
      <br/>3481 Melrose Place
      <br/>Beverly Hills, CA 90210
      <br/>
    </address>
    <address>
      <abbr title="Phone">P:</abbr>
      (123) 456-7890
      <br/>
      <abbr title="Email">E:</abbr>
      <a href="mailto:#">name@example.com</a>
    </address>
  </div>
</div>


<div class="row">
  <div class="col-md-4 mb-5">
    <div class="card h-100">
      <img class="card-img-top" src="https://placehold.it/300x200" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-5">
    <div class="card h-100">
      <img class="card-img-top" src="https://placehold.it/300x200" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
  <div class="col-md-4 mb-5">
    <div class="card h-100">
      <img class="card-img-top" src="https://placehold.it/300x200" alt=""></img>
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
</div>
                
</div> */}
        <div className="container-bg " id="primary">
          <div className="row ">
            <div className="col text-center p-5 m-5 text-white">
              <h1 className="title" id="whoami">
                Who am I?
              </h1>
              <hr />
              <p className="text-justify">
                Aware of the innovation and the growing change that encompasses
                my career, I keep in me, active, the motivation that allows me
                to improve myself every day. Responsibility, commitment and
                pro-activity are strongly present in my day to day, always open
                to the substantial dialectic between my fellow engineers and
                understanding to the universal dialogue.
              </p>
            </div>
          </div>
        </div>
        <div className="container-bg " id="secondary">
          <div className="row ">
            <div id="skillCard" className="card text-white bg-dark m-5 col-lg-6  col-md-6 col-sm-6 col-xs-12">
              <div className="card-header">
                <h1>Skills</h1>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <div className="row">
                    <div className="col-12 text-right">
                      <h6>Python <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i></h6>
                      <h6>Javascript<i className="px-1 my-5">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>PHP<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>Java<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>MySQL<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>SQLServer<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>MongoDB<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>DynamoDB<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>NodeJS<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>React<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>Bootstrap<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>VueJS<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>Vuetify<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>ExpressJS<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>HTML<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>CSS<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>API's Rest<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>AWS                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>Linux <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>Github<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <h6>Photoshop<i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br /></h6>
                      <hr></hr>
                      <div className="col-12 text-left">
<h2>Languages</h2>
                      <hr />
                      <h4>English (C2)</h4>
                      </div>
                      
                    </div>
                    {/* <div className="col-8">
                      <h4>
                        <div className="my-1">
                          
                          <br />
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-1">
                          
                        </div>
                        <div className="my-2">

                        </div>
                        <div className="my-1">
                         
                        </div>
                        <div className="my-2">
                          
                        </div>
                        <div className="my-2">
                          
                        </div>
                      </h4>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-center p-5 m-5 text-white text-center">
              <h1 className="title" id="laboral">
                Laboral Experience
              </h1>
              <h4>AWS CLOUD DEVELOPMENT BOOTCAMP</h4>
              <h6>G-Tech | August 2020- January 2021</h6>
              <p>
                <ul className="my-0 px-0">
                  <li>Design of website architectures with AWS</li>
                  <li>Serve as Product Owner and organizer of the Dev-Team</li>
                  <li>
                  Front-End and Back-End Development with AWS Tools
                  </li>
                  <li>Web-app development with server side rendering</li>
                </ul>
              </p>
              <h4>TECHNICIAN IN SUPPORT AND MAINTENANCE OF COMPUTER EQUIPMENT</h4>
              <h6>Secretaria de Educación Publica | January 2016 - July 2016</h6>
              <p>
                <ul className="my-0 px-0">
                  <li>Support and Maintenance of Computer Equipment</li>
                  <li> Supervision of Networks and Computing Systems</li>
                  <li> Deal with customers</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="container-bg " id="primary">
            <div className="row ">
              <div className="col text-center p-5 m-5 text-white">
                <h1 className="title" id="academic">
                  Academic Experience
                </h1>
                
                <h4>COMPUTER SYSTEMS ENGINEERING</h4>
                <h6>
                  Instituto Tecnológico de Durango | Specialty in:
                  Web Technologies For Electronic Businesses | August 2016 -
                  July 2021
                </h6>
                <p>
                  <ul className="my-0 px-0">
                    <li>Agile methodologies</li>
                    <li>
                    Training on UI / UX and Marketing
                    </li>
                    <li>
                    Web Security and Social Engineering

                    </li>
                    <li>Professional Web Development</li>
                  </ul>
                </p>
                <h4>Certifications</h4>
                <h6>
                June 2016 - December 2020
                </h6>
                <p>
                  <ul className="my-0 px-0">
                    <li>CCNA Routing and Switching: Principios basicos de routing y
switching(CISCO)</li>
                    <li>
                    CCNA Routing and Switching: Introduccion a Redes (CISCO)
                    </li>
                    <li>
                    Introduction to Cybersecurity Tools & Cyber Attacks (IBM)

                    </li>
                    <li> Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
                    <li> Ingles - EF SET Certificate 71/100 (C2 Proficient)</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
