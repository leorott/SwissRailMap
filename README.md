# Mashup

Diese Mashup-Applikation verwendet die Google Places und Opendata Transport API. Auf der Seite kann man Zugrouten suchen, indem man ein Abfahrt- und Ankunftsort auswählt. Sobald diese Orte und die Zeit bestimmt wurden, werden Geschäfte, Restaurants und andere Orte in der Umgebung des Abfahrt- und Ankunftsort empfohlen. Die Orte, die bei der Transport API verwendet werden, werden zusätzlich bei der Google Places API mit einem bestimmten Radius verwendet. Um diese Nuxt App lokal laufen zu lassen, wird eine .env Datei mit dem API Key der Places API als env Variable benötigt, da man diesen Key nicht veröffentlichen sollte. Die benötigte .env Variable wird im Auftrag auf Teams vorhanden sein.

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
## yarn
yarn install

## npm
npm install

## pnpm
pnpm install --shamefully-hoist
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
