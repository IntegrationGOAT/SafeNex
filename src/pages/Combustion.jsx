import React from 'react';
import './Combustion.css';

const Combustion = () => {
  return (
    <div className="combustion">
      <section className="overview">
        <h1>Combustion — Why Fuel Fires Happen</h1>
        <p>Liquid hydrocarbon fuels (petrol, diesel) burn because their vapor mixes with air and ignites. In a crash, leaks create vapor pockets and heat or sparks can trigger rapid combustion, sometimes leading to explosions.</p>
      </section>
      <section className="key-points">
        <h2>Vapor and Flash Point</h2>
        <p>The vapor above liquid fuel ignites; reducing vapor concentration lowers ignition probability.</p>
        <h2>Complete vs Incomplete Combustion</h2>
        <p>Example (complete combustion of octane): 2 C8H18 + 25 O2 → 16 CO2 + 18 H2O (note: balanced coefficients depend on exact hydrocarbon; this is a simplified illustrative reaction)</p>
        <p>In oxygen-poor conditions combustion is incomplete and produces CO and soot — both harmful and dangerous after crashes.</p>
        <h2>Why We Suppress Combustion</h2>
        <p>By mixing fuel with water and surfactant into a stable emulsion we:</p>
        <ul>
          <li>Reduce local vapor pressure and concentration of flammable vapors,</li>
          <li>Increase the mixture’s flash point, and</li>
          <li>Limit flame propagation and explosion risk.</li>
        </ul>
        <h2>Practical Takeaway</h2>
        <p>SAFENEX aims to change the fuel-air behaviour at the moment of leak, turning a high-risk vapor cloud into a much less flammable emulsion.</p>
      </section>
    </div>
  );
};

export default Combustion;