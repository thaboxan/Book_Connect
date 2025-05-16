# 📚 Book Connect

Book Connect is a web application that brings literary adventures to your fingertips. Browse, explore, and discover your next great read from a vast, vibrant collection. Whether you're a fan of thrilling mysteries, epic fantasies, or heartwarming romances, Book Connect brings the magic of books directly to you!

---

## ✨ Features

- **Extensive Book Collection:** Access a diverse library spanning multiple genres.
- **Advanced Filtering:** Find books by genre, author, or title.
- **Theme Switching:** Toggle between light and dark mode for comfortable reading.
- **Responsive Design:** Enjoy a seamless experience across all devices.
- **Book Previews:** Get a quick glimpse of each book before diving deeper.

---

## 🛠️ Technical Implementation

### Web Components for Encapsulation

The application utilizes custom Web Components for a modular, reusable codebase:
- `BookPreview`: Displays individual book information.
- `FilterDropdown`: Handles genre and author filtering.
- `ThemeSwitcher`: Manages theme preferences.
- `ShowMoreButton`: Controls pagination functionality.

Each component encapsulates its structure, style, and behavior, creating a clear separation of concerns that improves maintainability.

### Abstraction for Maintainability

- **Modular Functions:** Functions like `createBookPreviews` are designed to perform specific tasks, making them easy to understand and test. This abstraction allows for code reuse across different parts of the application.
- **Shadow DOM for Scoped Styles:** The application leverages Shadow DOM in Web Components (`this.attachShadow({ mode: 'open' })`) to scope styles to specific components. This prevents styles from leaking or being affected by global styles, ensuring consistent styling and reducing CSS management complexity.

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (v14+) for development

### Installation

```bash
git clone https://github.com/thaboxan/Book_Connect.git
cd Book_Connect
npm install
npm start ```

The app will run at http://localhost:3000 by default.
