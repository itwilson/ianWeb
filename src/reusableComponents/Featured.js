var React = require('react');

var Featured = React.createClass ({
    
    render: function () {
		return (            
            <div className="featuredSection">
                <div className="featured featuredLeft"></div>
                <div className="featured featuredRight"></div>
            </div>

		);
	}
});

module.exports = Featured;