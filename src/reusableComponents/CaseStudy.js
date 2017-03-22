var React = require('react');
var testImg = require('../images/chicago.jpeg');

var CaseStudy = React.createClass ({
	componentDidMount: function(){
        document.getElementsByClassName('caseStudy')[0].style.background = testImg;
    },
    render: function () {
		return (
			<div className="caseStudy">
                <h1>HeadLine Here</h1>
                <p>Descriptive tagline</p>
            </div>
		);
	}
});

module.exports = CaseStudy;