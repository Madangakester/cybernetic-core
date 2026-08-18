# Cybernetic Core

Act as a principal frontend engineer and creative technologist. Build a ultra-modern, high-tech, developer portfolio website using HTML, CSS (or Tailwind CSS), and vanilla JavaScript. 

### Core Tech Aesthetic & Design System
- Aesthetic: Cyberpunk-lite / Vercel-inspired dark mode UI. Dark obsidian background (`#0b0f19`), neon cyan/indigo accents (`#38bdf8` / `#6366f1`), glowing border utilities, grid/dot matrix canvas background, and glassmorphism panel cards.
- Typography: Clean sans-serif primary font paired with a monospace font (`Fira Code`, `JetBrains Mono`, or `Consolas`) for code blocks, tech tags, metrics, and terminal elements.
- Interactive Features:
  * Hero Section: Interactive terminal emulator with typing animation for commands like `whoami`, `cat skills.json`, `git log --oneline`, and `contact --direct`.
  * Command Palette (Kbar style): Triggerable via a button or "Ctrl + K" keyboard shortcut to quick-navigate sections or launch social links.
  * Live Terminal/CLI Output Panel: Displays status indicators (e.g., `Location: Nairobi, KE` | `Status: Open to Opportunities` | `Latency: 24ms`).
  * Dynamic Tech Stack Filters: Interactive filter buttons to filter experience items and skills by category (Backend, Cloud/DevOps, IT Support, Automation).
  * Project / Code Spotlight Box: Interactive syntax-highlighted code block showcasing a sample .NET C# / Azure DevOps workflow snippet.

### Data & Content Specifications

1. Navigation Bar:
   - Left: Dynamic logo `[Kester.dev]` with a pulse status dot (`Online`).
   - Center: Quick Links (`~/about`, `~/experience`, `~/stack`, `~/education`, `~/contact`).
   - Right: Quick Access Links / Buttons:
     * GitHub: https://github.com
     * LinkedIn: https://www.linkedin.com/in/kester-madanga-87225338a
     * Email: madangakester@gmail.com
     * Resume Download Button

2. Hero Section:
   - Left Column: 
     * Title: "Kester Madanga"
     * Terminal Tag: `> Software Engineer & IT Support Specialist`
     * Subtext: "Building resilient .NET backends, automating cloud deployment pipelines, and optimizing system architectures."
     * Action Buttons: `[Execute Contact]` (scrolls to contact form) & `[Explore Stack]`.
   - Right Column: 
     * Interactive Terminal Box with live typing effects showcasing bio stats, current tech stack, and location.

3. Experience Section (System Log / Commit Timeline Layout):
   - Role 1: Junior Software Engineer (Progressed from Apprentice) | JP Innovate (London, UK - Remote) [Jun 2025 – Jan 2026]
     * Accomplishments: Engineered application reliability & performance features; authored unit/API test suites; maintained monitoring & observability dashboards; managed CI/CD build pipelines using Azure DevOps; utilized AI-assisted tooling for debugging & documentation in Agile Scrum environments.
     * Tech Badges: `C#`, `.NET 10`, `SQL Server`, `PostgreSQL`, `Azure DevOps`, `Azure Service Bus`, `Grafana`, `xUnit`, `Git`, `GitHub`, `Jira`.
   - Role 2: ICT Attachment & Lab Support Assistant | Harvard Institute of Technical Studies (Thika, Kenya) [Jan 2026 – Apr 2026]
     * Accomplishments: Instructed units in DBMS, OOP, OS, and software packages; provisioned, secured, and maintained lab network infrastructure, servers, and computer hardware; managed asset inventory and system administration.
     * Tech Badges: `Windows Admin`, `Networking`, `Hardware Diagnostics`, `DBMS`, `System Maintenance`.
   - Role 3: Financial Agent | Finn Kenya (Thika, Kenya) [Apr 2026 – Jul 2026]
     * Accomplishments: Client acquisition, financial advisory, CRM application record management, and negotiation outreach.
     * Tech Badges: `CRM`, `Financial Advisory`, `Data Analytics`, `Client Acquisition`.

4. Technical Stack & Capabilities (Interactive Grid & Telemetry Cards):
   - Group 1: Backend & Engineering (`C#`, `.NET 10`, `RESTful APIs`, `Asynchronous Programming`, `DDD`, `TDD`, `HTML5/CSS3`)
   - Group 2: Cloud, DevOps & Databases (`Azure DevOps`, `Azure Service Bus`, `Azure CosmosDB`, `SQL Server`, `PostgreSQL`, `Redis`, `CI/CD`)
   - Group 3: IT & Systems Administration (`Windows Administration`, `Computer Networking`, `Hardware Troubleshooting`, `Software Deployment`)
   - Group 4: AI & Data Operations (`AI-Assisted Tools`, `Prompt Engineering`, `Workflow Automation`, `Advanced Excel / Data Analysis`)

5. Education & Certifications Section:
   - Degree: BSc. Business Information Technology (Major: Software Development) | Mount Kenya University, Kenya (2023 – 2026)

6. Contact & Telemetry Panel:
   - Left side: System Status Card (Email: madangakester@gmail.com | Phone: +254 705 928 104 | Location: Nairobi, Kenya | Timezone: EAT / UTC+3).
   - Right side: Interactive terminal-style contact form (Inputs: Name, Email, Subject, Message, Send Command).

Generate a complete, fully responsive single-page web app with interactive JavaScript (terminal simulator, command palette modal, smooth scroll, hover glows) and raw CSS / Tailwind CSS code.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2a18c06e-b9b1-47d9-912b-ef4b8a4c56c7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
