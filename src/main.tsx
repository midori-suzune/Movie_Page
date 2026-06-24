import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {MovieProvider} from "./context/MovieProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <MovieProvider>
              <App></App>
          </MovieProvider>
  </StrictMode>,
)
