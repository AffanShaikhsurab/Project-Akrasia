# Project Akrasia - Structure Overview

This document provides a comprehensive overview of the Project Akrasia repository structure, helping contributors understand where different types of content and code belong.

## 📁 Repository Structure

```
Project-Akrasia/
│
├── 📄 README.md                    # Main project overview and mission
├── 📄 CONTRIBUTING.md               # Contribution guidelines
├── 📄 CODE_OF_CONDUCT.md           # Community standards
├── 📄 LICENSE                      # MIT License
├── 📄 ROADMAP.md                   # Development timeline and milestones
├── 📄 PROJECT_STRUCTURE.md         # This file - project organization
├── 📄 .gitignore                   # Git ignore rules
│
├── 📁 .github/                     # GitHub-specific files
│   ├── 📁 ISSUE_TEMPLATE/          # Issue templates
│   │   ├── 📄 bug_report.md        # Bug report template
│   │   ├── 📄 feature_request.md   # Feature request template
│   │   └── 📄 content_contribution.md # Content contribution template
│   ├── 📄 pull_request_template.md # PR template
│   └── 📁 workflows/               # GitHub Actions (future)
│
├── 📁 website/                     # Website source code
│   ├── 📄 README.md               # Website development guide
│   ├── 📁 src/                    # Source code
│   ├── 📁 public/                 # Static assets
│   ├── 📁 components/             # Reusable UI components
│   ├── 📁 pages/                  # Website pages
│   ├── 📁 styles/                 # CSS and styling
│   ├── 📁 utils/                  # Utility functions
│   ├── 📁 data/                   # Static data files
│   ├── 📄 package.json            # Dependencies
│   └── 📄 next.config.js          # Framework configuration
│
├── 📁 resources/                   # Educational content and materials
│   ├── 📄 README.md               # Resource directory guide
│   │
│   ├── 📁 research/                # Academic research and studies
│   │   ├── 📄 key-studies.md      # Curated research papers
│   │   ├── 📄 meta-analyses.md    # Research summaries
│   │   ├── 📄 recent-findings.md  # Latest research
│   │   └── 📁 papers/             # Full research papers (PDFs)
│   │
│   ├── 📁 books/                   # Book recommendations and reviews
│   │   ├── 📄 recommended-reading.md # Curated book list
│   │   ├── 📄 academic-texts.md   # Academic literature
│   │   ├── 📄 self-help-books.md  # Popular psychology books
│   │   └── 📁 reviews/            # Detailed book reviews
│   │
│   ├── 📁 productivity-tools/      # Methods and techniques
│   │   ├── 📄 techniques-and-methods.md # Comprehensive guide
│   │   ├── 📄 time-management.md  # Time management strategies
│   │   ├── 📄 cognitive-techniques.md # Psychological approaches
│   │   ├── 📄 digital-tools.md    # App and software recommendations
│   │   ├── 📄 assessment-tools.md # Self-evaluation methods
│   │   └── 📁 worksheets/         # Downloadable templates
│   │
│   ├── 📁 articles/                # Educational articles
│   │   ├── 📄 understanding-procrastination.md
│   │   ├── 📄 psychology-of-delay.md
│   │   ├── 📄 mental-health-impact.md
│   │   ├── 📄 student-specific-strategies.md
│   │   └── 📄 workplace-productivity.md
│   │
│   ├── 📁 case-studies/            # Real-world examples
│   │   ├── 📄 student-success-stories.md
│   │   ├── 📄 professional-transformations.md
│   │   └── 📄 intervention-studies.md
│   │
│   ├── 📁 multimedia/              # Videos, podcasts, infographics
│   │   ├── 📁 videos/             # Educational video content
│   │   ├── 📁 podcasts/           # Audio resources
│   │   ├── 📁 infographics/       # Visual learning aids
│   │   └── 📄 multimedia-index.md # Catalog of all media
│   │
│   └── 📁 translations/            # Multi-language content (future)
│       ├── 📁 spanish/
│       ├── 📁 french/
│       └── 📁 german/
│
├── 📁 docs/                        # Project documentation
│   ├── 📄 style-guide.md          # Writing and content standards
│   ├── 📄 research-guidelines.md  # How to evaluate and cite research
│   ├── 📄 accessibility-guide.md  # Accessibility requirements
│   ├── 📄 content-review-process.md # Quality assurance process
│   └── 📄 community-guidelines.md # Community interaction standards
│
├── 📁 tools/                       # Development and maintenance tools
│   ├── 📁 scripts/                # Automation scripts
│   ├── 📁 templates/              # Content templates
│   └── 📁 validators/             # Content validation tools
│
└── 📁 community/                   # Community-related files
    ├── 📄 contributors.md         # Contributor recognition
    ├── 📄 partnerships.md         # Partner organizations
    ├── 📄 testimonials.md         # User feedback and stories
    └── 📄 events.md               # Community events and webinars
```

