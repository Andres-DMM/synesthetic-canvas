# 🎨 Synesthetic Canvas

> **A real-time, multi-modal generative art and generative sound engine built for Hack the Arts.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Click_Here-brightgreen?style=for-the-badge)](YOUR_DEPLOYED_URL_HERE)
[![Submission Video](https://img.shields.io/badge/Demo_Video-Watch_Now-blue?style=for-the-badge)](YOUR_YOUTUBE_OR_LOOM_LINK_HERE)

---

## 🌟 Overview

**Synesthetic Canvas** explores the intersection of human sensation, mathematics, and generative visual art. By translating physical motion, voice/ambient sound frequencies, and computer vision inputs into real-time particle physics, the canvas turns every user interaction into a unique aesthetic and auditory experience.

Whether using a mouse, clapping/singing into a microphone, or waving hands in front of a webcam, **Synesthetic Canvas** turns your browser into an expressive canvas and musical synthesizer.

---

## ✨ Key Features

* **🌊 Perlin Noise Flow-Field Physics:** Over 15,000 active particles driven by 2D/3D noise vectors, complete with force-field direction visualizers.
* **🎙️ Frequency Spectrum Audio Reactivity:** Real-time Web Audio API FFT analysis mapping low (bass), mid, and high (treble) frequencies to particle size, velocity, and visual shockwaves.
* **🖐️ AI Hand-Pose & Motion Tracking:** Client-side computer vision tracking hand landmarks and gesture velocities to pinch, pull, or warp particle streams.
* **🎼 Reverse Synesthesia (Generative Audio Synthesis):** Interactive canvas movements trigger Web Audio polyphonic synth notes tuned to harmonized scales (C Major Pentatonic).
* **🎨 Preset Aesthetic Themes:** Dynamic color palette rendering across Cyberpunk Neon, Cosmic Abyssal, Solar Flare, and Bioluminescence presets.
* **📸 Snapshot Engine:** Export high-resolution PNG snapshots directly from the WebGL buffer.

---

## 🛠️ Tech Stack

* **Canvas & Rendering Engine:** [p5.js](https://p5js.org/) (WebGL Mode)
* **AI & Computer Vision:** [ml5.js](https://ml5js.org/) / MediaPipe (Client-side TensorFlow.js execution)
* **Audio Synthesis & FFT:** Web Audio API (`AudioContext`, `AnalyserNode`, `p5.FFT`)
* **Styling & UI:** HTML5, CSS3 Glassmorphism overlays
* **Hosting:** GitHub Pages / Vercel

---

## 🧠 How It Works (Technical Breakdown)

### 1. Vector Physics & Flow Fields
The visual engine uses grid-based noise sampling. Each grid cell calculates an angle using 3D Perlin Noise, converting that angle into a force vector:

$$\vec{F} = \begin{pmatrix} \cos(\theta) \\ \sin(\theta) \end{pmatrix}, \quad \text{where } \theta = \text{noise}(x \cdot s, y \cdot s, t) \cdot 2\pi$$

Particles update their velocity vector $\vec{v}$ based on acceleration $\vec{a}$, damped by a friction coefficient to maintain liquid-like motion blur.

### 2. Fast Fourier Transform (FFT) Audio Processing
Microphone input is routed through a 32 to 512-bin `AnalyserNode`. Frequencies are isolated into three dedicated bands:
* **Bass ($20\text{ Hz} - 140\text{ Hz}$):** Modulates particle scale and impulse forces.
* **Mids ($400\text{ Hz} - 2.6\text{ kHz}$):** Modulates flow field noise step ($t$).
* **Treble ($4\text{ kHz} - 14\text{ kHz}$):** Controls color hue shifting in HSB space.

### 3. Client-Side AI Model Inference
Webcam tracking operates **100% on the client GPU** with zero external server calls. Landmark coordinates from `ml5.handPose` act as dynamic gravitational attractors/repellers directly within the p5 particle update loop.

---

## 🤖 AI Assistance & Vibe Coding Disclosure

In alignment with the hackathon's transparency guidelines, **Synesthetic Canvas** was developed using a **vibe coding methodology**:

* **AI Tools Used:** Cursor / Claude 3.5 Sonnet / ChatGPT
* **Human Oversight & Direction:** System architecture design, UI/UX framing, prompt engineering, feature integration, debugging WebGL buffer clears, and optimizing frame-rate performance for browser GPU execution.
* **Core Code Generation:** The initial boilerplate, p5.js flow field setup, and Web Audio API wiring were iteratively generated and refined using detailed conversational prompts.

---

## 🚀 Getting Started (Run Locally)

Because this app runs **100% on the frontend**, no backend installation, database setup, or API keys are required.

### Quick Start
1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/synesthetic-canvas.git](https://github.com/YOUR_USERNAME/synesthetic-canvas.git)
