# Golden Wings — Digital Visiting Card

A responsive digital visiting card website for **Golden Wings Global Business Solution and Education Centre**, opened by scanning the QR code on the printed card.

Built with React + Vite + Lucide icons. Frontend only: no backend, no database.

## 1. Add your logo (required)

Your logo is already included. To replace it later:

1. Copy your official logo to `public/assets/goldenwings-logo.png` (use it as supplied; the app never recolors, crops or distorts it).
2. Copy a square version of it to `public/favicon.png` (used as the browser tab icon and iPhone home-screen icon).

The logo and favicon are already in place.

## 2. Run locally

```bash
npm install
npm run dev
```

Open the address shown in the terminal.

## 3. Configure links

All editable links are in **`src/config.js`**:

| Setting | What to do |
| --- | --- |
| `INSTAGRAM_URL` | Already set to the official profile. Set it to `"ADD_YOUR_INSTAGRAM_URL"` to disable the button again. |
| `COUNTRY_LINKS` | Replace `"#"` for India, KSA or Oman with the official website. Options with `"#"` stay disabled. UAE is already set. |
| `WHATSAPP_MESSAGE` | The prefilled WhatsApp message (encoded automatically). |

## 4. Build and deploy to Vercel

```bash
npm run build     # output in dist/
npm run preview   # test the production build locally
```

On Vercel: import the repository (or run `vercel`), keep the defaults — Framework **Vite**, Build command `npm run build`, Output directory `dist`. No environment variables are needed.

After deploying, generate the QR code from the final live URL and test it on both Android and iPhone.

## 5. How the site works

- One responsive page: hero with the animated logo, services grid, contact panel and footer.
- Desktop shows a full-width layout (content up to 1160px); tablets and phones stack into one or two columns.
- Sections fade in as you scroll, and a gold progress bar follows your position.
- Animations are turned off automatically for people who use "reduce motion".

## Project structure

```
public/
  assets/goldenwings-logo.png
  favicon.png
src/
  components/
    Hero.jsx  Services.jsx  ServiceCard.jsx
    Contact.jsx  ContactCard.jsx  CountrySelector.jsx
    Footer.jsx  BrandIcons.jsx
  App.jsx  hooks.js  config.js  main.jsx  index.css
```
