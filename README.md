<h1 align="center" id="header">
  Next.js Boilerplate
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Shadcn/UI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn/UI">
  <img src="https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
</p>

<p align="center">
  Production-ready Next.js boilerplate with internationalization, theming, Docker support, and best practices built-in.
</p>

---

<h2 id="stack">
  Tech Stack
</h2>

<p>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" width="48" title="HTML5"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TailwindCSS-Dark.svg" width="48" title="TailwindCSS">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/React-Dark.svg" width="48" title="React.js"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" width="48" title="TypeScript">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NextJS-Dark.svg" width="48" title="Next.js"> 
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Vercel-Dark.svg" width="48" title="Vercel">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Docker.svg" width="48" title="Docker">
</p>

### Core Technologies

- **TypeScript** - Type-safe development
- **React 19** - Latest React features
- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **Bun** - Fast JavaScript runtime & package manager
- **Docker** - Optional containerized deployment

### Features & Integrations

- **Shadcn UI** - Beautiful and accessible component library
- **Dark Mode** - Theme switching with Next Themes
- **i18n** - Multi-language support via Next Intl
- **Zod** - TypeScript-first schema validation
- **React Hook Form** - Performant form validation
- **Class Variance Authority** - Component variant management
- **Vercel Analytics** - Performance monitoring
- **Vercel Speed Insights** - Real-time performance metrics
- **Biome** - Fast formatter and linter (ESLint & Prettier alternative)

---

<h2 id="features">
  Key Features
</h2>

**Production-Ready** - Optimized configuration for deployment  
**Internationalization** - Built-in multi-language support  
**Theme Support** - Light/Dark mode with easy customization  
**Component Library** - Pre-configured Shadcn UI components  
**Docker Support** - Dockerfile for testing and deployment local
**Fast Development** - Bun for lightning-fast package management  
**Type Safety** - Full TypeScript configuration  
**Testing Ready** - Bun test runner configured  
**Analytics** - Vercel Analytics & Speed Insights integrated  
**Developer Experience** - Biome for formatting and linting

---

<h2 id="prerequisites">
  Prerequisites
</h2>

Before starting, ensure you have the following installed:

- [Bun](https://bun.sh/docs) (v1 or higher) – primary runtime & package manager
- [Docker](https://www.docker.com/) – optional, for local containerized development (Development and Testing)
- [Git](https://git-scm.com/)

> Optional: [Node.js](https://nodejs.org/) (v22 or higher), if you prefer running the app with Node.

---

<h2 id="installation">
  Installation & Setup
</h2>

### Quick Start

**Using Bun (Recommended):**

```bash
bunx create-next-app my-app --example https://github.com/Victor-Zarzar/nextjs-boilerplate
```

**Using npm:**

```bash
npx create-next-app my-app --example https://github.com/Victor-Zarzar/nextjs-boilerplate
```

> **Important:** If using npm, you'll need to update the `package.json` scripts after installation:
>
> ```json
> {
>   "scripts": {
>     "test": "npm test",
>     "test:watch": "npm test --watch",
>     "test:update": "npm test --update-snapshots",
>     "prod": "npm run build && npm run start"
>   }
> }
> ```

### 1. Clone or Use as Template

```bash
git clone https://github.com/Victor-Zarzar/nextjs-boilerplate
cd nextjs-boilerplate
```

### 2. Install Dependencies

```bash
make install
```

Or manually with bun:

```bash
bun install
```

### 3. Environment Configuration (Optional)

If your project requires environment variables, create a `.env` file:

```bash
cp .env.example .env
```

Then edit `.env` with your configuration.

### 4. Start Development Server

```bash
make dev
```

Or manually:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`

---

<h2 id="usage">
  Usage
</h2>

### Available Commands

View all available Make commands:

```bash
make help
```

### Local Development

Start the development server:

```bash
make dev
```

### Production Build (Local Test)

Build and run in production mode locally:

```bash
make prod
```

### Running Tests

Execute the test suite:

```bash
make test
```

Or with Bun:

```bash
bun test
bun test --watch          # Watch mode
bun test --update         # Update snapshots
```

### Code Quality

Check code quality with Biome:

```bash
bun run lint              # Check for issues
bun run format            # Format code
```

### Docker Deployment

#### Build and Run

Build the Docker image and start the container:

```bash
make run
```

#### Stop Container

```bash
make stop
```

#### View Logs

```bash
make logs
```

#### Access Container Shell

```bash
make shell
```

#### Clean Environment

Remove containers, images, and build artifacts:

```bash
make clean
```

---

<h2 id="makefile-commands">
  Makefile Commands Reference
</h2>

| Command        | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `make install` | Install dependencies using bun                                              |
| `make dev`     | Run the app locally in development mode                                     |
| `make prod`    | Run the app in production mode (Mode Build Prod - Test local - Preview)     |
| `make build`   | Build the Docker image                                                      |
| `make run`     | Build and run the Docker container (Docker Run + Build - Development local) |
| `make test`    | Run the automated tests (Isolated Docker container)                         |
| `make stop`    | Stop and remove the container                                               |
| `make clean`   | Remove image and clean environment                                          |
| `make logs`    | Show container logs in real-time                                            |
| `make shell`   | Access container shell                                                      |
| `make help`    | Display all available commands                                              |

---

<h2 id="project-structure">
  Project Structure
</h2>

```
nextjs-boilerplate/
├── .github/                        # GitHub configuration
│   ├── workflows/                  # GitHub Actions workflows
│   │   ├── main.yaml               # CI/CD pipeline
│   │   └── codeql-analysis.yaml    # Code security analysis
│   └── dependabot.yml              # Dependency updates configuration
├── app/                            # Next.js App Router
│   ├── [locale]/                   # Internationalization routes
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page
├── components/                     # React components
│   ├── ui/                         # Shadcn UI components
│   └── ...                         # Custom components
├── lib/                            # Utility functions and helpers
├── public/                         # Static assets
├── tests/                          # Test files
├── .env.example                    # Environment variables template
├── Dockerfile                      # Docker configuration
├── Makefile                        # Build automation commands
├── next.config.js                  # Next.js configuration
├── package.json                    # Project dependencies
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── biome.json                      # Biome configuration
```

---

<h2 id="customization">
  Customization
</h2>

### Adding Components

This boilerplate uses Shadcn UI. Add new components with:

```bash
bunx shadcn add button
bunx shadcn add card
bunx shadcn add dialog
```

### Configuring Internationalization

Edit the i18n configuration in your Next.js config and create locale files for your supported languages.

### Theme Customization

Modify `tailwind.config.ts` to customize your color palette, fonts, and other design tokens.

### Environment Variables

Add your environment variables to `.env` file. Use the `@t3-oss/env-nextjs` package for type-safe environment variable validation.

---

<h2 id="deployment">
  Deployment
</h2>

### Vercel (Recommended)

The easiest way to deploy your Next.js app is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

---

<h2 id="testing">
  Testing
</h2>

This boilerplate uses Bun's built-in test runner with React Testing Library:

```bash
# Run all tests
bun test

# Watch mode
bun test --watch

# Update snapshots
bun test --update-snapshots
```

Add your tests in the `tests/` directory or colocate them with your components.

---

<h2 id="contributing">
  Contributing
</h2>

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<h2 id="license">
  License
</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h2 id="acknowledgments">
  Acknowledgments
</h2>

- [Next.js](https://nextjs.org/) - The React Framework
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Bun](https://bun.sh/) - JavaScript runtime
- [Vercel](https://vercel.com/) - Deployment platform

---
