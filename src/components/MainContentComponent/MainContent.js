// Import library for making a component
import React, { Component} from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from '../SearchBarComponent/SearchBar';
import VideoList from '../VideoListComponent/VideoList';
import VideoDetail from '../VideoDetailComponent/VideoDetail';
import './MainContent.scss';

const API_KEY = 'AIzaSyAo8DuDdVDbCQ3z6kFWzqRWe7aoY5gwAA4';

// Create a component
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('A star is born BSO');

    }
    
    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, videos => {
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            }); // === this.setState({ videos: videos });
        });
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300); // Lodash limit searchVideo call max. once per 300 miliseconds
        
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <div className="videoContent">
                    <VideoDetail className="flex-2" video={ this.state.selectedVideo } />
                    <VideoList
                        className="flex-1"
                        onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
                        videos={ this.state.videos } />
                </div>
            </div>
        );
    }
};

// Make the component available to other parts of the app
export default MainContent;
