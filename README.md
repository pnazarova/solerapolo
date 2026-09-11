# solerapolo.com

The website of Solera Polo, built with Jekyll and hosted on GitHub Pages at github.com/pnazarova/solerapolo. GitHub builds the site itself on every upload; nothing needs to run on a computer.

## What is where

- `index.html`, `about/`, `services/`, `horses/`, `corporate/`, `contact/`: the six pages. The text lives in these files.
- `thank-you/`, `privacy/`, `404.html`: the utility pages.
- `_data/prices.yml`: the horse rental prices and the conditions line. Change a number here and Services, Horses and Contact all update.
- `_data/nav.yml`: the menu. `_data/topics.yml`: the options in "I am interested in" on the contact form.
- `_layouts/default.html`: the shell around every page (head, header, closing band, footer).
- `_includes/`: the header, band, footer, prices block, form, and the SVG icons.
- `_config.yml`: site settings: email, WhatsApp number, Instagram, and the Web3Forms key.
- `assets/css/site.css`, `assets/js/site.js`, `assets/fonts/`, `assets/img/`, `assets/logo/`.
- `CNAME`: binds solerapolo.com to this repository. Never delete it.

## Before the first upload

1. Create the Web3Forms access key for info@solerapolo.com at web3forms.com and paste it into `_config.yml` where it says `PASTE_WEB3FORMS_KEY_HERE`. The key is meant to be public; a public repository is fine.
2. In the repository on github.com, delete the old `index.html` and `og-image.jpg` first, or simply upload; files with the same name are replaced.
3. Optional: delete `.github/workflows/jekyll-docker.yml`. It only runs a test build and is not needed for publishing.

## How to upload

On github.com, open the repository, choose Add file, then Upload files, and drag the whole folder in. Folders keep their structure when you drag a folder rather than its contents. Commit. The site rebuilds within a minute or two. If a page still shows the old version after a few minutes, open the Actions tab; a failed build says why.

## How to change things

- Text: edit the page file directly on github.com (the pencil icon) and commit.
- A price: edit `_data/prices.yml`.
- A photo: add the file to `assets/img/` and change the `src` in the page. Photos are shown in black and white and turn to colour on hover, so upload colour originals.
- The contact email or WhatsApp number: `_config.yml`.

## Things to know

- Prices carry no VAT; the conditions line under each block says so and is the only place it needs to be said.
- The site sets no cookies and loads nothing from third parties except the form relay on submit, so no cookie banner is needed. Adding analytics later would change that.
- Fonts are self hosted in `assets/fonts/` (Bodoni Moda and Jost, Open Font License). Bodoni Moda is used at 28px and above only.
- Do not add a file named `.nojekyll`; it switches the build off.
