import React from 'react';
import { Button } from '@material-ui/core';

const LandingPage = (props) => {
  return (
    <div className="overlay">
      <div className="video-overlay"></div>
      <div style={{ position: 'fixed', top: '0', right: '0', bottom: '0', left: '0', overflow: 'hidden', zIndex: '-100' }}>
        <video loop muted autoPlay poster={require("../../dist/landingimage.jpg")} style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
          <source src={require("../../dist/ocean.mp4")} type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '-20px'
        }}>
          <img src={require("../../dist/templogo.png")} width="200" height="97" /></div>
        <div style={{ fontFamily: 'Roboto', color: 'white', textShadow: '2px 2px black', fontSize: '30px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%' }}>Here is some text about our app, inviting you to use it and telling you how and why you should.
        </div>
        <div style={{ marginTop: "50px", margin: '0 auto', position: 'absolute', top: '60%', left: '50%' }}>
          <Button variant="contained">Plan your next friend trip</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage