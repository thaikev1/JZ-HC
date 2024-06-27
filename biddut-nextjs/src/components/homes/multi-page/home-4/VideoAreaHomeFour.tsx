
'use client'

import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';


const VideoAreaHomeFour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div id="video-one-page" className="tp-video-4-area black-bg tp-video-4-bg jarallax z-index" style={{ backgroundImage: `url(/assets/img/video/bg-4-1.png)` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-video-4-play-box text-center">
                <a className="popup-video"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                ><i className="fal fa-play"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"CHSnz0bCaUk"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoAreaHomeFour;