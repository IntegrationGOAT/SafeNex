import React from 'react';
import './Emulsification.css';

const Emulsification = () => {
  return (
    <div className="emulsification">
      <section className="intro">
        <h1>Emulsification — The Science Behind SAFENEX</h1>
      </section>
      <section className="emulsifier">
        <h2>What is an Emulsifier?</h2>
        <p>An emulsifier (surfactant) is a molecule with two parts: a hydrophilic (water-loving) head and a hydrophobic (oil-loving) tail. These molecules sit at the oil–water boundary and stabilize small oil droplets dispersed inside water, forming an emulsion.</p>
      </section>
      <section className="reduction">
        <h2>How Emulsification Reduces Flammability</h2>
        <p>Emulsification breaks the continuous fuel phase into many tiny droplets dispersed in water.</p>
        <ul>
          <li>Smaller droplets have much lower vapor pressure and release less fuel vapor into the air.</li>
          <li>The presence of water as the continuous phase suppresses ignition and absorbs heat, making flames less likely to start or propagate.</li>
        </ul>
      </section>
      <section className="process">
        <h2>Qualitative Process</h2>
        <div className="equation">
          <p>Fuel (oil droplets) + Water + Surfactant → Stable emulsion (surfactant surrounds oil droplets preventing coalescence)</p>
        </div>
      </section>
      <section className="types">
        <h2>Common Emulsifier Types Suitable for Prototyping</h2>
        <ul>
          <li><strong>Anionic surfactants</strong> (e.g., sodium lauryl sulfate type; dissociates in water to yield surfactant ions). Example dissociation:<br />
            <span className="chem-equation">C12H25SO4Na → C12H25SO4⁻ + Na⁺</span>
          </li>
          <li><strong>Non-ionic surfactants</strong> (e.g., polysorbates like Tween 80) — do not ionize and are often more stable across pH and temperature ranges.</li>
          <li><strong>Soap (saponified fatty acids)</strong> — can be produced by base hydrolysis of triglycerides (useful as a low-tech emulsifier):<br />
            <span className="chem-equation">Triglyceride + 3 NaOH → glycerol + 3 RCOO⁻Na⁺ (soap salts)</span>
          </li>
        </ul>
      </section>
      <section className="design">
        <h2>Design Notes / Safety Considerations</h2>
        <p>Choose emulsifiers that are stable, non-corrosive and do not degrade fuel tank materials. Avoid corrosive or highly reactive chemicals.</p>
        <p>Emulsifier amount must be optimized: just enough to stabilize droplets and lower vapor. Excess water or surfactant could interfere with fuel delivery if the vehicle must later be driven — design for single emergency activation / drainability.</p>
        <p>Test with small controlled setups, measure vapor concentration and flash point before any real-world trial.</p>
      </section>
      <section className="testing">
        <h2>Testing & Validation (Recommended)</h2>
        <ul>
          <li>Lab emulsification trials: measure droplet size distribution and stability over time.</li>
          <li>Flash point and vapor concentration tests with certified equipment (only in supervised lab conditions).</li>
          <li>Controlled impact tests on mock tanks (safety and approvals required).</li>
        </ul>
      </section>
    </div>
  );
};

export default Emulsification;