import React, { Component } from 'react'
import SearchBar from './SearchBar';
// import youtube from '../api/youtube';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onTermForm('jack');
  }


  onTermForm = async term => {
    const KEY = 'AIzaSyB95HzEj-iVNqCxUJ9DtKYCFRrYDQvtLJU';
    const response = await axios({
      method: 'get',
      url: '/search',
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY,
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }
  // onTermForm =  term => {
  //   youtube.get('/search',{
  //     params: {q: term}
  //   }).then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div>
        <div className="ui container">
          <SearchBar
            onRetriveForm={this.onTermForm}
          />
          <div className="ui stackable grid">
            <div className="ten wide column">
              <VideoDetail
                onRetriveVideoDetail={selectedVideo}
              />
            </div>
            <div className="six wide column">
              <VideoList
                onRetriveVideos={videos}
                onRetriveVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
        <div id="player"></div>

        <div className="search-bar__coppy">Copyright © 2020 - Phúc Tái</div>
      </div>

    )
  }
}

export default App; 