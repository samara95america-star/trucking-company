# Titan Freight Logistics - Professional Trucking & Supply Chain Website

A premium, modern, fully responsive, and performance-optimized React application designed for **Titan Freight Logistics**, a North American trucking and logistics leader.

## Technology Stack

* **React 19**
* **Vite** (Next-generation high-speed bundling)
* **Tailwind CSS v3** (Utility-first styling with premium customized color palettes)
* **React Router v6** (`HashRouter` enabled for reliable static web page deployments)
* **Lucide React v0.475.0** (Elite vector iconography)

---

## Folder Structure

Our codebase is meticulously partitioned to ensure high code quality, reusability, and rapid feature expansions:

```bash
src/
├── components/          # Reusable UI & presentation widgets
│   ├── Header.jsx       # Sticky top navigation with utility numbers & mobile menu
│   ├── Footer.jsx       # Dynamic footer with links, socials, & newsletter
│   ├── Hero.jsx         # Large headline visual section with direct route triggers
│   ├── Statistics.jsx   # Interactive numerical animation counter grid
│   ├── ServiceCard.jsx  # Compact item representation with Learn More routing
│   ├── FleetCard.jsx    # Complete vehicle configuration & capacity details
│   ├── QuoteForm.jsx    # Advanced freight quote calculation parameters
│   ├── TrackingForm.jsx # Search card connecting to satellite coordinate mock APIs
│   ├── Timeline.jsx     # Chronological status timeline maps
│   ├── TestimonialCard.jsx # Verified cargo-partner customer reviews
│   ├── FAQAccordion.jsx # Expandable accordion widget for immediate queries
│   ├── ContactForm.jsx  # Fast dispatch transmission form
│   ├── Newsletter.jsx   # Inline subscription module
│   ├── LoadingSpinner.jsx # Feedback loader for tracking/form dispatching
│   └── EmptyState.jsx   # Fallback card when search yields no matches
├── pages/               # Fully-featured page modules
│   ├── Home.jsx         # Primary high-conversion landing page
│   ├── About.jsx        # Historical milestones, values, and leadership details
│   ├── Services.jsx     # Complete breakdown of all 10 transportation offerings
│   ├── Fleet.jsx        # Vehicle cards with layout and classification filter
│   ├── Industries.jsx   # Multi-sector specialized cargo operations cards
│   ├── Careers.jsx      # Driver pay, benefits, open listings, and HR form
│   ├── Safety.jsx       # FMCSA, drug screening, ELD, and safety directives
│   ├── TrackShipment.jsx # Direct live GPS shipment lookup
│   ├── RequestQuote.jsx # Dedicated quote submission panel
│   └── Contact.jsx      # Operating times, interactive map, and support channels
├── services/
│   └── mockApi.js       # Asynchronous high-fidelity simulated API services
├── hooks/
│   └── useSEO.js        # React hook for dynamic titles & meta descriptions
├── index.css            # Base Tailwind layers, scrollbar, and animations
└── App.jsx              # Routing configurations and global scroll-to-top layout wraps
```

---

## Future Backend Preparation

We have cleanly prepared this frontend to interface with a state-of-the-art enterprise-ready backend architecture:

### 1. Architectural Integrations
* **Node.js & Express**: All services in `src/services/mockApi.js` can be mapped directly to REST API routes (e.g. `POST /api/quotes`, `GET /api/tracking/:id`).
* **PostgreSQL / MongoDB**: Scalable relational & document schemas can record quotes, carrier assignments, driver credentials, and safety audits.
* **Google Maps API**: Can replace the responsive maps placeholder block in `Contact.jsx` and generate continuous live driver navigation path coordinates.
* **Stripe Integration**: Supports online payment processors so shippers can settle active cargo invoices directly from the portal.
* **AWS S3, ECS, & Docker**: The build files (inside `dist/`) can be containerized using a simple `Dockerfile` and continuously compiled to Amazon ECS clusters or served with absolute zero-latency on Amazon S3 and CloudFront.

---

## Active Custom Features

### 1. Dynamic Live Tracking Simulation
Try entering any custom tracking number inside the **Track Shipment** tab. The mock API parses the input characters to stably seed details, yielding custom driver allocations, real-time current locations, progress bars, and high-fidelity chronological delivery timelines.

### 2. Custom Lane Calculator
The **Request a Quote** tab features a robust freight form containing all essential transport parameters: Company Name, Contact email, Pickup/Delivery location states, Weight specifications, Dimensions, and Trailer requests. Submitting validates the parameters and returns a custom reference ID.

### 3. Responsive Web Design
Built using Tailwind CSS's versatile responsive design grid, our screens seamlessly adapt to ultra-wide desktop monitors down to standard vertical smartphone displays, with optimized hamburger menus and collapsible drawers.

---

## Local Verification and Commands

Ensure node dependency files are fully configured.

### Install Modules
```bash
npm install
```

### Start Live Local Server
```bash
npm run dev
```

### Complete Lint & Audits
```bash
npm run lint
```

### Compile Production Build
```bash
npm run build
```
The compiled, mini-chunked, compressed static assets will reside inside the **`dist/`** directory.
# trucking-company
