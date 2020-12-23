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
            <div id="skillCard" class="card text-white bg-dark m-5 col-6">
              <div class="card-header">
                <h1>Skills</h1>
              </div>
              <div class="card-body">
                <div class="card-text">
                  <div className="row">
                    <div className="col-6">
                      <h4>Python</h4>
                      <h4>Javascript</h4>
                      <h4>PHP</h4>
                      <h4>Java</h4>
                      <h4>MySQL</h4>
                      <h4>SQLServer</h4>
                      <h4>MongoDB</h4>
                      <h4>DynamoDB</h4>
                      <h4>NodeJS</h4>
                      <h4>React</h4>
                      <h4>Bootstrap</h4>
                      <h4>VueJS</h4>
                      <h4>Vuetify</h4>
                      <h4>ExpressJS</h4>
                      <h4>HTML</h4>
                      <h4>CSS</h4>
                      <h4>API's Rest</h4>
                      <h4>AWS</h4>
                      <h4>Linux</h4>
                      <h4>Github</h4>
                      <h4>Photoshop</h4>
                      <hr></hr>
                      <h2>-Languages</h2>
                      <hr />
                      <h4>English (C2)</h4>
                    </div>
                    <div className="col-6">
                      <h4>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1 my-5">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-1">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                        <div className="my-2">
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle}</i>
                          <i className="px-1">{circle2}</i>
                          <i className="px-1">{circle2}</i>
                          <br />
                        </div>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-center p-5 m-5 text-white text-center">
              <h1 className="title" id="laboral">
                Laboral Experience
              </h1>
              <h4>AWS CLOUD DEVELOPMENT BOOTCAMP</h4>
              <h6>G-Tech | Agosto 2020- Enero 2021</h6>
              <p>
                <ul className="my-0 px-0">
                  <li>Diseño de arquitecturas de sitios web con AWS</li>
                  <li>Fungir como Product Owner y organizador del Dev-Team</li>
                  <li>
                    Desarrollo Front-End y Back-End con herramientas de AWS
                  </li>
                  <li>Desarrollo de web-app's con server side rendering</li>
                </ul>
              </p>
              <h4>TECNICO EN SOPORTE Y MANTENIMIENTO DE EQUIPO DE COMPUTO</h4>
              <h6>Secretaria de Educación Publica | Enero 2016 - Julio 2016</h6>
              <p>
                <ul className="my-0 px-0">
                  <li>Soporte y Mantenimiento de Equipo de Computo</li>
                  <li> Supervisión de Redes y Sistemas de Computo</li>
                  <li> Trato con el cliente</li>
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
                
                <h4>INEGENIERIA EN SISTEMAS COMPUTACIONALES</h4>
                <h6>
                  Instituto Tecnológico de Durango | Especialidad en:
                  Tecnologías Web Para Negocios Electrónicos | Agosto 2016 -
                  Julio 2021
                </h6>
                <p>
                  <ul className="my-0 px-0">
                    <li>Metodologias Agiles</li>
                    <li>
                    Capacitacion sobre UI/UX y Marketing
                    </li>
                    <li>
                    Seguridad Web e Ingenieria Social

                    </li>
                    <li>Desarrollo Web Profesional</li>
                  </ul>
                </p>
                <h4>Certificaciones</h4>
                <h6>
                Junio 2016 - Diciembre 2020
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
