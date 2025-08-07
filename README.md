# 10C4I Foxtrot Megasite

A comprehensive digital hub for 10C4I Foxtrot company, serving as the central command center for all digital resources, tools, and company information.

## Features

- **Digital Command Center**: Centralized access to all company digital resources
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper ARIA labels and semantic markup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel-ready

## Digital Resources Included

- **Company Resources**: Internal documents, policies, and organizational information
- **Digital Tools**: Productivity, collaboration, and project management tools
- **Communication Hub**: Team collaboration and information sharing platform
- **Data Analytics**: Business intelligence and performance monitoring tools
- **Security Portal**: Secure access to sensitive company information

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   └── ServiceCard.tsx     # Service card component
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd synapse-softworks-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#1a1a1a',      // Background
  secondary: '#2d2d2d',    // Secondary background
  accent: '#4a90e2',       // Primary accent
  text: '#ffffff',         // Primary text
  'text-secondary': '#cccccc', // Secondary text
}
```

### Content
Update the content in:
- `app/page.tsx` - Home page content
- `app/contact/page.tsx` - Contact page content
- `components/Header.tsx` - Navigation links
- `components/Footer.tsx` - Footer content

## About 10C4I Foxtrot

10C4I Foxtrot is a leading digital innovation company specializing in comprehensive technology solutions and digital ecosystem management. This megasite serves as the central hub for all our digital resources and tools.

## License

This project is proprietary to 10C4I Foxtrot. All rights reserved.
