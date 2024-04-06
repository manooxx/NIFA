import React from 'react'

const YoutubeVideo = ({ videoUrl, width, height }) => {
    return (
        <div className='video-container'>
            <iframe width={width}
                height={height}
                src={videoUrl}

                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer;
                autoplay;
                clipboard-write; 
                encrypted-media; 
                gyroscope;
                picture-in-picture;
                web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        </div>
    );
};

export default YoutubeVideo
