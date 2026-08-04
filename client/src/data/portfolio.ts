/**
 * Portfolio Data Structure
 * 
 * This file contains all portfolio content. Modify this file to:
 * - Add/remove projects
 * - Update skills
 * - Add achievements
 * - Modify contact information
 * 
 * No need to touch component files - just update the data here!
 */

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Bokang Mabina",
    title: "Game Animator",
    tagline: "I do in fact, make animations, that's my thing.",
    location: "Brighton, UK",
    email: "bokanmabin07@gmail.com",
    phone: "+44 7535 904286",
  },

  // Navigation sections - modify this to add/remove tabs
  navSections: [
    { id: "reel", label: "Reel", href: "#reel" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "about", label: "About", href: "#about" },
  ],

  // Featured reel/hero section
  reel: {
    title: "Featured Work",
    description: "A selection of my recent animation and game development projects.",
    image: "https://files.catbox.moe/xo41kw.jpg", // no idea if this fucking works.. it should though!
  },

  // Portfolio projects - easily add more!
  portfolioProjects: [
    {
      id: "1",
      title: "Character Walk Cycle Animation",
      description: "These walk cycles are for an old project I was working on Roblox, but let go because the platform is less than sustainable. I'm still proud of these, since I actually rigged the model these use as well.",
      category: "animation",
      tags: ["Animation", "Character", "Motion"],
      image: "https://files.catbox.moe/ayjb9n.webp",
      link: "https://files.catbox.moe/ayjb9n.webp", // Add link when ready
    },
    { 
      id: "2",
      title: "Run Cycle Animation" ,
      description: "These run cycles are for the same old project. These certainly can use a lot of work as it stands.. but it's a start.",
      category: "animation",
      tags: ["Animation"],
      image: "https://files.catbox.moe/kqn54m.webp",
      link: "https://files.catbox.moe/ayjb9n.webp", // Add link when ready
    }
  ],

  // Development projects - add coding/game projects
  projects: [
    {
      id: "1",
      title: "Text Based Adventure Game",
      description: "A text-based adventure game built with C# and ingenuity. Trust me, it's more fun than it sounds.",
      tags: ["C#", "Game Development"],
      link: undefined,
    },
    // Add more projects here
  ],

  // Skills organized by category
  skills: {
    animation: {
      name: "Animation & Design",
      skills: ["Character Animation", "3D Modeling", "Rigging"],
    },
    technical: {
      name: "Technical Skills",
      skills: ["React", "TypeScript", "JavaScript", "Python", "Web Development", "Game Engines"],
    },
    soft: {
      name: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management", "Creative Thinking"],
    },
    
  },

  // Achievements and education timeline
  achievements: [
    {
      year: "2025 - current",
      title: "Brighton University - Computer Science for Games",
      description: "Currently pursuing a degree in Computer Science for Games, which focuses on game development, alongside web development.",
    },
    {
      year: "2025",
      title: "Code Sensei at Code Ninjas",
      description: "Guided students through complex coding challenges, fostering critical thinking and problem-solving skills. Enhanced student confidence and program retention through collaborative learning.",
    },
    {
      year: "2024-2025",
      title: "Computer Science Studies",
      description: "Currently pursuing Computer Science for Games at West Herts College, building strong technical foundations and programming expertise.",
    },

    {
      year: "2022",
      title: "Professional Work Experience",
      description: "Worked as a Waiter at Harvester, developing customer service excellence and team collaboration skills.",
    },
  ],

  // About section content
  about: {
    whoIAm: "An aspiring game animator focusing on dynamic 3D cutscenes and storytelling through motion, based in Brighton, UK. Currently studying Computer Science for Games while building my portfolio in animation.",
    whatIDo: "I like making animations, that's my thing.. alongside dabbling in coding! Begrudingly.",
    mission: "To grow as both an animator and developer within the game development community. And to hopeffully make a living, like everyone does!",
  },

  // Reflections section
  reflections: {
    lessons: [
      "Customer service taught me the importance of attention to detail and anticipating needs",
      "Mentoring revealed my passion for teaching and helping others solve complex problems",
      "Technical studies reinforced the value of continuous learning and practice",
    ],
    transferableSkills: [
      {
        title: "Problem-Solving",
        description: "Breaking down complex challenges into manageable steps has helped me approach both game architecture and coding bugs with a calm state of mind.",
      },
      {
        title: "Teamwork",
        description: "Collaborating effectively with diverse groups and backgrounds has enhanced my ability to work within dynamic teams and mediate different perspectives in order to achieve higher levels of efficiency.",
      },
      {
        title: "Communication",
        description: "Explaining technical concepts in clear, accessible ways. Having to teach coding to kids helped tremendously with communicating ideas in a concise manner.",
      },
    ],
  },

  // Coming soon projects
  comingSoon: [
    {
      title: "Advanced Animation Portfolio",
      description: "Expanding animation work with more character animations, rigging demonstrations, and motion studies! Maybe even some acting as well alonside behind the scenes!",
      status: "In Development",
    },
    {
      title: "Game Development Projects",
      description: "Game prototypes on both Unity and Unreal Engine are being developed. Well, they are there, but not to my liking to be added yet.",
      status: "In Development",
    },
    {
      title: "Website Improvements",
      description: " As I continue to grow this portfolio, the current layout won't be efficient for showcasing the rest of my work. Expect a redesign alongside more.",
      status: "Planning phase.",
    }
    
  ],

  // Social links
  social: {
    linkedin: "https://www.linkedin.com/in/Bo-Mabina/",
    instagram: undefined,
    github: "https://github.com/",
    cv: "https://files.catbox.moe/ow7sgs.pdf",
  },
};
