# Project Development Instructions

This is a Next.js project with TypeScript, Tailwind CSS, and ESLint.

## Getting Started

### Development Server
To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production
To create an optimized production build:
```bash
npm run build
npm start
```

### Linting
To check for code quality issues:
```bash
npm run lint
```

## Project Structure

- `src/` - Source code directory
  - `app/` - Next.js App Router pages and layouts
  - `components/` - Reusable React components
- `public/` - Static assets
- `node_modules/` - Dependencies (auto-generated)

## Technologies Used

- **Next.js 16+** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Development Guidelines

- Use TypeScript for type safety
- Follow ESLint rules configured in `eslint.config.mjs`
- Use Tailwind CSS utility classes for styling
- Place reusable components in the `src/components/` directory
