---
name: ASPIRE Stargate
description: Integrated nickel from North Konawe, cut into laterite benches and labelled with aluminium nursery tags.
colors:
  laterite: "#9c3b1e"
  laterite-deep: "#6f2714"
  laterite-night: "#3d160b"
  limonite: "#b5532a"
  ochre: "#c98a3c"
  ochre-pale: "#f1dcb8"
  on-laterite: "#fff4ec"
  on-laterite-2: "#f4d2c0"
  net: "#161816"
  net-2: "#232622"
  net-3: "#3a3e39"
  on-net: "#eef0ec"
  on-net-2: "#b9beb6"
  alu-hi: "#f4f5f2"
  alu: "#e6e8e3"
  alu-lo: "#d3d7cf"
  alu-line: "#aeb4ab"
  ink: "#161816"
  ink-2: "#474c46"
  leaf: "#2f6a26"
  leaf-hi: "#8fcf68"
typography:
  display:
    fontFamily: "'Big Shoulders Stencil Display Variable', 'Archivo Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.75rem, 1.2rem + 6.4vw, 6rem)"
    fontWeight: 860
    lineHeight: 0.86
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "'Big Shoulders Stencil Display Variable', 'Archivo Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 4.4vw, 5rem)"
    fontWeight: 840
    lineHeight: 0.9
  title:
    fontFamily: "'Big Shoulders Stencil Display Variable', 'Archivo Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.8vw, 3.5rem)"
    fontWeight: 820
    lineHeight: 0.95
  title-sm:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 760
    lineHeight: 1.1
    fontVariation: "'wdth' 82"
  lead:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    lineHeight: 1.45
    fontVariation: "'wdth' 94"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 640
    lineHeight: 1.3
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 125"
    fontFeature: "'tnum'"
  button:
    fontFamily: "'Archivo Variable', 'Archivo', 'Arial Narrow', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 680
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 118"
rounded:
  focus: "2px"
  photo: "3px"
  panel: "4px"
  button: "5px"
  tag: "7px"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.5rem"
  s-6: "2rem"
  s-7: "3rem"
  s-8: "4.5rem"
  s-9: "clamp(4.5rem, 9vw, 8rem)"
  gutter: "clamp(16px, 4vw, 48px)"
  step: "clamp(22px, 3vw, 40px)"
  wrap: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.net}"
    textColor: "{colors.on-net}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0.85em 1.25em 0.8em"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.leaf}"
    textColor: "#ffffff"
  button-plate:
    backgroundColor: "{colors.alu-hi}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0.85em 1.25em 0.8em"
    height: "48px"
  button-plate-hover:
    backgroundColor: "{colors.leaf}"
    textColor: "#ffffff"
  button-line-hover:
    backgroundColor: "{colors.leaf}"
    textColor: "#ffffff"
  nursery-tag:
    backgroundColor: "{colors.alu}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "0.7rem 0.95rem 0.75rem 2.15rem"
  nursery-tag-hover:
    backgroundColor: "{colors.alu-hi}"
    textColor: "{colors.leaf}"
  placeholder-tbd:
    backgroundColor: "{colors.ochre-pale}"
    textColor: "{colors.laterite-night}"
    rounded: "{rounded.panel}"
    padding: "0.2em 0.55em"
---

# Design System: ASPIRE Stargate

## Overview

**Creative North Star: "Benches & Nursery Tags"**

The site is cut into the same red laterite ground as the mine. Sections are not stacked cards; they are terraces of one continuous terrain, separated by a stepped bench edge whose ochre contour turns leaf green as each terrace scrolls into view. The reading surface is matte tag aluminium; the structural ink is shade-net black; the drenched bands are laterite. Every labelled thing (an operation, a sub-page, the logo itself) is a stamped aluminium nursery tag with a punched hole, the object a reclamation nursery hangs on a seedling.

The voice is industrial and documentary rather than corporate-glossy. Stencil mine-signage display type carries headlines and figures in uppercase; a variable-width grotesque does the reading and the stamping. Density is moderate: generous section padding, tight internal stacks, ledgers instead of KPI tiles. Claims carry a provenance line; missing facts are shown as visible `[TO UPDATE]` placeholders, never filled in.

Green is earned, not decorative. It marks what the visitor is touching or has reached (focus ring, hover, current page, pressed filter, the reached bench contour), echoing the thesis that restoration is the read position.

**Key Characteristics:**
- Three grounds only: laterite, shade-net, aluminium (plus a lighter aluminium step).
- Stepped bench SVG edges between sections; contours are the rule system.
- Nursery tags as the component family: flat matte plate, 7px corners, mask-punched hole.
- Status is encoded by line form, never by colour.
- Stencil uppercase display; Archivo for text and stamped labels.
- Flat surfaces; depth comes from cuts and grounds, not shadows.

## Colors

An earth palette of fired red laterite, ochre subsoil, shade-net black and matte aluminium, with one reserved living green.

