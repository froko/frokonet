---
title: Building with Astro Content Collections
description:
  A practical guide to organizing and managing content in Astro using the
  Content Collections API.
pubDate: 2024-02-10
tags: [astro, web-development, tutorial]
---

Astro's Content Collections API is a game-changer for managing markdown content
in static sites. Let me show you why.

## What Are Content Collections?

Content Collections provide a type-safe way to manage groups of similar content.
Think blog posts, product pages, or documentation articles.

### Key Benefits

1. **Type Safety**: Define schemas with Zod for compile-time validation
2. **Automatic Frontmatter Parsing**: No manual YAML parsing needed
3. **Developer Experience**: Autocomplete and type checking in your IDE
4. **Performance**: Optimized content queries and caching

## Setting Up a Collection

First, define your collection schema in `src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = { blog }
```

## Querying Content

Astro provides helper functions to query your collections:

```astro
---
import { getCollection } from 'astro:content'

const posts = await getCollection('blog')
const published = posts.filter((post) => !post.data.draft)
---
```

## Why I Love It

Coming from other static site generators, Astro's approach feels refreshingly
modern. The type safety catches errors early, and the DX is fantastic.

If you're building a content-heavy site, Content Collections should be your
first choice.
