# 🧠 Micro-Quiz Platform (Next.js)

A modern quiz application built using **Next.js**, designed to serve short, topic-specific quizzes across various categories like Programming, Math, History, and Science.

This project was developed as part of a web development assignment to demonstrate key Next.js concepts such as **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, **Dynamic Routing**, **API Routes**, and **image optimization** with `next/image`.

---

## 🚀 Live Preview

> [Click here to see the live deployment](https://quick-quiz-galaxy.lovable.app)

---

## 🧩 Features

- 📂 **Home Page** (`/`)
  - Statically Generated (SSG) using `getStaticProps`
  - Lists quiz categories from an internal API route
  - SEO optimized with `<Head>` tags

- 📚 **Quiz Category Listing Page** (`/quizzes/[category]`)
  - Server-Side Rendered (SSR) using `getServerSideProps`
  - Displays all quizzes under the selected category
  - Dynamic SEO meta tags per category

- 📝 **Individual Quiz Page** (`/quiz/[id]`)
  - Server-side data fetching for quiz questions
  - One-question-at-a-time interface
  - Client-side state handling with `useState`
  - Instant feedback on answer selection
  - Final score displayed at completion

- 🛠 **API Routes** (`/api`)
  - `/api/categories`: returns quiz categories
  - `/api/quizzes/[category]`: quizzes by category
  - `/api/quiz/[id]`: quiz detail (questions + answers)

- 🖼️ **Image Optimization**
  - All category icons and logos are optimized using `next/image`

- 🎨 **Styling & Responsiveness**
  - Built using **Tailwind CSS** for a responsive and elegant UI across devices

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sreeramkasulu/Micro-Quiz-Platform.git
cd Micro-Quiz-Platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

> Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
/pages
  └── index.tsx                  // Home page (SSG)
  └── quizzes/[category].tsx     // Category listing (SSR)
  └── quiz/[id].tsx              // Individual quiz page (SSR)
  └── api/
       └── categories.ts
       └── quizzes/[category].ts
       └── quiz/[id].ts
/public
  └── images/
      └── category-icons.png
/styles
  └── globals.css
```

---

## ⚙️ Next.js Concepts Used

| Concept                 | Implementation                                                                 |
|------------------------|----------------------------------------------------------------------------------|
| Static Site Generation | `getStaticProps` in `/pages/index.tsx` for home page                            |
| Server-Side Rendering  | `getServerSideProps` in `/quizzes/[category]` and `/quiz/[id]`                  |
| API Routes             | Located in `/pages/api/` to serve category, quiz listing, and quiz detail data |
| Dynamic Routing        | Pages `/quizzes/[category]` and `/quiz/[id]`                                    |
| Image Optimization     | Using `next/image` component for optimized loading                              |

---

## 🧠 Design Decisions

- Tailwind CSS chosen for rapid, responsive, utility-first UI development
- Mock JSON data served via local API routes to simulate real backend
- Quiz rendered one question at a time to keep users engaged
- Minimalist and intuitive UX with clear navigation flow

---

## 🧪 Testing

- ✔ Manual functional testing done for:
  - Navigation between routes
  - Quiz flow (answering, scoring, feedback)
  - Data fetched properly from API routes
- ❌ Unit tests not included due to assignment scope/time

---

## 🤖 AI Tools Used

- **Cursor AI** was used for auto-generating boilerplate Next.js page files
- **GitHub Copilot** helped with generating UI and hook logic

---

## 💡 Challenges Faced

- Managing SSR with dynamic content and page metadata
- Combining both SSR and client-side state (especially on quiz pages)
- Ensuring `next/image` worked correctly with local/public assets

---

## 📌 Author

**Penke Sreeram Kasulu**  
_B.Tech CSE (AI & ML), Pragati Engineering College_  
🔗 GitHub: [@sreeramkasulu](https://github.com/sreeramkasulu)  
🌐 Deployment: [quick-quiz-galaxy.lovable.app](https://quick-quiz-galaxy.lovable.app)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
