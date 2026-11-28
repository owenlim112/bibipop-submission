# Bibipop · Little moments, big growing hearts

Bibipop is our Singapore Management University capstone consulting project for Sisterhood. We proposed a children’s vitamin gummy brand built around a daily routine parents can feel confident about and children can help make their own. The website brings that proposal to life through brand artwork, a monthly subscription box, and a family pop-up launch.

**[Explore the Bibipop website](https://owenlim112.github.io/bibipop-submission/)**

![Concept view of the four Bibipop Village booths](assets/village-concept-overview-2026.png)

## Why we built this site

Our brief was to propose how Sisterhood could introduce Bibipop to families in Singapore and make the daily gummy routine something parents and children could share. We built the site so our client and assessors could see how the brand, subscription and launch work together, try the prototypes, and follow the decisions that shaped the proposal.

Each of the six illustrated objects on the overview zooms into a chapter. Choose **Follow the Project** to start with the brand and go through the chapters in order, or select the object you want to explore.

## The six chapters

### 1. Meet bibipop!

We introduce the children’s vitamin gummy brand we proposed for Sisterhood and the two audiences it needs to speak to. Parents want clear, reassuring information about what they give their children, while children need a reason to take part in the daily routine. The chapter shows how the brand’s positioning, visual identity and tone of voice support both, with Bibi giving children a character they can recognise across the experience.

- **Visual identity** shows the colour palette, typography and logo in use.
- **Voice & Bibi** introduces the mascot, its expressions and how the brand speaks to families. [Open the brand deck](assets/bibipop-brand-guidelines.pdf).

### 2. Subscription Box

The subscription pairs a regular gummy refill with an activity families can do together. The reusable bottle becomes part of the daily routine, while the changing activity gives children something to look forward to when the box arrives. The chapter shows how the packaging, bottle and booklet work as a kit, and how the experience can feel familiar from month to month while still giving families something new to try.

- **Interactive space-themed box** appears first and stays expanded for easy exploration. The coral design and its top-down contents appear below.
- **Squishy bottle and activity booklet** let you squeeze the bottle and take a closer look at the booklet. Explore the Kit shows the coral design from two angles.

- **Box dimensions and printable guidelines** include the 13-page coral template: 200 × 130 × 50 mm assembled, with A2 or four-sheet A4 long-edge duplex printing, exterior/interior previews and assembly instructions.

- **Subscription planning** explains 30-gummy monthly pouches, first-month keychains, 12 activity ideas and cost ranges, and in-house versus part-time fulfilment at 125–250, 250–800 and 800–2,000 units per month.

### 3. GTM Strategy

This chapter explains how we would bring Bibipop to market in Singapore. It connects what we learnt about parents and the category to decisions about what the subscription offers, how families first hear about Bibipop, where they can try or buy it, and how the offer is positioned. Together, these decisions show how the brand could build trust before a first purchase and give families a reason to keep using it.

- **Interactive 4Ps map** lets you select a stop to explore Product, Promotion, Place or Price.
- **Research behind the recommendations** shows what informed the decisions and how the four parts of the strategy fit together.

### 4. Marketing & Communications

Follow the campaign from a parent’s first encounter with Bibipop to the point where they might consider a trial or subscription. The chapter shows what the brand would say at different stages, from introducing the daily ritual to answering questions and showing how the kit works at home. It also explains how the team would coordinate the launch and keep communicating with families throughout the year.

- **Customer journey and campaign examples** show the messages families would encounter, with sample content and creator profiles.
- **Switchable calendars** let you look through the 12-week launch plan and the one-year organic content and paid media schedules.

### 5. bibipop! Village Launch

Bibipop Village is our proposed family pop-up launch. Families start at Village Square, customise a charm at Charm Market, sample gummies at Gummy Shop and ask questions at Village Hall. Children collect stamps along the way and can earn the Village Chief badge. The chapter also shows how the four booths could fit into a mall atrium and how their layout supports a visit that combines play, product discovery and conversations with parents.

- **Village Explorer** lets you select each booth, see its design and understand what happens there.
- **Flip-through Village Passport** lets you turn the illustrated pages, follow the booth route and see how the stamps lead to the Village Chief badge.

### 6. Our Journey

This chapter reflects on applying #Empathy and #FeelAlive as we developed bibipop!. Each story explains what excited us, how we imagined it working, what made us pause and where we landed: parking the Montigo-dependent collaboration, scaling the Village from nine areas to four booths, and turning messy subscription ideation into a practical box-making, costing and fulfilment guide. It preserves our initial mockups and the thinking behind the recommendations.

- **Peek at Our Thinking** shows the questions and trade-offs we considered as the ideas developed.
- **Concept comparisons and early mockups** show the Village before and after the redesign, along with early subscription box designs.

## Run locally

The site uses **HTML, CSS, and JavaScript**, with **Three.js/WebGL** for the 3D models. A desktop browser is best for the full 3D experience. The site also adapts to smaller screens.

| File or folder | Purpose |
| --- | --- |
| `index.html` | Main interactive site |
| `assets/` | Artwork, fonts, textures, and supporting documents |
| `exports/` | Flat passport artwork |
| `passport.html` | Standalone interactive passport |
| `.nojekyll` | Serves the prepared files directly on GitHub Pages |

Run this command from the repository root, then open [localhost:8000](http://localhost:8000).

```bash
python -m http.server 8000
```

## Update GitHub Pages

1. Extract the GitHub Pages ZIP. In GitHub Desktop, select the existing `bibipop-submission` repository on `main`, then fetch and pull any updates.
2. Copy the extracted contents into the repository root, including `.nojekyll`. Preserve the `assets/` and `exports/` folder structure.
3. Commit and push to `main`. In **Settings → Pages**, use **Deploy from a branch** with `main` and `/(root)`. Check the [published site](https://owenlim112.github.io/bibipop-submission/) after deployment.

## Project status and credits

Created by **Ang Bin Heng, Giselle Tan, Isabelle Tay, Owen Lim, Reimi Ho, and Zhang Xintong** for our Singapore Management University capstone project.

*Our Capstone Project, With Love ♥*
