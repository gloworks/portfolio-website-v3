# Portfolio Content Management Guide

This portfolio is designed to be **easily extensible** without touching component code. All content is managed through a single data file.

## Quick Start: Adding Content

### 1. **Update Personal Information**

Edit `client/src/data/portfolio.ts`:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your Tagline",
    location: "Your City, Country",
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
  },
  // ... rest of config
};
```

### 2. **Add Portfolio Projects**

In `client/src/data/portfolio.ts`, add to the `portfolioProjects` array:

```typescript
portfolioProjects: [
  {
    id: "1",
    title: "Your Project Title",
    description: "What this project is about",
    category: "animation", // or any category you create
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/path/to/image.png", // Use manus-upload-file to get URLs
    link: "https://example.com", // Optional
  },
  // Add more projects here
],
```

**To add project images:**
1. Use `manus-upload-file --webdev path/to/image.png` in the terminal
2. Copy the returned URL and paste it as the `image` value

### 3. **Add Development Projects**

In `client/src/data/portfolio.ts`, add to the `projects` array:

```typescript
projects: [
  {
    id: "1",
    title: "Web App Name",
    description: "Description of the project",
    category: "web", // or "game", "tool", etc.
    tags: ["React", "TypeScript"],
    link: "https://example.com",
  },
  // Add more projects here
],
```

### 4. **Update Skills**

Modify the `skills` object in `client/src/data/portfolio.ts`:

```typescript
skills: {
  animation: {
    name: "Animation & Design",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
  technical: {
    name: "Technical Skills",
    skills: ["React", "TypeScript", "Python"],
  },
  // Add more skill categories
},
```

### 5. **Add Achievements**

Add to the `achievements` array:

```typescript
achievements: [
  {
    year: "2025",
    title: "Achievement Title",
    description: "Description of what you achieved",
  },
  // Add more achievements
],
```

### 6. **Update Navigation**

Modify the `navSections` array to add/remove navigation items:

```typescript
navSections: [
  { id: "reel", label: "Reel", href: "#reel" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "about", label: "About", href: "#about" },
  // Add custom sections here
],
```

### 7. **Add Social Links**

Update the `social` object:

```typescript
social: {
  linkedin: "https://www.linkedin.com/in/your-profile/",
  instagram: "https://instagram.com/your-handle",
  github: "https://github.com/your-username",
  cv: "/cv.pdf", // Upload to client/public/
},
```

## File Structure

```
client/src/
├── data/
│   └── portfolio.ts          ← Edit this file for all content
├── pages/
│   └── Home.tsx              ← Component (don't edit for content)
├── components/
│   └── ui/                   ← UI components (don't touch)
└── contexts/
    └── ThemeContext.tsx      ← Theme management
```

## Features

### ✅ Dark Mode
- Automatic dark mode toggle in bottom-left corner
- Persists user preference
- Colder color scheme (cool blues, teals, cyans)

### ✅ Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Sticky navigation header

### ✅ Minimalist Layout
- Inspired by Ella Lundqvist's portfolio
- Generous whitespace
- Focus on content

### ✅ Easy Extensibility
- All content in one file (`portfolio.ts`)
- No component modifications needed
- Add/remove sections by updating arrays

## Deployment

When ready to publish:

1. **Save a checkpoint:**
   ```bash
   # This is done through the Management UI
   ```

2. **Publish:**
   - Click the "Publish" button in the Management UI
   - Your portfolio goes live!

## Customization Tips

### Change Color Scheme
Edit `client/src/index.css` and modify the OKLCH color values in `:root` and `.dark` sections.

### Add New Sections
1. Add a new section to `navSections` in `portfolio.ts`
2. Create a new section component in `Home.tsx` (or ask for help)

### Update Typography
Edit `client/index.html` to change Google Fonts imports.

### Add Animations
Modify Tailwind classes in `Home.tsx` components (e.g., `hover:scale-105`, `transition-all`).

## Troubleshooting

**Projects not showing?**
- Make sure `portfolioProjects` array has items
- Check that `image` URLs are correct (use `manus-upload-file --webdev`)

**Dark mode not working?**
- Clear browser cache
- Check that `ThemeProvider` has `switchable` prop in `App.tsx`

**Images not loading?**
- Use `manus-upload-file --webdev path/to/image.png` to get proper URLs
- Don't use local file paths

## Need Help?

To make changes:
1. Edit `client/src/data/portfolio.ts` for content
2. Edit `client/src/pages/Home.tsx` for layout/structure
3. Edit `client/src/index.css` for colors/styling

All changes auto-save and the dev server hot-reloads!
