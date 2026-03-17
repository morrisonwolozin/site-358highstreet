## 358 High Street v5 react-router-dom
# 1. Project Structure
## src
│
├─  routes // Contains router configuration only
    router.jsx
    router config is not really a UI component — it's application wiring.
├─ layouts // Layouts define persistent page frames.
    RootLayout.jsx
    These are components that wrap other routes and contain <Outlet />.
    Typical layout structure:
    <HeaderBanner />
    <SidebarNav />
    <Outlet />
    <Footer />
        Naming rule: SomethingLayout.jsx
            RestrictedLayout.jsx
            DocsLayout.jsx
│            
├─ pages // These are actual route destinations, are route targets.
│   HomePage.jsx
│   RentalPage.jsx
│   RestrictedPage.jsx
        ConstructionPage.jsx
        AirQualityPage.jsx
        Naming Rule: SomethingPage.jsx 
│
├─ navigation //Navigation UI deserves its own folder because it becomes complex quickly.
│   SidebarNav.jsx
│   MobileMenu.jsx
│   Breadcrumbs.jsx
        These components deal with:
        <NavLink>
        route state
        expanding sections
        hamburger toggles
│
├─ components // Reusable UI pieces.
│   Gallery.jsx
│   HeaderBanner.jsx
│   Footer.jsx
│   Modal.jsx
        Modal.jsx
        ImageCard.jsx
│
├─ data
│   galleryIndex.js
│
└─ utils
    helpers.js

# project flow: each folder corresponds to one layer.
router.jsx
     ↓
RootLayout
     ↓
SidebarNav + Outlet
     ↓
Page
     ↓
Components (Gallery etc.)