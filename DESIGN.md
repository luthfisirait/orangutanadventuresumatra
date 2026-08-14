---
name: Orangutan Adventure Sumatra
description: A field-expedition visual system for planning ethical Bukit Lawang treks.
colors:
  canopy-ink: "#071b14"
  forest: "#0b3524"
  leaf: "#17613d"
  mist: "#edf1e7"
  field-paper: "#f8faf3"
  white: "#ffffff"
  signal: "#d8ff3e"
  river-ink: "#0e6b76"
  river-bright: "#32a8b5"
  amber: "#ffb51b"
  russet: "#a84322"
  steel: "#b9c3ba"
typography:
  display:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "6rem"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "0"
  headline:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "4rem"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "0"
  body:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Source Sans 3, Segoe UI, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0"
rounded:
  square: "0"
  utility: "2px"
  circle: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.canopy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.utility}"
    padding: "0 22px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.field-paper}"
    typography: "{typography.body}"
    rounded: "{rounded.utility}"
    padding: "0 22px"
    height: "48px"
  field-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.canopy-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.utility}"
    padding: "0 14px"
    height: "48px"
  route-card:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.canopy-ink}"
    rounded: "{rounded.square}"
    padding: "32px"
---

# Design System: Orangutan Adventure Sumatra

## Overview

**Creative North Star: "Forest Transect"**

The interface borrows its authority from rainforest fieldwork: numbered trail tags, waterproof route charts, measured observation, and equipment made to be read outdoors. Real photography supplies emotion and proof; the system around it supplies orientation. The result feels local, capable, and specific rather than luxurious, generic, or over-polished.

The visual world stays useful across persuasive, booking, and editorial surfaces. A continuous route can organize a trek, a page, or a process. Field markers label duration, camp nights, ethical rules, and booking states only when those labels carry real information.

**Key Characteristics:**
- Documentary photography at decisive scale.
- Strong black structural rules and measured grid alignment.
- High-visibility field colors used as functional signals.
- Route lines, trail tags, and coordinates that carry real information.
- Direct, human copy grounded in Bukit Lawang.

## Colors

The full palette combines canopy shade, survey tape, river water, orangutan russet, and galvanized field equipment. Forest and mist own large regions; signal, river bright, amber, and russet identify route, action, or state.

### Primary
- **Canopy Ink:** Structural text, dark navigation, ethics bands, and the deepest photographic overlays.
- **Forest:** Full-width route sections and dark supporting surfaces.
- **Field Signal:** Primary actions, active routes, numbered trail markers, and visible focus rings.

### Secondary
- **River Ink:** Links, icons, and small text that require AA contrast on light surfaces.
- **River Bright:** Large colored fields and section boundaries paired with Canopy Ink.
- **Orangutan Russet:** Prices, route labels, and editorial metadata.
- **Camp Amber:** Small icons and secondary field signals on dark surfaces.

### Neutral
- **Forest Mist:** Main page ground and survey-grid canvas.
- **Field Paper:** Route cards and readable content surfaces.
- **Galvanized Steel:** Quiet borders and muted equipment references.

**The Field Signal Rule.** Bright colors mark action, route, or state. They are never scattered as decoration.

**The Contrast Pair Rule.** River Bright always carries Canopy Ink; River Ink is the text-safe blue on light surfaces.

## Typography

**Display Font:** Archivo Narrow (with Arial Narrow fallback)
**Body Font:** Source Sans 3 (with Segoe UI fallback)

**Character:** The display face reads like durable outdoor signage without becoming militaristic. The body face remains calm, international, and highly legible for practical trip planning.

### Hierarchy
- **Display** (700, 6rem desktop / 3.1rem mobile, 0.88): Hero offers and major guide names only.
- **Headline** (700, 4rem desktop / 2.8rem mobile, 0.94): Primary section statements.
- **Title** (700, 2.35rem, 0.98): Trek names and major content items.
- **Body** (400-600, 1rem-1.17rem, 1.55-1.75): Practical copy, with a preferred measure of 58-72 characters.
- **Label** (800, 0.76rem, 0): Real route, category, location, and state labels.

