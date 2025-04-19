import { useEffect } from "react"
import Navigation from "./Navigation"

function App() {

  useEffect(() => {
    if(!localStorage.getItem('active')) {
      localStorage.setItem('active', 'home');
    }
  }, [])

  return <Navigation />
}

export default App
