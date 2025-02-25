import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Ambient UI Dashboard</h1>
    <div class="dashboard">
      <ambient-sensor></ambient-sensor>
      <wasm-environment-analysis></wasm-environment-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }