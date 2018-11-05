// Import library for making a component
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './VideoListItem.scss';

// Create a component
const VideoListItem = ({ video, onVideoSelect }) => { // {video} === const video = props.video;
    const videoUrl = video.snippet.thumbnails.default.url;
    return (
        <Card 
            className="flex cardElement"
            onClick={() => onVideoSelect(video) }>
            <CardMedia
                className='cover'
                image={ videoUrl }
                title="video.snippet.title"
            />
            <div className="flex-column">
                <CardContent className="flex-auto">
                    <Typography variant="subtitle1">
                        { video.snippet.title }
                    </Typography>
                </CardContent>
            </div>
        </Card>
    )
};
  

// Make the component available to other parts of the app
export default VideoListItem;