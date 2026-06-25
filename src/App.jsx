import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import BathroomVanities from './pages/BathroomVanities'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import BuiltIns from './pages/BuiltIns'
import Consultation from './pages/Consultation'
import CustomCabinets from './pages/CustomCabinets'
import FAQ from './pages/FAQ'
import ForgotPassword from './pages/ForgotPassword'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import KitchenCabinets from './pages/KitchenCabinets'
import Login from './pages/Login'
import Process from './pages/Process'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ServiceAreas from './pages/ServiceAreas'
import Testimonials from './pages/Testimonials'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/bathroom-vanities" element={<BathroomVanities />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-post" element={<BlogPost />} />
      <Route path="/built-ins" element={<BuiltIns />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/custom-cabinets" element={<CustomCabinets />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/kitchen-cabinets" element={<KitchenCabinets />} />
      <Route path="/login" element={<Login />} />
      <Route path="/process" element={<Process />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/service-areas" element={<ServiceAreas />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
