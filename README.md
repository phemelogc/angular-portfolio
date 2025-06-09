# 🧠 My Developer Portfolio (Angular)

This is my personal portfolio website built with **Angular**. It showcases my skills, projects, and contact information in a single-page format with smooth navigation and scroll animations.

## 🔧 Technologies Used

- **Angular 17+** (Standalone components)
- **HTML/CSS**
- **AOS (Animate On Scroll)** for scroll animations
- **TypeScript**
- **Responsive Design** (Mobile-friendly)

---

## 🧭 Project Structure & Routing

This project uses **Angular standalone components** for a simplified structure — no routing module required.

### Main Sections

Each section of the page is a standalone component:

- `Home` – Welcome/landing section
- `About` – Short bio about my background, age, goals
- `Projects` – Showcasing my work
- `Skills` – Technologies and tools I use
- `Contact` – Contact form or details

These are imported directly into `AppComponent` to act as a **single-page scroll site**.

---

## ✨ Animations with AOS

I'm using **AOS (Animate On Scroll)** for adding fade-up and other smooth animations when sections enter the viewport.

### Setup Summary:
- Installed AOS via `npm install aos`
- Imported AOS in `main.ts` and `styles.css`
- Initialized AOS in `AppComponent`
- Used `data-aos="fade-up"` attributes in HTML elements

---

## 📁 File Highlights

- `app/app.ts`: Root component handling scroll-based navigation highlight, smooth scrolling, and AOS setup.
- `about/about.html`: Contains personal summary (age, goals, career).
- `styles.css`: Global styles + AOS animations.
- `angular.json`: Includes AOS assets and styles in the build process.

---

## 🚀 How to Run

```bash
npm install
ng serve
