# 358 High Street — Project Brief
_Last updated: 2026-04-23_

---

## Site Purpose
A multi-audience website for a rented duplex construction/retrofit project:
1. **Construction reference** — detailed documentation of a "lite" deep energy retrofit
2. **Tenant manual** — operator's guide for building systems, monitoring data
3. **Rental marketing** — secondary goal, showcase the property

Live site: https://358highstreet.com

---

## Tech Stack

### Frontend
- React + React Router (createBrowserRouter)
- Tailwind CSS
- react-markdown + remark-gfm (for markdown page rendering)
- Deployed as static build

### Backend (planned, not yet started for this site)
- Node.js + Express
- MongoDB (time-series sensor readings)
- Hosted on DigitalOcean droplet (Apache2 as reverse proxy)
- Reference pattern: brenda-henriques.com Express server on same droplet

---

## Infrastructure
- DigitalOcean droplet running Apache2
- Apache2 reverse proxies `/api` traffic to Express
- Static React build served directly by Apache2
- **Git/GitHub**: repo at https://github.com/morrisonwolozin/358highstreet (private)
- Two machines (ME and MA) — sync via git pull/push, NOT Dropbox
- Project folder must stay OUTSIDE Dropbox to avoid file corruption

---

## Frontend Architecture

### Key principle
`siteMap.js` is the **single source of truth** for all navigation and page metadata.
The router is intentionally minimal — only exceptions registered explicitly.

### File structure
```
src
├── routes/
│   ├── router.jsx
│   └── GalleryRoute.jsx
├── layouts/
│   └── RootLayout.jsx          h-screen flex flex-col; main has overflow-y-auto
├── pages/
│   ├── HomePage.jsx            seasonal hero image (winter/spring/fall)
│   ├── IssuesPage.jsx          → goals-challenges.md via MarkdownPage
│   ├── DesignPage.jsx          design-narrative.md + thermal/air/load tables
│   ├── EnergyPage.jsx          pre/post energy metrics with badges and tables
│   ├── AboutPage.jsx           about.md via MarkdownPage
│   ├── DownloadsPage.jsx       two-column category layout
│   ├── ProjectCostPage.jsx     by building system, placeholder data
│   ├── IceDamsPage.jsx         ice-dams-narrative.md + gallery
│   ├── RentalPage.jsx
│   └── RestrictedPage.jsx
├── navigation/
│   ├── SidebarNav.jsx          filters rental nodes via useSiteConfig()
│   ├── MobileMenu.jsx          hamburger drawer, closes on nav click
│   └── Breadcrumbs.jsx
├── components/
│   ├── Gallery.jsx
│   ├── MarkdownPage.jsx        reusable; accepts content prop; remarkGfm enabled
│   ├── HeaderBanner.jsx        hamburger below title on mobile (md:hidden)
│   ├── Footer.jsx
│   └── Modal.jsx
├── config/
│   ├── siteConfig.js           fetchSiteConfig() mock → replace with /api/config
│   └── SiteConfigContext.jsx   useSiteConfig() hook; wraps app in main.jsx
├── content/
│   ├── goals-challenges.md
│   ├── design-narrative.md
│   ├── ice-dams-narrative.md
│   └── about.md
├── data/
│   ├── galleryIndex.js
│   ├── energyData.js
│   ├── designData.js
│   ├── downloads.js
│   └── projectCostData.js      placeholder — awaiting Viking Lumber pivot table
└── utils/
    └── utils.js                includes findNodeByPath, useAppNavigate
```

### Router pattern
```
/                    → HomePage
/rental              → RentalPage
/restricted          → RestrictedPage
/*                   → GalleryRoute (wildcard handles all gallery pages)
```
All other pages (issues, design, energy-performance, about, downloads, project-cost,
construction/ice-dams) registered explicitly above the wildcard.

### siteMap node types
| Type | Behavior |
|------|----------|
| `page` | Renders a dedicated page component |
| `gallery` | Rendered by GalleryRoute, keyed by URL path |
| `section` | Nav grouping node; may also have a path |

### siteMap node fields
- `label`, `path`, `type` — always present
- `summary` — one-sentence subtitle
- `intro` — longer prose
- `children` — nested nav nodes

### Key decisions made
- `h-screen` on RootLayout outer div (not min-h-screen) — fixed viewport, internal scroll
- `overflow-y-auto` on `<main>` — content scrolls, footer stays fixed
- Wildcard GalleryRoute is canonical — no per-gallery route registration
- `normalize()` in GalleryRoute strips slashes and lowercases for galleryIndex lookup
- `?raw` Vite import for markdown files (works natively, no config needed)
- Seasonal hero: winter=Dec-Feb, spring=Mar-May, summer=Jun-Aug (spring fallback),
  fall=Sep-Oct, winter=Nov
