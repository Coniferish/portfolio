// ABOUTME: [Home page for portfolio with sections: About, Skills, Projects, Contact]
// ABOUTME: [Educational structure-only edit; placeholder content for iterative learning]

export default function Home() {
  return (
    <main className="font-sans min-h-screen px-6 py-12 sm:px-8 sm:py-16 max-w-4xl mx-auto">
      <section id="about" className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">John Jennings</h1>
        <p className="text-xl text-foreground/80 mb-4">Software Engineer</p>
        <p className="text-base leading-7 text-foreground/90 mb-6">
          I&apos;m a Software Engineer with expertise in Python, TypeScript, and React, specializing in building scalable ETL systems and web applications. 
          I&apos;ve worked at Unstructured.io, a Series B startup solving ETL for LLMs, where I implemented role-based access control features and 
          contributed to their open-source library used by thousands of developers.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:JohnJennings702@gmail.com" className="flex items-center gap-2 hover:underline underline-offset-4">
            <span>📧</span> JohnJennings702@gmail.com
          </a>
          <a href="https://github.com/coniferish" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
            <span>🐙</span> GitHub
          </a>
          <a href="https://linkedin.com/in/john--jennings" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </section>

      <section id="skills" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3 text-foreground/90">Backend & Data</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>Python, Pytest, Pydantic, FastAPI</li>
              <li>Pandas, Jupyter Notebook</li>
              <li>SQL, Docker, Git</li>
              <li>Azure Cloud Infrastructure</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-foreground/90">Frontend & Web</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>TypeScript, React, Node.js</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Next.js, Remix</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-foreground/90">Tools & Platforms</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>VSCode, Postman, Jira</li>
              <li>FHIR, RedCap</li>
              <li>HoloLens, Jetson IoT</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-foreground/90">Testing & Quality</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>Unit & Integration Testing</li>
              <li>Code Refactoring</li>
              <li>API Development</li>
              <li>Multi-threading & Performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Experience & Projects</h2>
        <div className="space-y-6">
          <article className="rounded-lg border border-foreground/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="font-semibold text-lg">Software Engineer - Unstructured.io</h3>
              <span className="text-sm text-foreground/70">Jun 2023 - Apr 2025 | Remote</span>
            </div>
            <p className="text-sm text-foreground/80 mb-4">
              Series B startup solving ETL for LLMs. #24 in Fast Company&apos;s 50 most innovative companies, #1 in Data Science.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>Implemented RBAC features using TypeScript, React, and Remix for ETL webapp platform</li>
              <li>Built multi-tenant RBAC microservice optimized for 99.999% uptime, scaling for ~10k daily users</li>
              <li>Enhanced open-source `unstructured` package with new file type support and language detection</li>
              <li>Owned maintenance of `unstructured-langchain` package with external contributor support</li>
            </ul>
          </article>

          <article className="rounded-lg border border-foreground/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="font-semibold text-lg">Software Developer - TekSystems</h3>
              <span className="text-sm text-foreground/70">Oct 2021 - Dec 2022 | Remote/Atlanta</span>
            </div>
            <p className="text-sm text-foreground/80 mb-4">
              Healthcare software development using FHIR and RedCap standards.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>Developed Java software for secure healthcare record communication between clinical partners</li>
              <li>Built analytics dashboard web applications using JavaScript and React</li>
            </ul>
          </article>

          <article className="rounded-lg border border-foreground/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="font-semibold text-lg">Python Developer - Arborian Consulting</h3>
              <span className="text-sm text-foreground/70">Mar 2020 - Jun 2021 | Remote/Atlanta</span>
            </div>
            <p className="text-sm text-foreground/80 mb-4">
              Web scraping and API development for data collection and developer challenges.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
              <li>Built multi-threading web scrapers using bs4, selenium, and pandas</li>
              <li>Created REST APIs using Flask and Postman for developer challenges</li>
              <li>Developed comprehensive testing suite with Pytest and unittest</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Get In Touch</h2>
        <p className="text-base leading-7 text-foreground/90 mb-4">
          I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:JohnJennings702@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors">
            <span>📧</span> Send Email
          </a>
          <a href="https://github.com/coniferish" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors">
            <span>🐙</span> View GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
