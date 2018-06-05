import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import Navbar from './components/navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedVideo: null,
      videos: []
    };
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL_wgsnxv_wgIpMiUmFY1lwnEmaVYjJOe8&key=AIzaSyDpre_8zaBVNoEo20D0RseLv83Zx-9CerE`)
    .then( response => response.json() )
   .then( data => this.setState({ videos: data}) );
      // .then(result => {
      //   this.setState({ videos: result.json() });
      // });
  }

  render() {
    return (
      <div className="App">
      <Navbar />
        <div className="container-fluid">
          <div className="row">
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })} 
                videos={this.state.videos.items}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
