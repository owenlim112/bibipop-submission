# Bibipop — Little moments, big growing hearts

An interactive website presenting our SMU capstone consulting project: a proposed children's vitamin gummy brand that brings together parental reassurance, playful discovery and shared family routines.

**[Explore the live website](https://owenlim112.github.io/bibipop-submission/)**

![Bibipop Village concept overview](assets/village-concept-overview-2026.png)

## About the project

Bibipop explores how a children's supplement brand can create value through the experience surrounding the product. Our proposal connects a recognisable brand identity, a reusable squishy bottle, a monthly subscription experience and a family-focused launch campaign.

The website brings our research, recommendations and prototypes into one place. It is designed as an explorable presentation, allowing viewers to follow the project story or jump directly into the ideas that interest them.

## Explore the website

The home screen contains five clickable objects. Each opens a different part of the project through a spatial zoom transition.

| Section | What you can explore |
| --- | --- |
| **Meet Bibipop** | Brand positioning, visual identity, Bibi the mascot and the brand deck. |
| **The Strategy** | Our go-to-market recommendations, organised around Product, Price, Place and Promotion. |
| **The Subscription** | The proposed monthly experience, including the box, gummy refills, squishy bottle and parent–child activities. |
| **The Launch** | Bibipop Village: the proposed pop-up campaign, booth experiences, visitor journey and operational planning. |
| **Our Journey** | The research, design rationale and feasibility decisions behind the recommendations. |

## Interactive features

- **Spatial navigation:** zoom into the main objects, explore their sections and return to the overview.
- **Visual strategy map:** explore the marketing mix through themed islands and supporting explanations.
- **Subscription experience:** view the opening-box presentation, inspect the 3D box and bottle, try the bottle's squeeze interaction and browse activity concepts.
- **Village Explorer:** select named booth callouts to view each booth and understand its role in the family journey.
- **Concept and mall views:** compare the village concept with an example of the pop-up in a mall atrium.
- **Interactive passport:** flip through eight illustrated pages, including the village map, stamp spaces, Village Chief checkpoint and a page for family memories.
- **Bibi's brand world:** coordinated colours, Sniglet and Nunito typography, mascot artwork and playful desktop cursor effects connect the experience.

## Bibipop Village

The launch proposal introduces the brand through four connected experiences, with Village Square serving as the beginning and end of the visit.

| Booth | Experience |
| --- | --- |
| **Village Square** | Welcome, passport collection, passport submission and cashier. |
| **Charm Market** | A DIY workshop where parents and children customise charms together. |
| **Gummy Shop** | Supervised product sampling with parental consent. |
| **Village Hall** | Parent education, product information and Q&A. |

Families collect stamps as they explore the booths and return to Village Square to complete their journey and receive a **Village Chief badge**. The passport features Bibi in a crown and cape, linking the cover artwork to the completion reward.

The Village section also explains the proposed visitor flow, manpower, capacity, costs and location strategy.

## How to use the demo

1. Select an object on the home screen, or use the guided project journey.
2. Use the section tabs and menus to explore the content and interactive features.
3. In **The Launch → Visitor Journey → Village Passport**, use **Previous** and **Next** to turn the passport pages.
4. Use the back control to return to the overview and explore another section.

A desktop browser is recommended for the full 3D experience. Responsive layouts are included for smaller screens.

## Passport artwork

[View all eight passport pages as one flat PNG](exports/Bibipop-Village-Passport-All-8-Pages.png).

The export includes the cover, welcome page, village map, two stamp pages, Village Chief checkpoint, memories page and back cover.

## Built with

The website uses **HTML, CSS and JavaScript**, with **Three.js/WebGL** for its 3D experiences. It is a static site hosted on **GitHub Pages**; no backend or build step is required to serve the prepared files.

| File or folder | Purpose |
| --- | --- |
| `index.html` | Main interactive website. |
| `assets/` | Artwork, fonts, textures, passport pages and supporting documents. |
| `exports/` | Flat passport artwork for viewing and sharing. |
| `passport.html` | Standalone preview of the interactive passport. |
| `.nojekyll` | Keeps the prepared static files outside Jekyll processing. |

### Local preview

From the repository folder, start a local server:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

When updating the hosted site, keep `index.html` at the repository root and preserve the `assets/` and `exports/` folder structures.

## Project status

This website is an academic concept demonstration. Product designs, subscription details, pricing, budgets and activation plans represent proposals for evaluation and further development.

## Our team

Created by **Ang Bin Heng, Giselle Tan, Isabelle Tay, Owen Lim, Reimi Ho and Zhang Xintong** as part of our Singapore Management University capstone project.

*Our Capstone Project, With Love ♥*