**The Outdoor Read Rule.** Headings stay bold and compact, body copy stays generous, and no text crosses a structural route line.

## Layout

The base composition is a transect. A strong route anchors the page while content changes scale around real milestones. The primary container is 1240px with 16px minimum mobile gutters. Desktop can use offset columns, alternating media positions, and full-width color fields. Mobile turns the route into a single spine and keeps the same bar thickness instead of shrinking the desktop composition.

The first viewport is capped by a fixed navigation field and ends with the booking highlight strip visibly entering the fold. Section pacing alternates dense comparison, full-bleed photography, quiet reading, and decisive action. Breakpoints settle at 1060px for major structural collapse and 700px for the single-column mobile system.

## Elevation & Depth

The system is flat and physical. Depth comes from image layering, solid color fields, strong rules, and offset shadows that resemble stacked field sheets. Wide soft shadows and ornamental glow are not part of the vocabulary.

### Shadow Vocabulary
- **Mounted Sheet** (`9px 9px 0 rgba(7, 27, 20, 0.16)`): Booking strips and framed tools.
- **Field Card** (`7px 7px 0 rgba(7, 27, 20, 0.13)`): Repeated reviews and editorial cards.
- **Navigation Rail** (`8px 8px 0 rgba(7, 27, 20, 0.24)`): Fixed navigation over photography.

**The Equipment Rule.** Surfaces feel printed, tagged, clipped, or mounted, not softly floating.

## Shapes

Primary surfaces are square. Utility controls and form fields use a restrained 2px radius. Fully rounded shapes are limited to avatars, status dots, and circular icon controls such as floating WhatsApp access.

## Components

### Buttons
- **Shape:** Practical utility corners (2px), minimum 48px height.
- **Primary:** Field Signal with Canopy Ink and a compact offset shadow.
- **Hover / Focus:** Amber hover for primary actions; the focus ring is a 3px Field Signal outline with 4px offset.
- **Secondary:** Transparent or dark Forest fill with a high-contrast 1px rule.

### Chips
- **Style:** Square 2px corners, transparent background, 1px Canopy Ink rule.
- **State:** Active package filters fill with Field Signal; metadata stays neutral and compact.

### Cards / Containers
- **Corner Style:** Square or 2px only.
- **Background:** Field Paper or white.
- **Shadow Strategy:** Offset sheet shadows; never combine a wide soft shadow with a full border.
- **Border:** 1-2px Canopy Ink or context-tinted rule.
- **Internal Padding:** 24-34px desktop and 20-24px mobile.

### Inputs / Fields
- **Style:** White field, 1px Canopy Ink rule, 2px corners, 48px minimum height.
- **Focus:** Canopy Ink border with a 3px Field Signal outer ring.
- **Error / Disabled:** Russet communicates errors; disabled controls retain legible text and reduced contrast without hiding state.

### Navigation
- **Style:** Fixed Canopy Ink rail with logo, direct text routes, language selector, and one Field Signal WhatsApp action. Mobile keeps language, WhatsApp icon, and menu controls at 44px minimum.

### Route Card
- **Style:** A documentary image and factual body sit on a continuous Field Signal spine. Alternating desktop media positions become a consistent image-first stack on mobile.

## Do's and Don'ts

### Do:
- **Do** use real forest, wildlife, guide, camp, and river imagery as proof.
- **Do** connect sections with a meaningful route or field-marker sequence.
- **Do** make prices, duration, intensity, and booking actions easy to compare.
- **Do** keep wildlife language ethical and avoid implied guarantees.
- **Do** preserve 44px minimum targets and visible keyboard focus.

### Don't:
- **Don't** build pages from repeated generic icon cards.
- **Don't** use field notation as decorative jargon.
- **Don't** soften the system into beige eco-luxury styling.
- **Don't** put cards inside cards; use rules and lists inside framed tools.
- **Don't** let graphic expression obscure the route to booking or WhatsApp.
