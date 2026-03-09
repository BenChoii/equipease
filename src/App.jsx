import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhyUs from './pages/WhyUs'
import Industries from './pages/Industries'
import Apply from './pages/Apply'
import Blog from './pages/Blog'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
