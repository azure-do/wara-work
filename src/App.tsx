import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Works } from './components/Works'
export default function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
