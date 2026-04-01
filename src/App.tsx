import { BrowserRouter, Link, Routes, Route } from 'react-router'
import './App.css'
import Home from './Home.tsx'
import Footer from './Footer.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/reviews" element={<></>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </>
    
  )
}

export default App
