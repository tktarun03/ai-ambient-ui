import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'ambient-sensor',
  styleUrl: 'ambient-sensor.css',
  shadow: true
})
export class AmbientSensor {
  @State() environment: string = "Scanning surroundings...";

  analyzeEnvironment() {
    const conditions = [
      "Low light detected 🌙. Switching to Dark Mode.",
      "Bright environment ☀️. Adjusting brightness.",
      "Quiet space detected 🤫. Enabling Focus Mode.",
      "Noisy environment 🎧. Suggesting noise cancellation."
    ];
    this.environment = conditions[Math.floor(Math.random() * conditions.length)];
  }

  render() {
    return (
      <div class="ambient-box">
        <h2>AI Ambient UI</h2>
        <button onClick={() => this.analyzeEnvironment()}>Analyze Environment</button>
        <p>{this.environment}</p>
      </div>
    );
  }
}
