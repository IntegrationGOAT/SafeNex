import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null); 

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log('Autoplay prevented:', error); 
      });
    }
  }, []); 

  return (
    <div className="home">
      {}
      <video
        ref={videoRef}
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        src="src/assets/emulsifiation.mp4" 
        preload="auto" 
      >
        Video not supported - check path: ./src/assets/emulsifiation.mp4
      </video>
      
      <section className="hero">
        <h1>SAFENEX — Smart Emulsification for Post-Accident Safety</h1>
        <h2>An automatic, low-cost system that prevents post-accident fuel fires by injecting a water-emulsifier mixture to render leaking fuel non-flammable within seconds.</h2>
        <p>In many vehicle crashes a secondary and deadly risk is fuel ignition — leaking petrol or diesel can catch fire within moments. SAFENEX detects impact and immediately injects a measured water + emulsifier dose into the tank, forming a stable emulsion that dramatically lowers flammability and vapor release. Automated, fast, and affordable — SAFENEX acts in the golden seconds after a crash so help can arrive safely.</p>
        <ul className="quick-stats">
          <li>Automatic activation on impact — no driver action required.</li>
          <li>Low cost prototype — approx. ₹1,020 (education/DIY scale).</li>
          <li>Easy retrofit for cars, trucks and commercial vehicles.</li>
        </ul>
        <div className="cta-buttons">
          <button className="cta-button" onClick={() => navigate('/services')}>Learn how it works →</button>
          <button className="cta-button secondary" onClick={() => navigate('/emulsification')}>See the science →</button>
        </div>
      </section>
    </div>
  );
};

export default Home;