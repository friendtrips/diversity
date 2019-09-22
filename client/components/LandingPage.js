import React from 'react';

const LandingPage = (props) => {
  return (
    <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', overflow: 'hidden', zIndex: '-100' }}>
      <video loop muted autoPlay poster="../../dist/landingimage.jpg" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
        <source src="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/3081/12/315405438/1218667660.mp4?token=1569133728-0x606a1ce518b118d86d3d917dbde10adaa4128917" type="video/webm" />
      </video>
    </div >)
};

export default LandingPage