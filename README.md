# Bibipop · Little moments, big growing hearts

Bibipop is our Singapore Management University capstone consulting project for Sisterhood. We proposed a children’s vitamin gummy brand built around a daily routine parents can feel confident about and children can help make their own. The website brings that proposal to life through brand artwork, a monthly subscription box, and a family pop-up launch.

**[Explore the Bibipop website](https://owenlim112.github.io/bibipop-submission/)**

![Concept view of the four Bibipop Village booths](assets/village-concept-overview-2026.png)

## Explore the site

The six chapters follow the project from **Meet Bibipop** through **GTM Strategy**, **Marketing & Communications**, **The Subscription Box**, **Bibipop Village**, and **Our Consulting Journey**.

## Try the interactive features

- **Spatial navigation.** Click an illustrated object on the overview to zoom into its chapter. Choose **Follow the Project** to go through the chapters in order.
- **4Ps map.** Select a point on the map to explore Product, Promotion, Place, or Price.
- **3D subscription kit.** Open the box and drag to rotate the box or bottle. Press and hold the squishy bottle to squeeze it, or select the activity booklet to take a closer look.
- **Village Explorer.** Select a booth on the village map to see its design and role in the visit.
- **Interactive passport.** Flip through the eight illustrated pages in **Bibipop Village**. [View the full passport artwork](exports/Bibipop-Village-Passport-All-8-Pages.png).

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

This site presents our capstone proposal and prototypes.

Created by **Ang Bin Heng, Giselle Tan, Isabelle Tay, Owen Lim, Reimi Ho, and Zhang Xintong** for our Singapore Management University capstone project.

*Our Capstone Project, With Love ♥*
