---
title: First Impressions of Tailwind CSS v4
description:
  Exploring the new features and improvements in Tailwind CSS v4, including the
  new configuration approach and performance gains.
pubDate: 2024-03-05
tags: [css, tailwind, web-development]
---

Tailwind CSS v4 is here, and it's a significant evolution of the framework. Here
are my initial thoughts after migrating a project.

## The Big Changes

### CSS-First Configuration

The biggest shift is moving away from JavaScript configuration files. Instead,
you configure Tailwind directly in CSS:

```css
@import 'tailwindcss';

@theme {
  --color-brand: #3b82f6;
  --font-sans: 'Inter', system-ui;
}
```

This feels more natural and integrates better with existing CSS workflows.

### Performance Improvements

The new engine is noticeably faster. Build times have improved, and the
development experience feels snappier.

### Zero-Config Philosophy

Many things that required configuration in v3 now work out of the box:

- Container queries
- Modern color spaces
- CSS cascade layers

## Migration Experience

Migrating from v3 took about 30 minutes for a medium-sized project:

1. Update dependencies
2. Convert `tailwind.config.js` to CSS theme declarations
3. Update import statements
4. Test and adjust

## Should You Upgrade?

If you're starting a new project, absolutely use v4. For existing projects, the
migration is straightforward enough that I'd recommend it for the performance
gains alone.

The framework continues to evolve in the right direction—less configuration,
better performance, and a more intuitive API.
