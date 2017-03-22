var React = require('react');
import {Link} from 'react-router-dom'


var IntroNav = React.createClass ({
    
    render: function () {
		return (            
                    <ul id="introNav">
                        <Link to="/home"><li>Home</li></Link>
                        <li>In a Hurry?</li>
                        <Link to="/saga"><li>Saga</li></Link>
                        <Link to="/portfolio"><li>Portfolio</li></Link>
                        <Link to="/resume"><li>Resume</li></Link>
                        <Link to="/next"><li>What's Next</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>   

		);
	}
});

module.exports = IntroNav;