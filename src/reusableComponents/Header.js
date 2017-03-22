var React = require('react');
var MainOrbit = require('../reusableComponents/MainOrbit.js');


var Header = React.createClass ({
    
    render: function () {
		return (            
            <div>
                <div><i></i>imbyde@gmail.com</div>
                <MainOrbit />
            </div>

		);
	}
});

module.exports = Header;