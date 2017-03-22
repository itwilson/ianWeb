var React = require('react');
import {Link} from 'react-router-dom'


var TopBar = React.createClass ({
    
    render: function () {
		return (            
                    <ul id="mainNav">
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/saga"><li>Saga</li></Link>
                        <Link to="/portfolio"><li>Portfolio</li></Link>
                        <Link to="/resume"><li>Resume</li></Link>
                        <Link to="/next"><li>What's Next</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>   

		);
	}
});

module.exports = TopBar;