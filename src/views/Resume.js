var React = require('react');

// Unique Components
var ResumeViewer = require('../components/ResumeViewer.js');

// Reusable Components
var MainNav = require('../reusableComponents/MainNav.js');
var HugeNav = require('../reusableComponents/HugeNav.js');
var Header = require('../reusableComponents/Header.js');

var Resume = React.createClass ({
	render: function () {
		return (
			<div id="resumeView">
                <Header />
                <MainNav />
                <div className="mainContent">
                    <h2>A Resume Primer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <h2>Choose a Mode</h2>
                    <div id="resumeModeSelector">
                        <ul>
                            <li>Explore</li>
                            <li>Print</li>
                            <li>Robot</li>
                        </ul>
                    </div>
                    <br />
                </div>
                <ResumeViewer />
                
                <HugeNav />
            </div>
		);
	}
});

module.exports = Resume;