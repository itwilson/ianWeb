var React = require('react');

// Unique Components
var SagaBestWorst = require('../components/SagaBestWorst.js');

// Reusable Components
var MainNav = require('../reusableComponents/MainNav.js');
var HugeNav = require('../reusableComponents/HugeNav.js');
var Header = require('../reusableComponents/Header.js');

var Saga = React.createClass ({
	render: function () {
		return (
			<div id="sagaView">
                <Header />
                <MainNav />
                <div className="mainContent">
                    <h2>The Story of How Ian Became Ian</h2>
                    <h3>A history</h3>

                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</i></p>
                    <br />
                    <h2>A pinch here and there</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                    <quote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum." </quote>
                    <br />
                    <h2>Finding my Way</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorper, leo est porttitor ligula, vel accumsan arcu lorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                    <img alt="" />
                    <br />
                    <h2>Grad School</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorpue vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris fauciblorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                     <h2>Work Life</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorpue vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris fauciblorem et eros. Nam et tellus id lorem vestibulum interdum. Pellentesque iaculis dolor risus, eget malesuada mauris interdum quis. In congue libero eu mauris facilisis, sit amet consectetur nisi rhoncus. Pellentesque vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>

                     <h2>Now</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus tellus a posuere elementum. Mauris faucibus orci eleifend dapibus dictum. Integer aliquet tellus id ligula placerat, sed aliquam urna cursus. Sed at laoreet lorem. Integer iaculis, libero in egestas porttitor, enim dui vestibulum nunc, vitae faucibus ante leo id turpis. Suspendisse nec scelerisque ligula. Vivamus mattis, sem sit amet interdum luctus, turpis nunc luctus erat, ac auctor diam arcu sit amet risus. In sollicitudin, erat vitae placerat ullamcorpue vel tincidunt nunc. Nullam auctor turpis eu imperdiet consequat.</p>
                    <br />
                </div>
                <SagaBestWorst />
                
                <HugeNav />
            </div>
		);
	}
});

module.exports = Saga;