import React, { Component } from 'react'
import '../Videos.css';
export default class VideoItem extends Component {
    onHandleVideo = () => {
        this.props.onVideoSelectList(this.props.video);
    }
    render() {
        const {video} = this.props;
        const {snippet} = video;
        return (
            <div 
            className="video-list item" 
            onClick={this.onHandleVideo}
            >
            <img 
            className="ui image"
            alt={snippet.title}
            src={snippet.thumbnails.medium.url}
             />
            <div className="content">
              <div className="header">{snippet.title}</div>
              {/* <div className="description">{snippet.description}</div> */}
            </div>
          </div>
           
        )
    }
}
