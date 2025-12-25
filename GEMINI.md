# Mobile App Landing Page Context

## Project Overview
This project is a modern, responsive landing page template designed for mobile applications. It is built to be easily customizable and optimized for performance and SEO. The architecture leverages **Astro** for static site generation, **React** for interactive components, and **Tailwind CSS** for styling.

## Key Technologies
*   **Framework:** Astro (Static Site Generator)
*   **UI Library:** React
*   **Styling:** Tailwind CSS, Framer Motion (animations)
*   **Language:** TypeScript
*   **Icons:** react-icons

## Development Workflow

### Prerequisites
*   Node.js 20+
*   npm, yarn, or pnpm

### Key Commands
*   **Install Dependencies:** `npm install`
*   **Start Development Server:** `npm run dev` (Runs at `http://localhost:4321`)
*   **Build for Production:** `npm run build`
*   **Preview Production Build:** `npm run preview`

## Project Structure & Configuration

The project is designed for easy configuration through specific files in `src/config/`.

### Configuration Files
*   **`src/config/site.ts`**: General site settings (name, description, keywords, store links).
*   **`src/config/features.ts`**: List of app features displayed on the landing page.
*   **`src/config/screenshots.ts`**: Configuration for iPhone and iPad screenshot carousels.
*   **`src/config/reviews.ts`**: User testimonials and ratings.
*   **`src/config/faqs.ts`**: Frequently Asked Questions content.
*   **`src/config/socialLinks.ts`**: Social media profiles and icons.

### Content & Assets
*   **Legal Pages:** Markdown files for Privacy Policy and Terms are located in `src/pages/content/` (`privacy.md`, `terms.md`).
*   **Images/Assets:**
    *   Screenshots: `public/assets/screenshots/` (organized by device: `iphone`, `ipad`).
    *   Favicons: `public/assets/`.

## Key Directories
*   `src/components/`: Astro and React components.
    *   `astro/`: Static sections (Hero, Features, FAQ, Footer).
    *   `react/`: Interactive elements (Lightbox, Reviews, ThemeToggle).
*   `src/layouts/`: Main page layouts (e.g., `Layout.astro`).
*   `src/pages/`: Route definitions (`index.astro`, `404.astro`, etc.).
*   `public/`: Static assets served directly.