- Mobile nav: hamburger appears below header text on mobile (md:hidden),
  opens MobileMenu drawer, closes on link click or backdrop click

### Rental conditional rendering
- `siteConfig.js` → `fetchSiteConfig()` returns `{ rentalAvailable, units: {unit1, unit2} }`
- Currently static mock — replace fetch with `/api/config` when backend ready
- `SidebarNav` filters rental nodes when `rentalAvailable: false`
- `HomePage` button switches: rental → energy-performance when unavailable
- `SiteConfigProvider` wraps app in `main.jsx`

---

## Content Files Status

| File | Status |
|------|--------|
| goals-challenges.md | Complete |
| design-narrative.md | Complete (includes Efficiency Maine incentives table) |
| ice-dams-narrative.md | Complete |
| about.md | Complete (credits table with links) |
| design-narrative.md | Complete |

---

## Data Files Status

| File | Status |
|------|--------|
| energyData.js | Complete — pre(2023) and post data |
| designData.js | Complete — thermal, air leakage, loads |
| downloads.js | Populated with actual documents |
| projectCostData.js | **Placeholder** — awaiting Viking Lumber pivot table data |

---

## Backend Plan (to resume after frontend content complete)

### Sensor devices
- AirThings Wave+ — CO2, humidity, temp, radon, VOC (multiple devices)
- Tempstick — temperature (to be added later)

### AirThings API (tested in Postman)
- Auth: `POST https://accounts-api.airthings.com/v1/token` (OAuth2 client credentials)
- Devices: `GET https://ext-api.airthings.com/v1/devices/`
- Readings: `GET https://ext-api.airthings.com/v1/devices/{id}/latest-samples`
- Token expires ~1hr — cache with `{ token, expiresAt }`

### Data flow
```
AirThings API → node-cron poller (every 15-30 min) → MongoDB → Express /api/readings → React dashboard
```

### MongoDB schema (planned)
```js
{ deviceId, type: "airthings", timestamp, data: { co2, humidity, temp, radon, voc } }
```

### Access control
- `/restricted` route stubbed — tenant dashboard behind JWT or session auth

---

## Viking Lumber Invoice Extraction (in progress)

Extracting material cost data from Viking Lumber PDF invoices (Northridge Construction account).
CSV format: `InvoiceNo, InvoiceDate, SalesOrder, YourRef, ProductCode, Description, Qty, Unit, UnitPrice, LineTotal, TaxAmount, InvoiceTotal`

| Month | Status | Invoices | Notes |
|-------|--------|----------|-------|
| April 2024 | ✅ Complete | 2 | |
| May 2024 | ✅ Complete | 29 | Windows invoice 5465639 spans 2 pages |
| June 2024 | ✅ Complete | 8 | "bob" YourRef = owner pickup |
| July 2024 | ✅ Complete | 24 | ZIP/Advantech swap noted on 5550427/5551141 |
| August 2024 | ✅ Complete | 34 | LP SmartSide siding, Jeld-Wen doors |
| October 2024 | ⬜ Next | — | No September invoices |
| Remaining months | ⬜ Pending | — | |

**Credit notes** — handle manually outside CSV extraction.

### Cost taxonomy (for projectCostData.js pivot table)
14 top-level Systems:
1. General Conditions
2. Demolition & Disposal
3. Site Work & Drainage
4. Foundation
5. Structure & Envelope
6. Additions
7. Party Wall
8. HVAC & Ventilation
9. Electrical
10. Plumbing
11. Finishes & Interiors
12. Site Amenities
13. Design & Professional Services
14. Monitoring & Controls

Spreadsheet fields: System, Component (physical location), Element, Contractor, Unit (Building/Unit1/Unit2/Common), Type (Material/Labor/Other), Amount, Notes

---

## Current Tasks
- [ ] Continue Viking Lumber invoice extraction (October onward) — **start new thread**
- [ ] Populate projectCostData.js from completed pivot table
- [ ] Write About page narrative section
- [ ] Add summer hero image when available
- [ ] Begin backend development (AirThings poller → MongoDB)
- [ ] Tenant dashboard (RestrictedPage backend)

## Git Workflow
```bash
# Start session:
git pull

# End session:
git add .
git commit -m "description"
git push
```
