# Hemanth's Portfolio — project source

## Project info

**URL**: your published site URL (set this when you deploy)

## How can I edit this code?

There are several ways of editing your application.

Editing and deploying this project can be done locally using the commands below. This repository contains the full source code for Hemanth's Portfolio.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will be reflected in your Git host and your chosen deployment.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

To publish this site, you can build a static bundle and deploy to any static host (Vercel, Netlify, GitHub Pages, or your own server). For example:

```sh
# build production artifacts
npm run build

# serve the production build locally (optional)
npx serve dist
```

If you use a hosting provider, follow their instructions to point your domain and publish the contents of the `dist/` directory.

## Can I connect a custom domain?

Yes, you can connect a custom domain at your hosting provider or DNS registrar. The exact steps differ by host — see your provider's documentation (e.g., Netlify, Vercel, GitHub Pages) for instructions on adding and configuring a custom domain.
