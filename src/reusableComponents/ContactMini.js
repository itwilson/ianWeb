var React = require('react');

var ContactMini = React.createClass ({
	render: function () {
		return (
			<div id="contactMini">
                <br />
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp; 515-708-1168</p>
                <br />
                <p><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp; imbyde@gmail.com</p>
                <br />
                <p><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp; @itwilson</p>
                <br />
            </div>
		);
	}
});

module.exports = ContactMini;