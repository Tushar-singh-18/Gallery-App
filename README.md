# 📸 Image Gallery App

A responsive image gallery built with React that fetches photos from the Picsum Photos API with pagination support.

## 🚀 Features

- Fetches random images from [Picsum Photos API](https://picsum.photos/)
- Displays image author names
- Pagination (Next / Prev buttons)
- Loading state while data is being fetched
- Fully responsive layout

## 🛠️ Tech Stack

- **React** — UI library
- **Axios** — API calls
- **Tailwind CSS** — Styling
- **Vite** — Build tool

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/image-gallery.git

# Go to project folder
cd image-gallery

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## 🔗 API Used

```
https://picsum.photos/v2/list?page=1&limit=30
```

## 📁 Project Structure

```
src/
├── components/
│   └── Card.jsx
├── App.jsx
└── main.jsx
```

## 🧠 Concepts Used

- `useState` — store and update data
- `useEffect` — fetch data on page load / page change
- `axios` — make API requests
- `.map()` — render list of cards
- Tailwind CSS utility classes

## 📸 Preview

> Click Next / Prev to browse through different pages of images.

## 👤 Author

**Tushar**  
[GitHub](https://github.com/your-username)