## 📋 Directory Purposes

### 🌐 `/website/`
**Purpose**: Contains all website source code and development files

**What goes here**:
- React/Next.js components
- Page layouts and routing
- Styling and CSS
- JavaScript functionality
- Build configuration
- Static assets (images, icons)

**Who contributes**:
- Frontend developers
- UI/UX designers
- Web accessibility specialists

### 📚 `/resources/`
**Purpose**: Educational content and materials for users

**What goes here**:
- Research papers and studies
- Book recommendations
- Technique guides
- Educational articles
- Worksheets and templates
- Multimedia content

**Who contributes**:
- Researchers and academics
- Mental health professionals
- Educators and teachers
- Content writers
- Subject matter experts

### 📖 `/docs/`
**Purpose**: Project documentation and guidelines

**What goes here**:
- Style guides
- Process documentation
- Contribution guidelines
- Quality standards
- Community policies

**Who contributes**:
- Project maintainers
- Documentation specialists
- Community managers

### 🛠️ `/tools/`
**Purpose**: Development and maintenance utilities

**What goes here**:
- Build scripts
- Content validation tools
- Automation utilities
- Development templates

**Who contributes**:
- DevOps engineers
- Tool developers
- Automation specialists

### 🤝 `/community/`
**Purpose**: Community engagement and recognition

**What goes here**:
- Contributor profiles
- Partnership information
- User testimonials
- Event documentation

**Who contributes**:
- Community managers
- Partnership coordinators
- Event organizers

## 🎯 Content Categories

### 🔬 Research Content
**Location**: `/resources/research/`

**Types**:
- Peer-reviewed studies
- Meta-analyses
- Literature reviews
- Expert opinions
- Conference proceedings

**Standards**:
- Must be from credible sources
- Properly cited and referenced
- Relevant to procrastination research
- Accessible summaries provided

### 📖 Educational Content
**Location**: `/resources/articles/`

**Types**:
- Explanatory articles
- How-to guides
- Conceptual overviews
- Practical advice
- Case studies

**Standards**:
- Evidence-based information
- Clear, accessible language
- Actionable advice
- Culturally sensitive
- Regularly updated

### 🛠️ Practical Tools
**Location**: `/resources/productivity-tools/`

**Types**:
- Technique descriptions
- Implementation guides
- Assessment tools
- Worksheets and templates
- App recommendations

**Standards**:
- Scientifically validated
- Step-by-step instructions
- Adaptable to different contexts
- Accessibility considered
- User-tested when possible

### 💻 Technical Content
**Location**: `/website/`

**Types**:
- User interface components
- Interactive features
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness

**Standards**:
- Clean, maintainable code
- Cross-browser compatibility
- WCAG 2.1 AA compliance
- Performance optimized
- Well-documented

## 🏷️ File Naming Conventions

### 📄 Markdown Files
- Use lowercase with hyphens: `understanding-procrastination.md`
- Be descriptive but concise
- Include file type when relevant: `assessment-tools.md`

### 📁 Directories
- Use lowercase with hyphens
- Plural nouns for collections: `articles/`, `tools/`
- Descriptive names: `productivity-tools/` not `tools/`

### 🖼️ Media Files
- Include context: `pomodoro-technique-diagram.svg`
- Use web-optimized formats: `.webp`, `.svg`, `.mp4`
- Include alt-text in filename when helpful

