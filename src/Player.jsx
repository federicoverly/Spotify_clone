import React from 'react';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import Sidebar from './Sidebar';

function Player( { spotify }) {
    return (
        <div className="player">            
            <div className="player__body">
                {/* Sidebar */}
                <Sidebar />

                {/* Body */}
                <Body spotify={spotify} />
            </div>

            <div className="player__footer">             
                {/* Footer */}
                <Footer />
            </div>

        </div>
    )
}

export default Player
