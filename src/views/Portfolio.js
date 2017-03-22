var React = require('react');

// Reusable Components
var MainNav = require('../reusableComponents/MainNav.js');
var HugeNav = require('../reusableComponents/HugeNav.js');
var Header = require('../reusableComponents/Header.js');
var Featured = require('../reusableComponents/Featured.js');
var CaseStudy = require('../reusableComponents/CaseStudy.js');

var Portfolio = React.createClass ({
	render: function () {
		return (
			<div id="portfolioView">
                <Header />
                <MainNav />
                <div className="mainContent">
                    <h2>A Portfolio Primer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                </div>
                    <Featured />

                    <div id="portfolioGenreSelector">
                        <ul>
                            <li><h2>User Experience</h2></li>
                            <li></li>
                            <li><h2>Creative Technology</h2></li>
                            <li></li>
                            <li><h2>Industrial Design</h2></li>
                        </ul>
                    </div>

                    {
                        //Todo input projects
                    }
                <CaseStudy />
                <CaseStudy />
                <CaseStudy />
                <div className="mainContent">
                    <h2>Now you've seen my portfolio, next steps:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                </div>
                <HugeNav />
            </div>
		);
	}
});

module.exports = Portfolio;