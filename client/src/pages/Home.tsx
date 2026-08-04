import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Code2, Palette, Users, Lightbulb, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { portfolioConfig } from "@/data/portfolio";

/**
 * Game Animator Portfolio - Home Page
 * 
 * Design Philosophy (Ella Lundqv/ist inspired):
 * - Minimalist, spacious layout with generous whitespace
 * - Clean navigation header with centered nav items
 * - Large hero imagery for visual impact
 * - Asymmetric project grid
 * - Focus on content over decoration
 * - Easy to extend with new projects and sections
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { theme, toggleTheme } = useTheme();
  const config = portfolioConfig;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header - Ella Lundqvist inspired minimalist design */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container max-w-6xl py-6 px-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <a href="#" className="font-bold text-lg hover:opacity-70 transition-opacity">
              {config.personal.name}
            </a>

            {/* Center Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {config.navSections.map((section) => (
                <a
                  key={section.id}
                  href={section.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </nav>

            {/* Right side - Social + CV */}
            <div className="flex items-center gap-4">
              {config.social.linkedin && (
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {config.social.cv && (
                <a
                  href={config.social.cv}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  CV
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero/Reel Section */}
      <section id="reel" className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                  {config.personal.tagline}
                </p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  {config.personal.title}
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                {config.about.whatIDo}
              </p>
              <div className="flex gap-4 pt-4">
                
              
              </div>
            </div>
            {config.reel.image && (
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={config.reel.image}
                  alt="Hero Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Portfolio</h2>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("animation")}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === "animation"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Animation
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {config.portfolioProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all group">
                {project.image && (
                  <div className="h-48 overflow-hidden bg-muted relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {config.portfolioProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Portfolio projects coming soon. Add projects to <code className="bg-muted px-2 py-1 rounded">client/src/data/portfolio.ts</code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {config.projects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {config.projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Projects coming soon. Add projects to <code className="bg-muted px-2 py-1 rounded">client/src/data/portfolio.ts</code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(config.skills).map((category) => (
              <Card key={category.name} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-12">About</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3">Who I Am</h3>
              <p className="text-muted-foreground">{config.about.whoIAm}</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3">What I Do</h3>
              <p className="text-muted-foreground">{config.about.whatIDo}</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-3">My Mission</h3>
              <p className="text-muted-foreground">{config.about.mission}</p>
            </Card>
          </div>

          {/* Achievements Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Achievements & Education</h3>
            <div className="space-y-8">
              {config.achievements.map((achievement, idx) => (
                <div key={idx} className="flex gap-6 pb-8 border-b border-border last:border-0">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-sm">
                      {achievement.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflections */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Reflections & Learning</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4">
                <h4 className="text-lg font-bold">Key Lessons from Experience</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {config.reflections.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 space-y-4">
                <h4 className="text-lg font-bold">Transferable Skills</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {config.reflections.transferableSkills.map((skill, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-secondary font-bold">•</span>
                      <span>
                        <strong>{skill.title}:</strong> {skill.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Exciting projects and developments in the pipeline.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {config.comingSoon.map((item, idx) => (
              <Card key={idx} className="p-6 border-2 border-dashed border-accent/30 hover:border-accent/60 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold flex-1">{item.title}</h3>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded whitespace-nowrap ml-2">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg opacity-90">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <p className="font-semibold mb-1">Email</p>
              <a href={`mailto:${config.personal.email}`} className="opacity-80 hover:opacity-100 transition-opacity">
                {config.personal.email}
              </a>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <p className="font-semibold mb-1">Phone</p>
              <a href={`tel:${config.personal.phone}`} className="opacity-80 hover:opacity-100 transition-opacity">
                {config.personal.phone}
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <p className="font-semibold mb-1">Location</p>
              <p className="opacity-80">{config.personal.location}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              Send Email
            </Button>
            {config.social.linkedin && (
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 border-t border-border relative">
        <div className="container max-w-6xl text-center text-muted-foreground text-sm">
          <p>© 2025 {config.personal.name}. All rights reserved. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>

        {/* Dark Mode Toggle - Bottom Left */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 left-6 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl z-40"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </footer>
    </div>
  );
}
