import * as React from 'react';
import logo from '../../assets/logo.png';

export default function HarmonicaIcon() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo} 
        alt="Harmonica Logo"
        style={{ height: 32, width: 32, marginRight: "-6px" }} 
      />
      <span style={{ fontSize: "16px", fontWeight: "bold", color: "#4A6EDC", marginRight: "20px" }}>
        Aurora
      </span>
    </div>
  );
}
