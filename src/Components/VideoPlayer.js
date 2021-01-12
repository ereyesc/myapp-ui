import React from "react";
import videojs from "video.js";

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
    let button = document.getElementsByClassName('vjs-big-play-button');
    if(button){
      button[0].style.position='relative';
      button[0].style.marginLeft='auto';
      button[0].style.marginRight='auto';
      button[0].style.top='35%';
    }
    /* position: relative;
    margin-left: auto;
    margin-right: auto; */
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    const actualWidth = `${window.innerWidth}px`
    return (
      <div>
        <div data-vjs-player style={{width:actualWidth}}>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}
