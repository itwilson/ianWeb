var React = require('react');
import {Link} from 'react-router-dom'
var huge = [require('../images/hugeNav1.jpeg'), require('../images/hugeNav2.jpg'),require('../images/hugeNav3.png'),require('../images/hugeNav4.jpeg'),require('../images/hugeNav5.png')];


var HugeNav = React.createClass ({
    componentDidMount: function(){
        // Replace Photos
        var nav = document.getElementsByClassName("hugeNavItem");
        //var nav2 = document.getElementsByClassName("hugeNav2 backgroundImg")
        console.log(nav);
        
        for (var i = 0; i < nav.length; i++){
            nav[i].style.backgroundImage= "url(" + huge[i] + ")";
            nav[i].style.backgroundSize = 'cover';
            nav[i].style.backgroundRepeat = 'no-repeat';
            nav[i].style.backgroundPosition = "50% 50%";
        }
//        for (i = 0; i < 2; i++){
//            nav2[i].style.backgroundImage= "url(" + huge[i + 3] + ")";
//            nav2[i].style.backgroundSize = 'cover';
//            nav2[i].style.backgroundRepeat = 'no-repeat';
//            nav2[i].style.backgroundPosition = "50% 50%";
//        }

    },
    
    render: function () {
		return (            
                    <div id="hugeNav">
                        <h2>Where to next?</h2>
                        <Link to="/saga">
                            <div className="hugeNav3 hugeNavItem">
                                <div className="backgroundImg"></div>
                                <h2>The Saga of Ian</h2>
                                <p>The Story of how Ian became who he is and what he now lives for</p>
                                <div className="hugeNavIcoHolder">
                                    <i className="fa fa-history" aria-hidden="true"></i>
                                </div>
                                <div className="imgColor"></div>
                            </div>
                        </Link>
                        <Link to="/next">
                            <div className="hugeNav3 hugeNavItem">
                                <h2>What's Next For Ian</h2>
                                <p>Working towards a more immersive future</p>
                                <div className="hugeNavIcoHolder">
                                    <i className="fa fa-compass" aria-hidden="true"></i>
                                </div>
                                <div className="imgColor"></div>
                            </div>
                        </Link>
                        <Link to="/contact" >
                            <div className="hugeNav3 hugeNavItem">
                                <h2>Ways to Contat Ian</h2>
                                <p>Because Chicago is windy and smoke signals get blown away quickly</p>
                                <div id="hugeNavSocials">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <div className="hugeNavIcoHolder">
                                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                </div>
                                <div className="imgColor"></div>
                            </div>
                        </Link>
                        <Link to="/portfolio">
                            <div className="hugeNav2 hugeNavItem">
                                <h2>Portfolio</h2>
                                <p>The work: Research, Design, and Code</p>
                                <div className="hugeNavIcoHolder">
                                    <i className="fa fa-folder" aria-hidden="true"></i>
                                </div>
                                <div className="imgColor"></div>
                            </div>
                        </Link>
                        <Link to="/resume">
                            <div className="hugeNav2 hugeNavItem">
                                <h2>Resume</h2>
                                <p>What's come before</p>
                                <div className="hugeNavIcoHolder">
                                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                                </div>
                                <div className="imgColor"></div>
                            </div>
                        </Link>
                        
                    </div>   

		);
	}
});

module.exports = HugeNav;