### Primary
- **Laterite Red** (laterite): drenches the hero ground, page heads and the custody band; text selection, caret and scrollbar thumb. The page's identity colour and `theme-color`.
- **Deep Laterite** (laterite-deep): darker drenched band (`ground-deep`) and the photo backdrop while images load; the `[TO UPDATE]` mark text.
- **Laterite Night** (laterite-night): text on ochre-pale placeholders.

### Secondary
- **Ochre Subsoil** (ochre): the default bench contour stroke and the placeholder's dashed border. Structure, never fill.
- **Pale Ochre** (ochre-pale): placeholder ground; dashed outline of empty photo slots on laterite.

### Tertiary
- **Leaf** (leaf): focus ring on light grounds; hover fill for buttons; hover/current colour for tag names, list titles and map pins; pressed filter chips.
- **Fresh Leaf** (leaf-hi): focus ring and current-page marker on dark and laterite grounds; the end state of the bench contour's re-greening; the active rail tick.

### Neutral
- **Tag Aluminium** (alu): the default reading ground and the tag plate.
- **Bright Aluminium** (alu-hi): the alternate light terrace, tag hover, the plate button.
- **Aluminium Line** (alu-line): tag borders, ledger and rule-list dividers.
- **Shade Net** (net): dark terraces, header menu panel, footer, default button fill; also the ink colour (ink).
- **Net Rule** (net-3): dividers and bench contours on shade-net.
- **On-Net / On-Laterite** (on-net, on-laterite, and their -2 muted steps): text on the dark and red grounds.
- **Ink Muted** (ink-2): secondary text, provenance lines, tag numbers.

### Named Rules
**The Earned Green Rule.** Leaf and Fresh Leaf appear only on an interaction state: focus, hover, current, pressed, or reached. Never as a fill, background band, illustration colour or status colour at rest.

**The Three Grounds Rule.** Every section sits on aluminium, laterite or shade-net (one of the five `ground-*` treatments). New surfaces pick a ground; they do not introduce a fourth.

## Typography

**Display Font:** Big Shoulders Stencil Display (variable, self-hosted), falling back to Archivo Variable and Arial Narrow
**Body Font:** Archivo Variable (width axis), falling back to Archivo, Arial Narrow and system sans
**Label Font:** Archivo Variable at expanded width (125%)

**Character:** Mine-signage stencil set tall and uppercase against a working grotesque whose width axis does the expressive work: condensed for names, expanded for stamps.

### Hierarchy
- **Display** (860, clamp 2.75 to 6rem, 0.86, uppercase): the home headline only; one statement per line.
- **Headline** (840, clamp 2.5 to 5rem, 0.9, uppercase): page-head h1 and the careers band; max 14ch in page heads.
- **Title** (820, clamp 2 to 3.5rem, 0.95, uppercase): section h2s and large figure statements. Block titles on detail pages use the same face at clamp 1.5 to 2.25rem over a 3px ink rule.
- **Title Small** (Archivo 760, width 82%, clamp 1.25 to 1.6rem, 1.1): h3s, list-row titles, operation names. Sentence case.
- **Lead** (Archivo, width 94%, clamp 1.125 to 1.375rem, 1.45, max 46ch): the paragraph under a headline.
- **Body** (Archivo 400, clamp 1 to 1.0625rem, 1.6): prose at max 68ch.
- **Label / Stamp** (Archivo 640, width 125%, 0.75rem, 0.09em tracking, uppercase, tabular figures): tag numbers, status words, dates, breadcrumbs, provenance labels, footer column heads.

### Named Rules
**The Stencil-Is-For-Headings Rule.** The stencil face sets display, h1, h2, block titles, big figures and the mobile menu links. It never sets body text, h3s, labels or buttons.

**The Fast Line Rule.** Every section head is followed by one summary line on a 1px currentColor top rule, opened by a stamped dash: the fast version before the detail.

## Layout

A single centred column (`wrap`, 1240px max, fluid gutter 16 to 48px) on full-bleed grounds. Section padding is a fluid 4.5 to 8rem (`s-9`), tightened to 4.5rem where needed. The spacing scale runs 0.25rem to 4.5rem in eight steps.

The bench riser (`step`, 22 to 40px) is the layout's vertical module: bench edges are three steps tall and overlap the previous section by the same amount; the home operations staircase drops each column by 0.9 step so six operations descend from exploration to battery materials.

Two-column content uses a 5:7 split (or 7:5, or even) from 900px, with a sticky intro column that releases below 900px. The header nav collapses into a full-screen shade-net menu below 1180px; the contour rail appears only at 1360px and wider. Fact tables scroll horizontally inside their own container on narrow screens.

## Elevation & Depth

The system is flat. Depth is conveyed by cuts, not lift: bench edges overlapping the section above, a stepped clip-path on bench-cut photos, the tag hole masked through to the ground beneath, and the change of ground from aluminium to laterite to net.

### Shadow Vocabulary
- **Floating plate** (`box-shadow: 0 0 0 1px var(--alu-line), 0 24px 40px -28px rgb(22 24 22 / 0.6)`): the few panels that float over a ground (site map card, product figure, contact panel). Soft, low, never offset.
- **Legibility shade** (`text-shadow: 0 1px 12px rgb(0 0 0 / 0.35)`, and a 150px top gradient of net at 55%): header text over photography only.

