
import './App.css'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
