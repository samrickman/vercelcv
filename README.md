# Personal website

## Overview

This is the source for my [personal website](https://www.samrickman.com/), showcasing my skills, research, and experience as a **Data Scientist** and **AI Researcher**. It includes links to research and other projects.

## Features

- **Dynamic navigation**: Updates content without reloading
- **Dark mode toggle**: Who doesn't love dark mode? Such people exist, apparently
- **Particle effects**: Interactive background using [`tsparticles`](https://github.com/tsparticles/tsparticles)

## Tech stack

- **Next.js** – React-based framework for fast, server-rendered pages.
- **Tailwind CSS** – Utility-first styling for a polished, responsive design.
- **Framer motion** – Smooth animations and transitions.

## Installation & setup

### **1. Clone the repository**
```sh
git clone https://github.com/samrickman/vercelcv.git
cd vercelcv
```

### **2. Install dependencies**
```sh
pnpm install
```
(If you prefer use `npm install` or `yarn install`, but I recommend [`pnpm`](https://pnpm.io/).)

### **3. Run the development server**
```sh
pnpm dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### **4. Build & deploy**
To create a production build:
```sh
pnpm build
pnpm start
```

## Deployment

The site is **deployed on Vercel** for optimal performance and free hosting. It auto-builds and deploys automatically when updates are pushed updates to GitHub.

## Customisation

- **Particles Settings**: Modify `ParticlesBackground.js` to tweak particle behavior.
- **Styles**: Customise `globals.css` for theme adjustments.
- **Content Updates**: Modify `sections/` components (e.g., `About.js`, `Research.js`).

## To do

- [ ] Integrate **live demo projects** for AI/NLP research.
- [ ] Add some **blog posts**.
- [ ] Include **interactive research visualisations**.
- [ ] Improve **dark mode toggle** positioning on medium screens (tablets).

## Contact

📧 Email: [contact@samrickman.com](mailto:contact@samrickman.com)  
🐙 GitHub: [github.com/samrickman](https://github.com/samrickman)  
📚 ORCID: [orcid.org/0000-0003-1921-5258](https://orcid.org/0000-0003-1921-5258)  