### Named Rules
**The Cut-Not-Lift Rule.** Separate surfaces by cutting them (bench edge, clip-path, mask, ground change), not by stacking shadows. Tags and buttons have no shadow.

## Shapes

Small, practical corners: 7px on tags and the hanging logo plate, 5px on buttons, 4px on placeholders and floating panels, 3px on photos, 2px on focus outlines. Rectilinear stepped geometry is the recurring silhouette: bench edges are orthogonal step paths, bench-cut photos lose a stepped lower edge, the home operations descend in steps, and the contour rail ticks lengthen step by step. Rules carry meaning: 3px for primary edges and status, 1px for hairlines and dividers, 2px for table heads.

## Components

### Buttons
Stamped and plain: uppercase expanded Archivo on a solid plate.
- **Shape:** gently squared (5px), min height 48px, 1.5px border in the fill colour.
- **Primary:** shade-net fill, on-net text.
- **Plate:** bright aluminium fill, ink text; the button on laterite and in the header.
- **Line:** transparent with a currentColor border; the secondary action on any ground.
- **Hover / Focus:** all variants fill with leaf and white text on hover; the trailing arrow icon nudges 3px right; active presses down 1px. Focus is the 3px leaf (or fresh-leaf on dark grounds) outline at 3px offset. Disabled is 55% opacity.

### Nursery Tag (signature)
The component family. A flat matte aluminium plate (alu, 1px alu-line border, 7px corners) with a hole punched by a CSS radial mask at 1.12rem from the left edge, so the ground shows through. Content stacks: stamped number and entity code, a condensed bold name (Archivo 780, width 78%), then stage and status. As a link it lifts 2px with a -0.4deg tilt on hover, brightens to alu-hi, and its name turns leaf; the current page also takes a leaf name and, in sub-navigation, an ink border. Because the mask clips outside the plate, focus is an inset outline (-5px offset). The header logo is the same object hanging from the top edge with its hole at the top centre.

### Status
A 1.9rem line followed by a stamped word. Solid 3px is operating; dashed is construction; dotted is exploration; 1px hairline is planned. The same line forms carry onto the top edge of each operation's staircase tread, and a key line explains them.

### Bench Edge (signature)
A full-width SVG step profile (three shapes, a, b, c) placed between sections, filled with the next section's ground and stroked with an ochre contour (net-3 on shade-net). Where scroll-driven animation is supported and motion is allowed, the contour re-greens to fresh leaf and thickens from 2 to 3px as the section enters view; otherwise it stays static.

### Contour Rail
A fixed left-edge section index at 1360px and wider. Ticks are laterite 3px lines, each a little longer than the last; sections passed turn a leaf-laterite mix, the current one fresh leaf at full length. Labels appear as small aluminium stamps on hover or focus. Plain anchor links without script.

### Provenance Line
A muted small line (0.8125rem) opened by a stamp label (Photo, Source) naming where a figure or image came from. Muted colour adapts per ground. Every shipping figure and photo carries one.

### Placeholder `[TO UPDATE]`
A pale-ochre field with a 1.5px dashed ochre border and 4px corners, opened by the literal `[TO UPDATE]` mark in expanded bold deep laterite. Inline for missing figures; block form (with a condensed title) for missing photos and sections. It must stay findable by search and visibly unfinished.

### Ledger
Fact tables, not cards: full width, 1px alu-line row rules, a 2px ink rule under column heads, muted row headers at 38% width, right-aligned tabular numbers.

### Navigation
Desktop: condensed Archivo 620 links on the photo, underlined on hover with a 2px currentColor bottom border, fresh-leaf border for the current page. Mobile: a plate button opens a full-screen shade-net panel with stencil uppercase links between net-3 hairlines; the current page is fresh leaf. A language switch stamp sits beside a plate Contact button.

## Do's and Don'ts

### Do:
- **Do** put every section on one of the three grounds and separate grounds with a Bench Edge filled with the next ground.
- **Do** label operations, entities and sibling pages with Nursery Tags.
- **Do** show status by line form (solid, dashed, dotted, hairline) and include a key where several appear together.
- **Do** attach a Provenance Line to every figure and photograph.
- **Do** render every missing fact as a `[TO UPDATE]` placeholder rather than an invented value.
- **Do** keep leaf for focus, hover, current, pressed and reached states, with fresh leaf on dark and laterite grounds.
- **Do** open dense sections with the fast line under the heading.

### Don't:
- **Don't** use leaf green as a background, illustration or status colour at rest.
- **Don't** encode status with colour or coloured badges.
- **Don't** set body copy, h3s, labels or buttons in the stencil face.
- **Don't** add drop shadows to tags, buttons or section surfaces; cut them instead.
- **Don't** replace the operations stair or fact ledgers with KPI counters or a card grid.
- **Don't** return to the old aspire.id look: rigid template blocks, generic nature imagery, navy corporate sans.
