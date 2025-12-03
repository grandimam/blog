# Jekyll Template - Grandimam

A minimalist Jekyll template based on the Next.js design, featuring a clean layout with navigation, blog posts, and responsive design.

## Features

- Clean, minimal design
- Responsive layout (mobile-first)
- Blog post pagination
- SEO optimization
- Simple navigation

## Structure

```
jekyll-template/
├── _config.yml          # Jekyll configuration
├── _layouts/           # Page layouts
│   ├── default.html    # Base layout
│   └── post.html       # Blog post layout
├── _includes/          # Reusable components
│   ├── header.html     # Site header with navigation
│   ├── sidebar.html    # Desktop sidebar navigation
│   ├── footer.html     # Site footer
│   └── blog-card.html  # Blog post card component
├── _posts/             # Blog posts (markdown files)
├── _data/              # Data files (optional)
├── assets/             # Static assets
│   ├── css/
│   └── js/
├── index.html          # Homepage with blog listing
├── about.md            # About page
├── books.md            # Books page
└── Gemfile             # Ruby dependencies
```

## Setup

1. Install Jekyll and dependencies:
```bash
gem install bundler jekyll
cd jekyll-template
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. View your site at `http://localhost:4000`

## Creating Posts

Create new posts in the `_posts/` directory with the format:
```
YYYY-MM-DD-post-title.md
```

Include the following frontmatter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
reading_time: 5
tags: [tag1, tag2]
slug: your-post-slug
excerpt: "Brief description of the post"
---
```

## Customization

- Edit `_config.yml` to update site settings
- Modify layouts in `_layouts/`
- Update components in `_includes/`
- Add styles to the `<style>` section in `_layouts/default.html`

## Deployment

This template can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

MIT