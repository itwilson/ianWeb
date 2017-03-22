var React = require('react');

// Reusable Components
var ContactMini = require('../reusableComponents/ContactMini.js');

// Unique Components
var IntroPlayer = require('../components/IntroPlayer.js');
var IntroNav = require('../components/IntroNav.js');



var Intro = React.createClass ({
    render: function () {
        
        
          

        
        return (
			<div id="introView">
                <h1 id="introHeadline">Ian Wilson</h1>
                <ContactMini id="contactMini" />
                 <IntroPlayer />
                <div id="introTagline">
                    <br />
                    <h2>Vision Caster</h2>
                    <br />
                    <h3>User Experience Designer</h3>
                    <br />
                    <h3>Chicago, IL</h3>
                    <br />
                </div>
                <IntroNav />
            </div>
		);
	}
});




module.exports = Intro;