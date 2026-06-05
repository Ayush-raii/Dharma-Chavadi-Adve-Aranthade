# DHARMA CHAVADI ADVE ARANTHADE MAILY DHARMA CHAVADI - Website

A professionally polished, multi-page spiritual heritage website with admin authentication system.

## Project Structure

### Pages
1. **HOME** (`/`) - Premium hero section with official name and introductory content
2. **OLD SANA** (`/oldsana`) - Dedicated page for "JUMADHI BANTA MAISANDHAYA DHAIVASTHANA"
3. **GALLERY** (`/gallery`) - Responsive CSS Grid gallery with admin image management
4. **CALENDAR** (`/calendar`) - Interactive monthly calendar with admin event management

### Components
- **Navigation** - Global navigation menu linking all 4 pages
- **AdminLoginModal** - Hardcoded admin authentication system
- **Gallery Page** - Dynamic image management with admin controls
- **Calendar Page** - Fully functional interactive calendar with special day management

## Admin Authentication

### Credentials
- **Email**: `aranthadedharmachavadi@gmail.com`
- **Password**: `gandhaprasada`

### Protected Features

#### Gallery Management
1. Click "+ Add Images to Gallery" button
2. Login with admin credentials
3. Enter image URL and caption
4. Submit to prepend new image card to gallery

#### Calendar Management
1. Click "+ Add New Event / Special Day" button
2. Login with admin credentials
3. Enter event name and date
4. Submit to add special day badge to calendar

### Security Features
- Instant rejection of invalid credentials
- Access denied alert message
- No generic alerts on successful login
- Clean modal closure after authentication
- Client-side validation

## Design & Styling

### Color Scheme (Saffron & Gold)
- **Primary**: Deep Saffron (#C37107)
- **Secondary**: Gold (#C0A050)
- **Background**: Clean White
- **Text**: Dark Charcoal
- **Accents**: Gold overlays and spiritual flourishes

### Modern Features
- Dark overlay on hero images (60% opacity)
- Smooth animations and transitions
- Responsive grid layouts
- Hover effects on interactive elements
- Professional typography with serif headers

## Technical Stack

- **Framework**: Next.js 16.2
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Next.js Image optimization with Vercel Blob storage
- **State Management**: React hooks

## File Structure

```
app/
├── page.tsx                 # Home page
├── layout.tsx               # Root layout
├── globals.css              # Global styles with saffron/gold theme
├── oldsana/
│   └── page.tsx            # Old Sana page
├── gallery/
│   └── page.tsx            # Gallery page with admin controls
└── calendar/
    └── page.tsx            # Calendar page with admin controls

components/
├── Navigation.tsx           # Global navigation component
└── AdminLoginModal.tsx      # Admin authentication modal

lib/
└── auth.ts                  # Authentication utilities
```

## Features Implemented

✅ Multi-page architecture with separate navigation
✅ Hardcoded admin authentication system
✅ Gallery with dynamic image management
✅ Interactive calendar with special day management
✅ Professional saffron & gold color scheme
✅ Responsive design for all screen sizes
✅ Smooth animations and transitions
✅ Hero sections with background images
✅ Clean, modern UI with semantic HTML
✅ Full TypeScript support

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` to see the website.

## Navigation Menu
- Home (/)
- Old Sana (/oldsana)
- Gallery (/gallery)
- Calendar (/calendar)

## Admin Actions

### Gallery
- Click "+ Add Images to Gallery"
- Authenticate with admin credentials
- Add image URL and caption
- New images prepend to gallery grid

### Calendar
- Click "+ Add New Event / Special Day"
- Authenticate with admin credentials
- Enter event name and select date
- Special days highlight on calendar with event name badge

## Content Management
All content is dynamically managed through React state. To make it persistent, integrate with a backend database (Neon, Supabase, etc.).
