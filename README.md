# 🟡 RAY — Routines, Actions, You

**RAY** is the main shell application of a modular productivity platform, designed to simulate the migration of a `single-spa` micro-frontend architecture into a modern **Next.js**-driven monolith. It integrates standalone MFEs while showcasing a variety of content rendering strategies through different pages of the shell app.

This app is part of the [`ray-tools`](https://github.com/ray-tools) organization.

---

## 🧩 What’s Inside

This repository hosts the **Next.js shell app**:

- Serves as the root of the system
- Handles navigation and layout
- Integrates standalone MFEs (e.g. Habit Tracker, Focus Timer)
- Demonstrates **SSR**, **CSR**, **SSG**, and **ISR** via different routes

The MFEs (e.g. `habit-ray`) live in separate repositories and are mounted dynamically.

---

## 🎯 Project Goals

- Explore modern rendering patterns in **Next.js (App Router)**
- Integrate with existing React MFEs
- Replace legacy `single-spa` shell behavior
- Build a composable dashboard-oriented portfolio system
- Simulate a real-world migration in a developer-friendly setup

---

## 🧱 Tech Stack

- ⚡ Next.js (App Router)
- ⚛️ React 18
- 🧭 TypeScript
- 🎨 TailwindCSS
- 🐳 Docker + Docker Compose
- [ ] Optional: Webpack Module Federation or `iframe` strategy for MFEs

---

## 🗺️ Route + Rendering Strategy Map

| Route                  | Description                                     | Rendering Method |
|------------------------|-------------------------------------------------|------------------|
| `/dashboard`           | Personalized metrics + widgets                 | **SSR**          |
| `/reports/:id`         | Cached analytics & summaries                   | **ISR**          |
| `/about`               | Static site content                            | **SSG**          |
| `/feedback`            | Interactive form with client-side submission   | **CSR**          |
| `/onboarding`          | Multi-step flow with transitions               | **CSR**          |
| `/docs`                | Markdown-based knowledge base (optional)       | **SSG**          |
| `/account/settings`    | Authenticated user settings                    | **SSR**          |

---

## 🧩 Micro-Frontends (MFEs)

Each tool is a separate application integrated at runtime:

| App             | Repo                                  | Integration      |
|------------------|---------------------------------------|------------------|
| Habit Tracker    | [`habit-ray`](https://github.com/ray-tools/habit-ray) | iframe / dynamic import |
| Focus Timer      | _Planned_                             | iframe / dynamic import |
| Notes App        | _Planned_                             | iframe / dynamic import |

---

## 🐳 Local Development with Docker

### Requirements
- Docker Desktop
- Git

### Setup

Clone all required apps:

```bash
git clone https://github.com/ray-tools/ray.git
git clone https://github.com/ray-tools/habit-ray.git
```

Start the dev environment from the shell app root:

```bash
cd ray
docker-compose up --build
```
This will:
- Start the ray shell on http://localhost:3000
- Start habit-ray (MFE) on a separate port (e.g., http://localhost:3001)
- Provide networking between apps for local integration

---

## 📁 Suggested Repo Structure (across ray-tools org)

```bash
ray-tools/
├── ray/           # Shell app (Next.js)
├── habit-ray/     # Micro-frontend: Habit Tracker
├── focus-ray/     # (planned) MFE: Focus Timer
├── notes-ray/     # (planned) MFE: Notes App
└── docker-compose.yml  # Shared orchestration
```
---

## 🪄 Naming
**RAY** = Routines, Actions, You  
Your modular productivity system.  
Built for developers, designed for clarity, and structured to grow.

---

## 💬 Questions, Ideas?

Feel free to [open an issue](https://github.com/ray-tools/ray/issues) or [start a discussion](https://github.com/ray-tools/ray/discussions) if you'd like to contribute or collaborate!

---

Built for experimentation. Designed for migration.  
*— The ray-tools Project*

