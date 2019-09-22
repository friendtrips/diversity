import React from 'react';
// import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <div className="fullscreen-bg">
      <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
        <source src="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/3081/12/315405438/1218667660.mp4?token=1569117927-0x77de274fa81374d5f88c7c07b9789619ad22c608" type="video/webm" />
      </video>
    </div >)
};

export default LandingPage