import React from "react";
import { render } from "react-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Qualified from "./components/Qualified";
import Testmen from "./components/Testmen";
import Stepform from "./components/Stepform";


const YourCarLow = () =>
    <Router>

        <div className="YourCarLow">

            <Header nametitle="Bad Credit? Get an Auto Loan Today" />

            <section className="heroStage">

                <div className="heroFloor">
                    <div className="container">
                        <div className="formStage">
                            <div className="formStageHeader">

                                <div className="formStageHeaderPlat">

                                    <h2>Start Here</h2>
                                    <span>Get Your <strong>Free</strong> no Obligation Quote</span>

                                </div>
        
                                <div className="topShape"></div>
                                <div className="downShape"></div>

                            </div>

                            <div className="formShapeBody">
                                <Stepform />
                            </div>

                        </div>
                    </div>

                    <div className="QualifiedBlk">
                        <Qualified />
                    </div>

                </div>

                <img className="heroImg" src="img/hero.jpg" alt="hero" />

            </section>

            <section className="testemStage">
                <div className="container">
                    <Testmen />
                </div>
            </section>

            <Footer />


            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> */}

        </div>

    </Router>;

render(<YourCarLow />, document.getElementById("root"));
