var React = require('react');

const imgUrl = require('../images/chicago.jpeg');
const imgUrlProfile = require('../images/ianPic.jpg');

function VideoMode(props) {
  return (
        <div id="playerOuter">
          <div id="introVideo">
          
          </div>  
        </div>
      );
}

function StillMode(props) {
    return (
        <div id="playerOuter">
                <div id="playerInner" alt="">
                        <div id="introPic" alt=""><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                </div>
            </div>
    );
}

function IntroViewMode(props) {
  const viewMode = props.viewMode;
  if (viewMode) {
    return <VideoMode />;
  }
  return <StillMode />;
}


// If the view mode is up load the content
function contentLoader () {
    // Which is bigger?
    var minDem = 0,
        height = window.innerHeight,
        width = window.innerWidth;
    
    if (height >= width){
        minDem = width;
    } else {
        minDem = height;
    }
    
    var textAdjust = minDem * .2;
    var centerAdjust = (minDem) - textAdjust - 50;
    
    // Adjust H1
    document.getElementById('introHeadline').style.fontSize = (textAdjust) + "px";
    
    // Adjust Contact Mini
    document.getElementById('contactMini').style.top = (minDem + 50) / 2  + "px";
    
    // Adjust Tagline
    var introTagLine = document.getElementById('introTagline')
    introTagLine.style.top = ((minDem - 100) / 2  + "px");
    introTagLine.style.left = (width / 2) + (minDem / 2) - 100  + "px";
    
    
    // Adjust Center Circle Content
    var playerOuter = document.getElementById('playerOuter');
    if (playerOuter) {
        // Outer
        playerOuter.style.width = centerAdjust + "px";
        playerOuter.style.height = centerAdjust + "px";
        playerOuter.style.left = (width/2) - (centerAdjust /2) + "px";
        playerOuter.style.top = 50 + (textAdjust * .8) + "px";
    }
    // Middle 
    var playerInner = document.getElementById('playerInner');
    if(playerInner){
        playerInner.style.backgroundImage = "url(" + imgUrl + ")";
        playerInner.style.width = (centerAdjust * .9) + "px";
        playerInner.style.height =  (centerAdjust * .9) + "px";
        playerInner.style.left =  (centerAdjust * .05) + "px";
        playerInner.style.top =  (centerAdjust * .05) + "px";
        playerInner.style.backgroundSize = 'cover';
        playerInner.style.backgroundRepeat = 'no-repeat';
        playerInner.style.backgroundPosition = '50% 50%'; 
        
        // Inner
        var introPic = document.getElementById('introPic');
        introPic.style.backgroundImage = "url(" + imgUrlProfile + ")";
        introPic.style.width = (centerAdjust * .6) + "px";
        introPic.style.height = (centerAdjust * .6) + "px";
        introPic.style.left = (centerAdjust * .15) + "px";
        introPic.style.top = (centerAdjust * .15) + "px";
        introPic.style.backgroundSize = 'cover';
        introPic.style.backgroundRepeat = 'no-repeat';
        introPic.style.backgroundPosition = "50% 50%"; 
    }
}

class IntroPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeModeClick = this.handleChangeModeClick.bind(this);
    this.state = {viewMode: false};
  }
 
  handleChangeModeClick() {
      var shownMode = this.state.viewMode;
      this.setState({viewMode: !shownMode});
  }
    
  handleResize() {
      contentLoader();
    }

  render() {
    const viewMode = this.state.viewMode;



    return (
      <div onClick={this.handleChangeModeClick}>
        <IntroViewMode viewMode={viewMode}  />
      </div>
    )
    }
    
    
    componentDidMount() {      
        window.addEventListener('resize', this.handleResize);
        contentLoader(); 
        
        
    }
    
    componentDidUpdate() {  
        contentLoader();  
    }          
  }
    


module.exports = IntroPlayer;

