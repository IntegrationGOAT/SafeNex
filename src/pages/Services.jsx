import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <section className="service-section">
        <h1>Service — How SAFENEX Protects Lives</h1>
        <p>SAFENEX combines simple sensors, microcontroller logic and fluid mechanics to stop fires before they start. Below are the core services the system delivers when a crash occurs.</p>
        <ol className="service-steps">
          <li>
            <h3>Impact Detection</h3>
            <p>A pressure/impact sensor detects sudden deceleration or a shock event (threshold configurable). The sensor sends an immediate signal to the controller.</p>
          </li>
          <li>
            <h3>Decision & Trigger</h3>
            <p>The microcontroller (Arduino or equivalent) checks the sensor input and safety interlocks, then triggers the injection sequence in milliseconds.</p>
          </li>
          <li>
            <h3>Automatic Injection</h3>
            <p>Servo-driven micro-syringes inject precise doses of water and emulsifier through dedicated nozzles into the fuel tank or fuel line area where leakage is occurring.</p>
          </li>
          <li>
            <h3>Agitation & Mixing</h3>
            <p>A small DC agitator runs briefly to disperse the injected liquids and form a fine emulsion, reducing volatile vapors and flash point.</p>
          </li>
          <li>
            <h3>Alert & Logging (Optional)</h3>
            <p>Optional GSM/IoT module sends emergency SMS/alert and logs the event to a crash-blackbox for post-accident analysis.</p>
          </li>
        </ol>
        <ul className="service-benefits">
          <li>Acts proactively — neutralizes fuel before ignition is possible.</li>
          <li>Minimal wiring and compact hardware suitable for retrofit.</li>
          <li>Compatible with vehicle safety systems (can pair with airbag sensors).</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;