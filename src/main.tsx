import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './routes.tsx'
import './index.css'
import { PlayProvider } from './context/PlayContext';
import { ScoreProvider } from './context/ScoreContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlayProvider>
    <ScoreProvider>    
    <MainRoutes />
    </ScoreProvider>
    </PlayProvider> 
  </React.StrictMode>,
)
