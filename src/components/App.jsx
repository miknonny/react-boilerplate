import React, { Component } from 'react';
import SearchBar from './SearchBar.js'
import YTSearch from 'youtube-api-search'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import _ from 'lodash'

const API_KEY = 'AIzaSyAiJr51WrjrVKl6DgjubIdftubYc1mjE1U'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('arsenal')

  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
       videos,
       selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={term => {videoSearch(term)} } />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}
