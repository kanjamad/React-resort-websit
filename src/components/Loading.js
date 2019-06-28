import React from 'react';
import loadingGif from '../images/gif/timmer.gif';

const Loading = () => {
    return (
        <div className="loading">
            <h4> romms data loading...</h4>
            <img src={loadingGif} alt="loading-timmer" />
        </div>
    )
}

export default Loading;
