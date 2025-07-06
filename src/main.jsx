import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormspreeProvider } from '@formspree/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <FormspreeProvider> {/* optional */}
    <App />
    </FormspreeProvider>
  </StrictMode>,
)