### 💻 Code Files
- Follow framework conventions
- Use PascalCase for components: `PomodoroTimer.jsx`
- Use camelCase for utilities: `formatTime.js`

## 🎨 Content Standards

### ✍️ Writing Style
- **Tone**: Supportive, understanding, non-judgmental
- **Language**: Clear, accessible, jargon-free
- **Structure**: Logical flow with clear headings
- **Length**: Comprehensive but scannable
- **Examples**: Concrete, relatable scenarios

### 🔬 Scientific Accuracy
- **Sources**: Peer-reviewed research preferred
- **Citations**: Proper academic format
- **Claims**: Evidence-backed statements
- **Updates**: Regular review for new research
- **Balance**: Multiple perspectives when appropriate

### 🌍 Accessibility
- **Language**: Simple, clear explanations
- **Structure**: Logical heading hierarchy
- **Media**: Alt text and captions
- **Navigation**: Keyboard accessible
- **Contrast**: WCAG 2.1 AA compliance

### 🤝 Inclusivity
- **Cultural**: Sensitive to different backgrounds
- **Economic**: Consider resource limitations
- **Technical**: Various skill levels
- **Learning**: Different learning styles
- **Physical**: Accessibility needs

## 🚀 Getting Started Guide

### For New Contributors

1. **Read the Basics**
   - Main README.md
   - CONTRIBUTING.md
   - CODE_OF_CONDUCT.md

2. **Choose Your Area**
   - Content creation → `/resources/`
   - Web development → `/website/`
   - Documentation → `/docs/`
   - Community building → `/community/`

3. **Find an Issue**
   - Browse GitHub issues
   - Look for "good first issue" labels
   - Check the roadmap for priorities

4. **Start Small**
   - Fix typos or improve clarity
   - Add missing citations
   - Improve accessibility
   - Update outdated information

### For Content Contributors

1. **Research First**
   - Check existing content
   - Verify scientific accuracy
   - Ensure uniqueness

2. **Follow Templates**
   - Use issue templates
   - Follow content structure
   - Include proper citations

3. **Consider Users**
   - Think about practical application
   - Consider different audiences
   - Test for clarity

### For Developers

1. **Set Up Environment**
   - Clone repository
   - Install dependencies
   - Run development server

2. **Follow Standards**
   - Code style guidelines
   - Accessibility requirements
   - Performance considerations

3. **Test Thoroughly**
   - Cross-browser testing
   - Mobile responsiveness
   - Accessibility validation

## 📊 Quality Assurance

### Content Review Process
1. **Initial Submission**: Via GitHub issue or PR
2. **Peer Review**: Community feedback
3. **Expert Review**: Subject matter expert validation
4. **Editorial Review**: Style and clarity check
5. **Accessibility Review**: Compliance verification
6. **Final Approval**: Maintainer sign-off

### Code Review Process
1. **Automated Checks**: Linting, testing, accessibility
2. **Peer Review**: Code quality and standards
3. **Design Review**: UI/UX consistency
4. **Performance Review**: Speed and efficiency
5. **Security Review**: Vulnerability assessment
6. **Final Approval**: Maintainer merge

## 🤝 Collaboration Guidelines

### Communication
- **GitHub Issues**: Feature requests, bug reports
- **Discussions**: General questions and ideas
- **Pull Requests**: Code and content changes
- **Community Forum**: User support and engagement

### Coordination
- **Project Board**: Track progress and priorities
- **Milestones**: Major release planning
- **Labels**: Categorize and prioritize issues
- **Assignments**: Clear ownership of tasks

### Recognition
- **Contributors File**: Acknowledge all contributors
- **Commit Messages**: Credit co-authors
- **Release Notes**: Highlight major contributions
- **Community Spotlights**: Feature outstanding work

---

## 📞 Questions?

If you have questions about the project structure or where to contribute:

1. **Check existing documentation** in `/docs/`
2. **Search GitHub issues** for similar questions
3. **Start a discussion** in GitHub Discussions
4. **Ask in an issue** if it's specific to a task

---

*This structure is designed to be clear, scalable, and welcoming to contributors of all backgrounds and skill levels. As the project grows, we may refine this organization based on community needs and feedback.*