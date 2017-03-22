var React = require('react');

import * as d3 from "d3";

d3.select('body').append('svg');

var MainOrbit = React.createClass ({
    
    render: function () {
		return (            
            <div>
                <svg className='mainOrbit'></svg>
                
            </div>

		);
	},
    componentDidMount: function(){
        var svg = d3.select(".mainOrbit");
        
        svg.append('circle')
            .attr("r","400px")
            .attr("fill","purple")
            .attr("cx", 400)
            .attr("cy", "400px");
        svg.append('circle')
            .attr("r",300)
            .style("stroke","white")
            .style("stroke-width", 30)
            .style("fill", "none")
            .attr("cx", 400)
            .attr("cy", "400px");

        var planetRotater = svg.append('g').attr("transform", "translate(400, 400)");
        planetRotater.append('circle').attr("class", "planet")
            .attr("r","10%")
            .attr("fill","white")
            .attr("cx", 300)
            .attr("cy", 0)
            .on("click", turnNeedle);
        
        var i = 0;
        
        setInterval(function(){
            
            turnNeedle(i);
            i+=.25 % 360;
        }, 10);
        
        
        function turnNeedle(i)
{
        svg.select(".planet")
      .transition()
      .attr("transform", "rotate("+ -i + ")");
}
    }
});

module.exports = MainOrbit;