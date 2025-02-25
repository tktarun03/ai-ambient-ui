# ai-ambient-ui

An AI-powered Ambient UI that adapts to environmental and user context using Angular, StencilJS, WebAssembly, and real-time sensor data.

## 🚀 Features
- **AI-powered Ambient UI** using **Angular & StencilJS**.
- **Environment-aware UI adjustments** powered by **WebAssembly AI processing**.
- **Dynamic UX that adapts to real-time lighting, noise, and user context**.

## 📂 Project Structure
```
ai-ambient-ui/
│── stencil-ambient-ui/  # Stencil-powered Ambient UI components
│   ├── src/components/ambient-sensor/  # AI-powered environmental sensor UI
│   ├── stencil.config.ts  # Stencil configuration
│── angular-ambient-dashboard/  # Angular host for AI-powered Ambient UI
│   ├── src/app/  # Angular app with Ambient UI interactions
│   ├── package.json  # Angular dependencies
│── wasm-environment-analysis/  # WebAssembly AI-powered environment adaptation (Rust-based)
│   ├── src/main.rs  # AI-driven environmental adaptation model
│   ├── Cargo.toml  # Rust package file
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/ai-ambient-ui.git
   cd ai-ambient-ui
   ```

2. Install dependencies and build Stencil Ambient UI:
   ```bash
   cd stencil-ambient-ui
   npm install
   npm run build
   ```

3. Link Stencil components to Angular:
   ```bash
   cd ../angular-ambient-dashboard
   npm install
   npm start
   ```

4. Compile the WebAssembly AI Environmental Analysis module:
   ```bash
   cd ../wasm-environment-analysis
   cargo build --target wasm32-unknown-unknown --release
   ```

5. Open **http://localhost:4200** to experience AI-powered Ambient UI.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | AI & Ambient UI Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve AI-powered Ambient UI.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
