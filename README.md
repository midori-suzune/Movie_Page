# Movie Page

Movie Page is a React + TypeScript movie browsing app built with Vite. The app uses TMDB API data to show popular movies, search movies by title, and manage a local favorites list.

## Features

- Browse popular movies
- Search movies by title
- Add and remove favorite movies
- View favorite movies on a separate page
- Sign in and sign up pages with shared auth layout
- Shared root layout with navigation and footer

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- TMDB API

## Project Structure

```txt
src/
  components/     Reusable UI components
  context/        Movie favorite state and context
  layout/         Root and auth layouts
  pages/          App pages
  routes/         Route definitions
  services/       API calls
  types/          Shared TypeScript types
```

## Routes

```txt
/movie-page           Home page
/movie-page/favorite  Favorite movies
/movie-page/sign-in   Sign in page
/movie-page/sign-up   Sign up page
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint:

```bash
npm run lint
```

## API

Movie data is loaded from [The Movie Database API](https://developer.themoviedb.org/docs).

The current API key is defined in:

```txt
src/services/movieService.ts
```

For production projects, move API keys into environment variables instead of committing them directly in source code.
