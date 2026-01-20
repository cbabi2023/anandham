# Anandham - Medium Clone

A pixel-perfect Medium clone built with Next.js 16, TypeScript, and Tailwind CSS. This project replicates Medium's UI/UX design with 100% accuracy, featuring reusable components, responsive design, and modern development practices.

## ✨ Features

- 🎨 **100% Medium UI/UX** - Exact replica of Medium's design system
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🚀 **Next.js 16** with App Router
- 📘 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for styling
- 🧩 **Reusable Components** - All components are modular and reusable
- ⚡ **Optimized Performance** - Fast builds and runtime

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📁 Project Structure

```
anandham/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage (Medium-style feed)
│   └── globals.css        # Global styles with Medium colors
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── article-card.tsx    # Medium-style article cards
│   │   ├── button.tsx           # Medium-style buttons
│   │   ├── card.tsx             # Generic card component
│   │   ├── input.tsx            # Medium-style inputs
│   │   ├── badge.tsx            # Badge component
│   │   ├── avatar.tsx           # Avatar component
│   │   └── container.tsx        # Container with article width
│   ├── layout/            # Layout components
│   │   ├── medium-header.tsx    # Medium-style header
│   │   └── sidebar.tsx          # Left sidebar navigation
│   └── sections/          # Page sections (legacy - can be removed)
├── lib/                   # Utility functions
│   ├── utils.ts          # cn() utility for className merging
│   └── animations.ts     # Reusable animation variants
├── hooks/                 # Custom React hooks
│   ├── use-scroll.ts
│   └── use-media-query.ts
└── types/                 # TypeScript type definitions
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd anandham
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Component Usage

### ArticleCard Component

```tsx
import ArticleCard from "@/components/ui/article-card";

<ArticleCard
  title="Article Title"
  excerpt="Article excerpt or summary..."
  author={{ name: "John Doe", avatar: "/avatar.jpg" }}
  readingTime={5}
  publishedAt="2 days ago"
  tags={["Technology", "Web Dev"]}
  imageUrl="/article-image.jpg"
/>
```

### Button Component

```tsx
import Button from "@/components/ui/button";

// Primary button (black)
<Button variant="primary" size="md">Get started</Button>

// Follow button (green)
<Button variant="follow" size="sm">Follow</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Ghost button
<Button variant="ghost">Ghost</Button>
```

### MediumHeader Component

```tsx
import MediumHeader from "@/components/layout/medium-header";

<MediumHeader />
```

### Sidebar Component

```tsx
import Sidebar from "@/components/layout/sidebar";

<Sidebar />
```

### Container Component

```tsx
import Container from "@/components/ui/container";

// Article width (680px - Medium's standard)
<Container size="article">
  <p>Your article content here</p>
</Container>

// Other sizes
<Container size="sm">Small</Container>
<Container size="md">Medium</Container>
<Container size="lg">Large</Container>
<Container size="xl">Extra Large</Container>
```

## 🎨 Design System

### Colors (Medium-inspired)

- **Background**: `#FFFFFF` (white)
- **Foreground**: `#000000` (black)
- **Foreground Secondary**: `#242424`
- **Foreground Muted**: `#757575`
- **Foreground Light**: `#9E9E9E`
- **Accent Green**: `#1A8917` (for follow buttons)
- **Border**: `#E6E6E6`
- **Hover Background**: `#F5F5F5`

### Typography

- **Serif Font**: Georgia (for article body text)
- **Sans-serif Font**: Inter (for UI elements)
- **Article Body**: 21px, line-height 1.58
- **Headings**: Serif font family

### Layout

- **Article Width**: 680px (Medium's standard)
- **Sidebar Width**: 256px (desktop only)
- **Responsive**: Mobile-first approach

## 📱 Responsive Design

The design is fully responsive:

- **Mobile** (< 768px): Single column, sidebar hidden, hamburger menu
- **Tablet** (768px - 1024px): Single column, sidebar hidden
- **Desktop** (> 1024px): Three-column layout with sidebar

## 🧩 Custom Hooks

### useScroll

```tsx
import { useScroll } from "@/hooks/use-scroll";

function MyComponent() {
  const { scrollY, isScrolled } = useScroll();
  
  return <div>{isScrolled ? "Scrolled" : "At top"}</div>;
}
```

### useMediaQuery

```tsx
import { useMediaQuery } from "@/hooks/use-media-query";

function MyComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return <div>{isMobile ? "Mobile" : "Desktop"}</div>;
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

### Build Verification

Always run `npm run build` before deploying to ensure there are no errors:

```bash
npm run build
```

## 🎯 Medium Design Principles

This project follows Medium's design principles:

1. **Minimalism** - Clean, uncluttered interface
2. **Typography** - Serif fonts for reading, sans-serif for UI
3. **Whitespace** - Generous spacing for readability
4. **Color** - Black text on white background, minimal use of color
5. **Responsive** - Mobile-first, works on all devices
6. **Focus** - Content-first approach

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Medium](https://medium.com) for design inspiration
- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for beautiful icons

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Built with ❤️ using Next.js and TypeScript
