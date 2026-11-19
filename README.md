# Bibipop · Capstone Website

A static website for reviewing the Bibipop brand, go-to-market strategy, subscription experience, Village launch and consulting journey.

## Update the Existing GitHub Pages Site

1. Download and extract the ZIP. Use the extracted contents, not the ZIP itself.
2. Open **GitHub Desktop** and select the existing **bibipop-submission** repository and **main** branch.
3. Click **Fetch origin**, then **Pull origin** if offered, before copying your updates.
4. Select **Repository → Show in Explorer** to open the cloned repository folder.
5. Copy this package's **index.html**, complete **assets** and **exports** folders, **passport.html**, **README.md** and **.nojekyll** into that folder. Replace matching files and preserve the assets folder structure.
6. Return to GitHub Desktop, enter a short update summary, click **Commit to main**, then **Push origin**.
7. On GitHub, **Settings → Pages** should use **Deploy from a branch**, branch **main**, folder **/(root)**. Keep this setting for automatic updates. Free GitHub Pages hosting requires a public repository; the website is publicly accessible.
8. Wait for deployment, then review **https://owenlim112.github.io/bibipop-submission/**. Publication can take up to 10 minutes. Use Ctrl+Shift+R to refresh an older cached version.

For an initial setup, clone your existing GitHub repository with **File → Clone repository** in GitHub Desktop before following the steps above. There is no need to add a new local repository for each update.

## Expected Repository Contents

- index.html — the website entry point, directly at the repository root.
- assets/ — images, textures, fonts and PDF documents. Keep filenames and structure intact.
- .nojekyll — serves the prepared static files without Jekyll processing.
- README.md — these instructions.

The package includes the latest village art, interactive passport, crowned Bibi cover and Chief badge. Each file is below GitHub's 25 MiB browser-upload limit. Use GitHub Desktop to upload the complete package together; GitHub's browser uploader accepts at most 100 files per batch. No Node.js install, build command, backend, API key or Git LFS is needed.

## Review After Publication

- Open each of the five main objects.
- Open the subscription box, inspect its 3D box and bottle, squeeze the bottle and switch activities.
- Check Box Planning → Box Dimensions & Template; change template views and download the PDF.
- Open the Village and flip through its passport.
- Open Strategy → Promotion → Real-World Example · Hiya and enlarge each screenshot.
- Open the Brand Deck link and confirm the PDF loads without a ChatGPT sign-in.
- Check Bibi's cursor on a desktop and the page layout on a phone.

## Updating the Site

Upload the new hosting-ready index.html and any new or changed assets to the same repository, then commit to main. GitHub Pages republishes automatically. Keep existing assets unless you know no page references them. The original single-file demo is an editing source; do not upload it in place of this hosting-ready index.html.

## Troubleshooting

- **404:** Confirm index.html is at the repository root and Pages uses main / (root). If you uploaded an outer Bibipop-GitHub-Pages folder, move its contents to the repository root.
- **Missing pictures or fonts:** Upload the complete assets folder with its original name and case. Do not upload its files loose at the root.
- **Old version:** Wait for the Pages deployment to finish, then press Ctrl+Shift+R or try a private browser window.
- **Upload limit error:** Use the prepared files in this package. The original all-in-one demo is too large for the browser upload route.
- **Local preview:** Use a local HTTP server when reviewing the hosted export, for example python -m http.server 8000 from this folder, then visit http://localhost:8000. This is a local preview only; the public share link comes from GitHub Pages.

## Sources and Credits

Original team and artwork credits and embedded font licenses are retained in index.html. Hiya screenshot captions link to their source page. The brand guidelines and box template PDFs are included under assets/.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
Upload limits: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
