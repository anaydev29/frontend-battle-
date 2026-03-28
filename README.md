# Ravindra IAS Website

A premium, modern React frontend for the Ravindra IAS coaching institute, featuring high-quality visual design, smooth animations, and comprehensive responsive layouts. This project is built using React (Vite) and Tailwind CSS.

**Live Demo:** [https://frontend-battle-green.vercel.app/](https://frontend-battle-green.vercel.app/)

## 🚀 Features

- **Modern UI/UX**: Premium "Academic Editorial" aesthetic using a Navy and Maroon color palette.
- **Advanced Animations**: Custom hooks for scroll reveals (`useScrollReveal`), parallax scrolling (`useParallax`), and typing effects (`useTypingEffect`).
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop viewports, with a polished touch-friendly mobile navigation menu.
- **Interactive Components**: Features auto-looping sliders for Testimonials and Toppers.
- **Multi-Page Layout**: Includes `Home`, `About`, `Courses`, `Toppers`, `Resources`, and `FAQ` pages, all completely styled and ready for use.
- **Glassmorphism**: Elegant blur effects specifically utilized for mobile navigation and sticky headers.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Material Icons](https://fonts.google.com/icons)

## 📁 Project Structure

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── TestimonialCarousel.jsx
│   └── TopperSlider.jsx
├── hooks/
│   ├── useParallax.js
│   ├── useScrollReveal.js
│   └── useTypingEffect.js
├── pages/
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── FAQ.jsx
│   ├── Home.jsx
│   ├── Resources.jsx
│   └── Toppers.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## ⚙️ Setup & Installation

Follow these steps to get the project running on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
*(If applicable, clone your git repository containing these files)*

### 2. Install Dependencies
Open your terminal in the root of the project (`frontend battle`) and run:
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
The server will start, usually on `http://localhost:5173`. Open this URL in your browser to view the app.

## 🎨 Custom Hooks Usage

### `useScrollReveal`
Automatically handles reveal animations for elements as they enter the viewport.
Usage: Add `reveal`, `reveal-left`, `reveal-right`, `reveal-scale`, or `stagger-children reveal` classes to elements.

### `useParallax`
Creates a subtle scroll-based depth effect on images.
Usage:
```jsx
const parallaxRef = useParallax(0.3); // Pass speed multiplier
<img ref={parallaxRef} src="..." className="parallax-bg" />
```

### `useTypingEffect`
Generates a typewriter animation across a given array of strings.
Usage:
```jsx
const text = useTypingEffect(['String 1', 'String 2']);
```

## 📸 Media Assets

Image placeholders and default assets are stored in the `/public/images` folder and can be replaced with real assets while maintaining the original filenames. User avatars utilize the [Dicebear API](https://www.dicebear.com/).
