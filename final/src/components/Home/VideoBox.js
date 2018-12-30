import React, { Component } from 'react';
import ReactPlayer from 'react-player';




import Box from '../base/Box';


const videoUrl = 'https://youtu.be/ktK6Yx3_czs';

class VideoBox extends Component {
  state = {
     playing: false,
    }

    playPause = () => {
      this.setState({ playing: !this.state.playing });
    }
  render() {
    const { playing } = this.state;
    return (
      <Box>
        <div className="home-box__header">
          <h3>Crypto Currency</h3>
        </div>
        <div className="divider margin--small-bottom" />
        <ReactPlayer
          className="home__wireframe-img"
          url = { videoUrl }
          playing={ playing }
        />
        <button className="pure-button home__play-btn" onClick={ this.playPause }>
          { playing ? 'Pause' : 'Play' }
        </button>
      </Box>
    );
  }
}

export default VideoBox;


