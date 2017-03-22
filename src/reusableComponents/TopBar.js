var React = require('react');
import {Link} from 'react-router-dom'

var TopBar = React.createClass ({
	render: function () {
		return (
			<div id="topBar">
                <p><Link to="/">Ian Wilson | User Experience Designer</Link></p>
                <p>imbyde@gmail.com</p>
            </div>
		);
	}
});

module.exports = TopBar;