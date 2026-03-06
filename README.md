<h1 align="center" id="header">
  Fernanda - Portfolio (NextJS)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

<p align="center">
  Personal portfolio built with Next.js 16, featuring internationalization, dark mode, contact form with email integration and Slack notifications.
</p>

---

<h2 id="stack">Tech Stack</h2>

<p>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/HTML.svg" width="48" title="HTML5">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TailwindCSS-Dark.svg" width="48" title="TailwindCSS">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/React-Dark.svg" width="48" title="React.js">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" width="48" title="TypeScript">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NextJS-Dark.svg" width="48" title="Next.js">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Vercel-Dark.svg" width="48" title="Vercel">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Docker.svg" width="48" title="Docker">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Sentry.svg" width="48" title="Sentry">
</p>

### Core Technologies

- **TypeScript** - Type-safe development throughout the project
- **React 19** - Latest React features and improvements
- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **Docker** - Optional containerized deployment

### Features & Integrations

- **i18n** - Multi-language support (EN / PT-BR / ES) via Next Intl
- **Dark Mode** - Theme switching with Next Themes
- **Zod & React Hook Form** - Robust form validation and management
- **Shadcn UI** - Accessible and customizable UI components
- **Nodemailer** - Contact form with email integration
- **WebHook Slack** - Real-time Slack notifications on form submissions
- **Sanitize HTML** - XSS protection for user-submitted content
- **Rate Limiter Flexible** - API rate limiting and DDoS protection
- **Vercel Analytics** - Usage and performance monitoring
- **Vercel Speed Insights** - Real-time performance metrics
- **Sentry** - Error tracking and monitoring
- **Motion** - Smooth animations and transitions

---

<h2 id="prerequisites">Prerequisites</h2>

Before getting started, make sure you have the following installed:

- [Bun](https://bun.sh/docs) (v1 or higher) – primary runtime & package manager
- [Docker](https://www.docker.com/) – optional, for containerized development and testing
- [Git](https://git-scm.com/)

> Optional: [Node.js](https://nodejs.org/) (v22 or higher), if you prefer using Node-based tooling.

---

<h2 id="installation">Installation & Setup</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/fernandarochaart/fernandarocha-portfolio
cd fernandarocha-portfolio
```

### 2. Environment Configuration

Copy the environment template and fill in your credentials:

```bash
cp .env-example .env
```

Edit the `.env` file with your actual values. The `.env-example` contains comments explaining each variable and how to obtain the required credentials.

**Key configurations:**

- **SMTP**: Gmail account and [App Password](https://support.google.com/accounts/answer/185833)
- **Sentry**: DSN and auth token from your [Sentry project](https://sentry.io/)
- **Slack Webhook**: Incoming webhook URL from your Slack workspace
- **Website URL**: Your production domain or `http://localhost:3000` for local development

> **Important:** Never commit your `.env` file to version control. It is already covered by `.gitignore`.

### 3. Install Dependencies & Start

```bash
make install && make dev
```

Or manually with bun:

```bash
bun install && bun run dev
```

Optional: Docker + Build:

```bash
make run
```

### 4. Run Tests (Isolated Docker Container)

```bash
make test
```

Or manually:

```bash
bun test
```

### 5. Code Quality

Run the linter before submitting changes:

```bash
bun lint
```

To automatically fix formatting issues:

```bash
bun format
```

---

<h2 id="usage">Usage</h2>

### Available Commands

```bash
make help
```

### Local Development

Start the development server at port 3000:

```bash
make dev
```

Access the app at `http://localhost:3000`

### Docker Deployment

#### Build and Run

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

Or directly with Docker:

```bash
docker logs -f fernanda-portfolio
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

<h2 id="makefile-commands">Makefile Commands Reference</h2>

| Command        | Description                                              |
| -------------- | -------------------------------------------------------- |
| `make install` | Install dependencies using bun                           |
| `make dev`     | Start the app in development mode                        |
| `make prod`    | Build and run the app in production mode (local preview) |
| `make build`   | Build the Docker image                                   |
| `make run`     | Build and start the Docker container (development local) |
| `make test`    | Run automated tests inside an isolated Docker container  |
| `make stop`    | Stop and remove the running container                    |
| `make clean`   | Remove Docker image and clean build files                |
| `make logs`    | Stream container logs in real-time                       |
| `make shell`   | Open a shell session inside the container                |
| `make help`    | Show all available commands                              |

---

<h2 id="project-structure">Project Structure</h2>

```
fernanda-portfolio/
├── app/                    # Next.js App Router
├── components/             # Reusable React components
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
├── styles/                 # Global styles
├── tests/                  # Automated tests
├── .env-example            # Environment variables template
├── .env                    # Environment variables (not in git)
├── Dockerfile              # Docker configuration
├── Makefile                # Build and task automation
├── next.config.js          # Next.js configuration
├── bun.lock                # Bun package lock file
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

<h2 id="deployment">Deployment</h2>

### Vercel (Recommended)

This project is optimized for deployment on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/fernanda-portfolio)

> Don't forget to add all environment variables from `.env-example` to your Vercel project settings before deploying.

---

<h2 id="contributing">Contributing</h2>

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

<h2 id="license">License</h2>

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

<h2 id="contact">Contact</h2>

Fernanda – [@your-github](https://github.com/fernandarochaart)

Project Link: [https://github.com/fernandarochaart/fernandarocha-portfolio](https://github.com/fernandarochaart/fernandarocha-portfolio)

---
