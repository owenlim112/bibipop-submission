# Bibipop · Capstone Website

A static website for reviewing the Bibipop brand, go-to-market strategy, subscription experience, Village launch and consulting journey.
https://owenlim112.github.io/bibipop-submission/ 

## Publish on GitHub Pages

1. Extract the ZIP on your computer. Upload the extracted contents, not the ZIP itself.
2. Sign in at https://github.com and select **+ → New repository**.
3. Name it **bibipop-review**, choose **Public**, turn **Add README** on, and create the repository. GitHub Free Pages hosting requires a public repository. The website is publicly accessible.
4. In the repository, choose **Add file → Upload files**. Drag **index.html**, the complete **assets** folder, **README.md** and **.nojekyll** from this package into the upload area. If Windows hides .nojekyll, enable File Explorer → View → Show → Hidden items, or create an empty file named .nojekyll in GitHub afterward. Keep the assets folder structure.
5. Commit the upload to **main** with the message **Publish Bibipop review website**. If GitHub suggests a new branch, select main or merge the proposed changes into main before publishing.
6. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Select branch **main** and folder **/(root)**, then **Save**.
7. Wait for the deployment to finish. Check the **Actions** tab if needed; publication can take up to 10 minutes. Return to **Settings → Pages → Visit site**.
8. Share **https://YOUR-USERNAME.github.io/bibipop-review/** with the group. Replace YOUR-USERNAME with your actual GitHub username. Share this live website URL, rather than the repository URL.

## Expected Repository Contents

- index.html — the website entry point, directly at the repository root.
- assets/ — images, textures, fonts and PDF documents. Keep filenames and structure intact.
- .nojekyll — serves the prepared static files without Jekyll processing.
- README.md — these instructions.

The package contains 96 files. Each file is below GitHub's 25 MiB browser-upload limit, and the total file count is below the 100-file limit per upload. No Node.js install, build command, backend, API key or Git LFS is needed.

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
