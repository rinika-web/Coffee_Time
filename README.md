# ☕ Coffee Time
#### Advanced React Motion Experience (Next.js + GSAP + Framer Motion)

A production-style, motion-driven coffee brand interface built with modern React architecture.

This project demonstrates advanced frontend engineering through component design, animation lifecycle management, interaction systems, and responsive layout control.

## 🚀 Project Overview

### Coffee Time is a cinematic brand website engineered to showcase:

Advanced React component architecture

Hybrid animation systems

Scroll-based interaction logic

Physics-inspired UI behavior

Responsive navigation engineering

Clean lifecycle management

This is not a static UI mockup — it is an interaction-focused React application built with production patterns.

### 🛠 Tech Stack

Next.js (App Router)

React 18

Tailwind CSS

GSAP + ScrollTrigger

Framer Motion

Next/Image Optimization

## 🧠 React Engineering Highlights
### 1️⃣ Component Architecture

Fully modular structure

Clear separation of concerns

Reusable animation primitives (AnimatedHeadline, AnimatedLine)

Higher-order interaction wrapper (Magnetic)

### 2️⃣ State & Lifecycle Control

Scroll-based navbar visibility logic

Controlled modal presentation with AnimatePresence

Event listener cleanup on unmount

ScrollTrigger destruction to prevent memory leaks

Mouse position state for dynamic hover effects

### 3️⃣ Performance Considerations

gsap.quickTo() for optimized transform updates

Avoiding unnecessary re-renders in hover interactions

Viewport-based animation loading

Proper animation cleanup patterns

Image optimization via next/image

### 🎬 Motion System Architecture
#### GSAP (Imperative Animation Layer)

##### Used for:

3D perspective-based card entrance

Scroll-triggered timeline orchestration

Elastic magnetic hover physics

Transform-based animation control

Controlled timeline reset on scroll reverse

##### Key techniques:

transformPerspective

preserve-3d

Alternating rotateY

Timeline staggering

Lifecycle-safe cleanup

#### Framer Motion (Declarative Layer)

##### Used for:

Section reveal animations

Character-level hover text transitions

Modal animation with presence management

Navigation overlay transitions

Viewport-triggered entrance control

This hybrid approach demonstrates awareness of when to use imperative vs declarative motion systems.

## ✨ Core Features
### 🎥 Cinematic Hero

Full-screen video background

Layered overlays

Animated typography

### 🧾 Interactive Menu

Scroll-triggered 3D card entrance

Flip-card pricing interaction

Responsive grid layout

### 🎯 Magnetic CTA Button

Cursor-attraction effect using GSAP

Elastic easing physics

Dynamic radial hover expansion

Modal state management

### 🧭 Responsive Navigation

Scroll-direction hide/show logic

Character-by-character hover animation

Mobile overlay navigation

Smooth hash scrolling + router navigation

## 📍 Contact Section

Viewport-based reveal animation

Structured responsive grid layout

Optimized image handling

### 🖥 Installation
```
git clone [https://github.com/rinika-web/Coffee_Time/edit/main/README.md]
cd coffee-time
npm install
npm run dev
```
## 🎯 What This Project Demonstrates to Employers

Strong React fundamentals

Component-driven architecture

Advanced animation engineering

Scroll interaction logic

Lifecycle-aware implementation

Clean UI structuring

Production-ready frontend thinking

🔗 **Live Demo:** [https://coffee-time-wyv7.vercel.app/]
💼 **Portfolio:** [https://www.rinikakoley.com/]
