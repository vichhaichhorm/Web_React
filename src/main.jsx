import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Welcoming from './components/Welcoming.jsx'
import Presenting from './components/Presenation.jsx'
import Greeting from './components/Greet.jsx'

createRoot(document.getElementById('welcome')).render(
  <StrictMode>
    <Welcoming />
  </StrictMode>,
)
createRoot(document.getElementById('greet')).render(
  <Greeting name='SokSokret' title='front-end developer' />
)

createRoot(document.getElementById('presentation')).render(
  <Presenting name='SokSokret' title='front-end developer' />
)