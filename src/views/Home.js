var React = require('react');

// Unique Components
var HomeOrbit = require('../components/HomeOrbit.js');
var HomeMultiPicture = require('../components/HomeMultiPicture.js');
var HomeMusic = require('../components/HomeMusic.js');
var HomeCircleSlider = require('../components/HomeCircleSlider.js');

// Reusable Components
var MainNav = require('../reusableComponents/MainNav.js');
var HugeNav = require('../reusableComponents/HugeNav.js');


var Home = React.createClass ({
	render: function () {
		return (
			<div id="homeView">
                <div id="homeHeader">
                    <HomeOrbit />
                </div>
                <MainNav />
                <div className="mainContent">
                    
                    
                <HomeCircleSlider />
                    
                    
                    <h3>Ian is a User Experience Designer. That means he solves the diverse challenges that people face while trying to accomplish their goals. For a better idea of what this means, jump straight to his PORTFOLIO</h3>
                    <br />
                    <h2>A Little About Ian</h2>
                    <h3>The Death of Unicorns and the Rise of the Skeleton Keys</h3>
                    <br />
                    <p>Unicorns are over rated. If you’re not familar with the concept of a user experience unicorn, it is essentially somone who can play multiple roles within in a team. While someone who can Design, Conduct Research, and Code can be a very valuable team member to add, often those looking for unicorns are just looking for someone who can do multiple people’s jobs. While a previous boss described me as a ux unicorn, I prefer to be seen as a Skeleton Key.</p>
                    <br />
                    <p>A Skeleton Key is a unique type of problem solver. Every designer has a tool set that they know and utilize to help them overcome challenges. That might be research methods, design software, or a unique skillset. Most designers have a T-shaped skillset. A broad range of tools with little depth and one area of specialty. Skeleton Keys show a high level of skill in multiple areas, but are more characterized by their ability to adapt to any situation and fill any need. They are wild cards that can be used to bring unexpected insight or a powerful influx of uncommon skills. When the problem is extremely complicated with many competing needs and the problem space is highly dependent of industry specific knowledge, throw in a skeleton key. They will get smart quickly and help translate between your design, engineering, development, business, and client teams. Their knowledge in all of these areas gives them instant credibility and builds trust. </p>
                    <br />
                    <quote>Making is learning. I embrace trial by doing 
    with all of my being. Some other sentence that is important. I want to use all of the space so I ramble on, but I can write a little</quote>
                    <br />
                    <h2>Passions</h2>
                    <h3>Interests and how I spend my time</h3>
                    <br />
                    <p>In this phase of life, Ian works for Fjord A design and innovation consultantcy as a part of Accenture Interactive. Here Ian has helped craft intuitive and powerful solutions for hospitality, tourism, data and analytics, call centers, product support, consumer experience, and healthcare oppertunities.</p>
                    <br />
                    <p>When not learning crazy or sharing “Ian’s fun fact of the day”, you might find him traveling the world, </p>
                    <br />
                    <HomeMultiPicture />
                    <br />
                    <p>Playin in the company band, the Fjordniary Heroes,</p>
                    <br />
                    <HomeMusic />
                    <br />
                    <p>Or creating something fun like this 3d printed ping-pong paddle</p>
                    <br />
                    <img alt=""/>
                    <br />
                    <p>He's pretty friendly, gregarious and extremely passionate about new, difficult challenges. Its easy to get in touch over at his Contact Page</p>
                    <br />
                    <img alt=""/>
                </div>
                <HugeNav />
            </div>
		);
	}
});




module.exports = Home;