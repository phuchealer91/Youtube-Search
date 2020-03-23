import React, { Component } from 'react'
import VideoItem from './VideoItem';
export default class VideoList extends Component {
    render() {
        const {onRetriveVideos,onRetriveVideoSelect} = this.props;
        const renderVideoList = onRetriveVideos.map((video,index)=>{
            return <VideoItem
            key={index}
            video={video}
            onVideoSelectList={onRetriveVideoSelect}
    />
                
        })
        return (
            <div className="ui relaxed divided list">
                {renderVideoList}
            </div>
        )
    }
}
