import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="mission">
        <h1>About SAFENEX</h1>
        <p>To reduce post-accident fatalities and property loss by providing an automatic, low-cost solution that prevents fuel tank fires through smart emulsification.</p>
      </section>
      <section className="team">
        <h2>Team & Credits</h2>
        <p>Project by Anish De (XI-F) & Jeet Baidya (IX-A), Delhi Public School Ruby Park, Kolkata. Developed as a student safety-innovation project with focus on low cost, replicability and scalability.</p>
      </section>
      <section className="impact">
        <h2>Why It Matters</h2>
        <ul>
          <li>Many crash fatalities are worsened by secondary fires; by reducing flammability SAFENEX can save lives and lower medical and property costs.</li>
          <li>Affordable for wide adoption in India’s vehicle fleet, from personal cars to commercial trucks and tankers.</li>
        </ul>
      </section>
      <section className="cost">
        <h2>Cost Snapshot (Education/Prototype)</h2>
        <ul>
          <li>Arduino UNO R3 — ₹450</li>
          <li>2 × Servo motors — ₹300</li>
          <li>Arduino motor shield — ₹120</li>
          <li>DC motor (agitator) — ₹20</li>
          <li>Pressure sensor — ₹80</li>
          <li>Misc. wires & hardware — ₹50</li>
          <li><strong>Total (prototype): ≈ ₹1,020</strong></li>
        </ul>
      </section>
      <section className="roadmap">
        <h2>Future Roadmap</h2>
        <ul>
          <li>Industrial solenoid valves for heavy vehicles</li>
          <li>IoT/GSM alerts and crash-data logging</li>
          <li>Integration with airbag/vehicle CAN bus for synchronized response</li>
          <li>Scale to EV / battery-safe variants</li>
        </ul>
      </section>
    </div>
  );
};

export default About;