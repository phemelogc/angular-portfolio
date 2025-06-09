# 👨‍💻 Phemelo's Developer Portfolio (Angular)

Welcome to my personal portfolio built using **Angular**! This project showcases who I am, the skills I’ve learned, and the projects I’ve built — all in a **clean, single-page layout**.

---

## 🛠️ Tech Stack

- **Angular 17+**
- **Standalone Components** (no need for traditional NgModules)
- **HTML + CSS**
- **AOS (Animate On Scroll)** for animations
- **Responsive Design** for desktop and mobile

---

## 📁 Project Structure

This portfolio is a **Single Page Application (SPA)**. Each main section is a standalone Angular component:

- `Home` – Intro section
- `About` – My background, goals, and who I am
- `Projects` – List of my projects
- `Skills` – Programming tools and tech I use
- `Contact` – Ways to reach me

These components are embedded directly into `app.html` using their tags (e.g. `<app-home>`).

---

## 🚀 How Routing Works

While this app doesn’t use full Angular routing in the browser (like `/about`, `/projects`), I **set up `app.routes.ts`** using Angular’s route configuration system for possible future upgrades.

```ts
export const routes: Routes = [
  // Example (currently commented out):
  // {
  //   path: 'projects',
  //   loadComponent: () => import('./projects/projects').then(m => m.Projects)
  // }
];
