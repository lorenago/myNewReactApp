// Import library for making a component
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './VideoDetail.scss';

// Create a component
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>No se han encontrado resultados</div>
    };

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Card id="videoDetail" className="flex-column flex center-center padding-1 margin-1">
            <CardMedia
            component="iframe"
            className="video"
            src={url}
            title="Video"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                { video.snippet.title }
            </Typography>
            <Typography component="p">
                { video.snippet.description }
            </Typography>
            </CardContent>
        </Card> 
        // <div className="video-detail">
        //     <div>
        //         <iframe className="embed-video" src={ url }></iframe>
        //     </div>
        //     <div className="details">
        //         <div>
        //             { video.snippet.title }
        //         </div>
        //         <div>
        //         { video.snippet.description }
        //         </div>
        //     </div>
        // </div>
    );
};

// Make the component available to other parts of the app
export default VideoDetail;
