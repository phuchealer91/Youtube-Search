import React, { Component } from 'react'
import '../Videos.css';
export default class VideoDetail extends Component {
    render() {
        const {onRetriveVideoDetail} = this.props;
            if(!onRetriveVideoDetail){
                return <div className="loading">Loading...</div>
            }
            const urlYoutube = `https://www.youtube.com/embed/${onRetriveVideoDetail.id.videoId}`;

        return (
            
            <div className="video-detail">
            <button className="playButtonClass"></button>
               <div className="video-detail__view ui embed">
               <iframe
                title="video player" 
                src={urlYoutube} 
                ></iframe>
                
               </div>
               <div className="video-detail__txt ui segment">
                <ul className="video-detail__txt-list">
                    <li className="video-detail__name"><b>Name:</b> {onRetriveVideoDetail.snippet.title}</li>
                    <li className="video-detail__chanel"><b>Chanel:</b> {onRetriveVideoDetail.snippet.channelTitle}</li>
                </ul>
            </div>
            </div>
        )
    }
}
