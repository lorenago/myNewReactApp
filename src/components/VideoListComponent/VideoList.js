// Import library for making a component
import React from 'react';

import VideoListItem from './components/VideoListItemComponent/VideoListItem';
import './VideoList.scss';

// Create a component
const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem 
                onVideoSelect={ props.onVideoSelect } 
                key={ video.etag } 
                video={ video } />
        );
    });

    return (
        <ul className="list">
            { videoItems }
        </ul>
    );
};
// // Create a component
// class VideoList extends Component {
//     render() {
//         return (
//             <ul>
//                 { this.videoItems }
//             </ul>
//         );
//     }
// };

// Make the component available to other parts of the app
export default VideoList;
