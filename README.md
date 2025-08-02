# Services Organization in 11ty

This document explains how service pages are organized in this 11ty project.

## File Structure

```
src/
├── _data/
│   └── services.json          # Service data with galleries
├── _includes/
│   └── services-nav.njk       # Reusable services navigation
├── _layouts/
│   └── base.njk              # Base layout with conditional nav
├── services/
│   └── index.njk             # Services index page
├── services.njk              # Original gallery page (now at /services/gallery/)
└── services-pages.njk        # Pagination template for individual service pages
```

## Generated URLs

The build process generates the following URLs:

- `/services/` - Services index page (all services overview)
- `/services/gallery/` - Original interactive gallery page
- `/services/balconies/` - Individual service page for balconies
- `/services/gates/` - Individual service page for gates
- `/services/railings/` - Individual service page for railings
- `/services/grills/` - Individual service page for grills
- `/services/canopies/` - Individual service page for canopies
- `/services/gazebos/` - Individual service page for gazebos
- `/services/gratings/` - Individual service page for gratings
- `/services/restoration/` - Individual service page for restoration

## How It Works

### 1. Data Source
All service data is stored in `src/_data/services.json` with the following structure:
```json
{
  "name": "Service Name",
  "href": "service-slug",
  "galleryPaths": [...],
  "description": "Service description"
}
```

### 2. Pagination
The `services-pages.njk` file uses 11ty's pagination feature to automatically generate individual pages for each service:

```njk
---
pagination:
  data: services
  size: 1
  alias: service
  resolve: values
permalink: "services/{{ service.href }}/index.html"
---
```

### 3. Navigation
The `services-nav.njk` include provides consistent navigation across all service pages and automatically highlights the current page.

### 4. Layout Integration
The base layout (`base.njk`) conditionally includes the services navigation when on service pages:

```njk
{% if page.url and page.url.startsWith('/services') %}
    {% include "services-nav.njk" %}
{% endif %}
```

## Adding New Services

To add a new service:

1. Add the service data to `src/_data/services.json`
2. Add the corresponding images to the appropriate folder in `public/`
3. Rebuild the site - the new service page will be automatically generated

## Benefits

- **SEO-friendly**: Each service has its own dedicated URL
- **Maintainable**: Single data source for all service information
- **Consistent**: Shared navigation and styling across all service pages
- **Scalable**: Easy to add new services without touching templates
- **Performance**: Static pages generated at build time

## Customization

- Modify `services-pages.njk` to change the layout of individual service pages
- Update `services/index.njk` to change the services overview page
- Edit `services-nav.njk` to modify the navigation component
- Adjust styles in any of the template files to match your design 