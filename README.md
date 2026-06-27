# Science For Tomorrow

A modern, professional website dedicated to inspiring scientific curiosity and connecting people with leading research organizations worldwide.

**Founded by:** Ved Saparia

## Features

✨ **Modern Design**
- NASA/Apple/SpaceX aesthetic
- Dark theme with cyan accents
- Glassmorphism UI elements
- Smooth animations with Framer Motion
- Fully responsive design

🚀 **Technology Stack**
- Next.js 14+ (React framework)
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide Icons for beautiful icons

📱 **Pages**
- Home - Hero section with featured content
- About - Mission, vision, and core values
- Discover - Explore scientific fields
- Organizations - Featured research institutions
- Research - Research areas overview
- Resources - Educational content
- News - Latest scientific discoveries
- FAQ - Common questions answered
- Contact - Get in touch

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── discover/       # Discover page
│   ├── organizations/  # Organizations page
│   ├── research/       # Research areas page
│   ├── resources/      # Resources page
│   ├── news/           # News page
│   ├── faq/            # FAQ page
│   └── contact/        # Contact page
├── components/         # Reusable React components
│   ├── Navigation.tsx  # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── HeroSection.tsx # Hero section component
│   ├── Card.tsx        # Reusable card component
│   └── AnimatedCounter.tsx # Counter component
├── styles/             # Global styles
│   └── globals.css    # Global CSS
└── utils/              # Utility functions
```

## Color Palette

- **Primary:** Deep Navy (#0a0e27)
- **Accent:** Bright Cyan (#22d3ee)
- **Background:** Space Gradient
- **Secondary:** White

## Customization

All colors, fonts, and animations can be customized in:
- `tailwind.config.ts` - Theme configuration
- `src/styles/globals.css` - Global styles
- Component files - Individual animations and styling

## Performance

- ⚡ Optimized images
- 🚀 Static generation for pages
- 📦 Code splitting
- 🎯 SEO optimized
- ♿ Accessibility compliant

## License

Copyright © 2026 Science For Tomorrow. All rights reserved.

## Support

For questions or feedback, please contact us at contact@sciencefortomorrow.com
