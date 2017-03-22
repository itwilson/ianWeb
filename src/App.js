import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

// Stylesheet
require('./styles/main.css');



// Reusable Components
var TopBar = require('./reusableComponents/TopBar.js');

// Routes
var Intro = require('./views/Intro.js');
var Home = require('./views/Home.js');
var Saga = require('./views/Saga.js');
var Portfolio = require('./views/Portfolio.js');
var Resume = require('./views/Resume.js');
var Next = require('./views/Next.js');
var Contact = require('./views/Contact.js');


const IanWeb = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div>
        <TopBar />
      

        {/* routes */}
        <Route exact path="/" component={Intro}/>
        <Route path="/home" component={Home}/>
        <Route path="/saga" component={Saga}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/next" component={Next}/>
        <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)

export default IanWeb