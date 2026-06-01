# Portfolio Once

Personal portfolio of Zulfan Nurrahman (Jule) - Full Stack & Front-End Web Developer.

## Features

- Modern, clean design with Once UI Core foundation
- Responsive across all devices
- SEO optimized with metadata and Open Graph tags
- Accessible with proper ARIA labels and semantic HTML
- Static export for easy deployment to cPanel or any hosting

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI Foundation:** Once UI Core
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/juleskuy/portfolio-once.git

# Navigate to the project
cd portfolio-once

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

This will create an `out` directory with static files ready for deployment.

## Project Structure

```
portfolio-once/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── ui/                 # UI primitives
│   ├── layout/             # Layout components (Header, Footer)
│   └── sections/           # Portfolio sections (Hero, About, etc.)
├── data/                   # Content data files
│   ├── profile.ts          # Personal profile information
│   ├── experience.ts       # Work experience entries
│   ├── projects.ts         # Project showcase
│   ├── skills.ts           # Skills and technologies
│   ├── social-links.ts     # Social media links
│   └── site-metadata.ts    # SEO and site metadata
├── lib/                    # Utility functions
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## Content Management

All portfolio content is stored in the `data/` directory as typed TypeScript files. To update your portfolio:

1. Edit the relevant file in `data/`
2. Follow the TypeScript interfaces defined in `types/`
3. Changes will be reflected on build

## Deployment

### Static Export (Recommended for cPanel)

1. Run `npm run build`
2. Upload the `out/` directory to your web server
3. Configure your server to serve the static files

### Vercel

```bash
npx vercel
```

### Netlify

Drag and drop the `out/` directory to Netlify dashboard.

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette.

### Content

Update the files in `data/` directory to modify portfolio content.

### Components

All components are in `components/` directory and can be customized as needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.